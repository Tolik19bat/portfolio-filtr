// Toolbar.jsx
import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={selected === filter ? 'active' : ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// Определяем PropTypes для компонента Toolbar
Toolbar.propTypes = {
  // filters - список фильтров (массив строк)
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  // selected - активный фильтр (строка)
  selected: PropTypes.string.isRequired,
  // onSelectFilter - обработчик события выбора фильтра (функция)
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
