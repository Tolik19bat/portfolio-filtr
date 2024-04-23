import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import data from '../data'; // Здесь подставьте свои данные
import PropTypes from 'prop-types';

class Portfolio extends Component {
  state = {
    getAllPortfolio: data, // Загрузите данные из файла data.js
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

export default Portfolio;