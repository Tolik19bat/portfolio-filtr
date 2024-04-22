import PropTypes from 'prop-types';

const Button = ({ filter, selected, onSelectFilter }) => {
  const handleClick = () => {
    onSelectFilter(filter);
  };

  return (
    <button
      className={filter === selected ? 'active' : ''}
      onClick={handleClick}
    >
      {filter}
    </button>
  );
};

Button.propTypes = {
  filter: PropTypes.string,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
}
export default Button;
