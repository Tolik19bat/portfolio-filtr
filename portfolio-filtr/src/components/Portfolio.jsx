import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import data from '../data'; 
import PropTypes from 'prop-types';

class Portfolio extends Component {
  state = {
    getAllPortfolio: data,
    portfolio: data, // Изначально показываем все проекты
    categories: ['All', 'Websites', 'Flayers', 'Business Cards'],
    selectedCategory: 'All', // Изначально выбран фильтр "All"
  };

  filterItems = (category) => {
    if (category === 'All') {
      this.setState({
        selectedCategory: category,
        portfolio: this.state.getAllPortfolio,
      });
    } else {
      this.setState({
        selectedCategory: category,
        portfolio: this.state.getAllPortfolio.filter(
          (item) => item.category === category
        ),
      });
    }
  };

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.state.categories}
          selected={this.state.selectedCategory}
          onSelectFilter={this.filterItems}
        />
        <ProjectList projects={this.state.portfolio} />
      </div>
    );
  }
}

// Определяем PropTypes для компонента Portfolio
Portfolio.propTypes = {
  // filters - список фильтров (массив строк)
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  // selected - активный фильтр (строка)
  selected: PropTypes.string.isRequired,
  // onSelectFilter - обработчик события выбора фильтра (функция)
  onSelectFilter: PropTypes.func.isRequired,
};

export default Portfolio;