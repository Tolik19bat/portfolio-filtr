import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import data from '../data';

class Portfolio extends Component {
  state = {
    getAllPortfolio: data,
    portfolio: data, // Изначально показываем все проекты
    categories: ['All', 'Websites', 'Flayers', 'Business Cards'],
    selectedCategory: 'All', // Изначально выбран фильтр "All"
    activeFilter: 'All',
  };

  filterItems = (category) => {
    if (category === 'All') {
      this.setState({
        selectedCategory: category,
        portfolio: this.state.getAllPortfolio,
        activeFilter: category,
      });
    } else {
      this.setState({
        selectedCategory: category,
        portfolio: this.state.getAllPortfolio.filter(
          (item) => item.category === category
        ),
        activeFilter: category,
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
        <ProjectList projects={this.state.portfolio} activeFilter={this.state.activeFilter} />
      </div>
    );
  }
}

// Определяем PropTypes для компонента Portfolio
Portfolio.propTypes = {
  // filters - список фильтров (массив строк)
  filters: PropTypes.arrayOf(PropTypes.string),
  // selected - активный фильтр (строка)
  selected: PropTypes.string,
  // onSelectFilter - обработчик события выбора фильтра (функция)
  onSelectFilter: PropTypes.func,
};

export default Portfolio;