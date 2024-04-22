
import PropTypes from 'prop-types';
import Button from './Button.jsx';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div>
    {filters.map(filter => (
      <Button
        key={filter}
        filter={filter}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
    ))}
  </div>
);

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

export default Toolbar;