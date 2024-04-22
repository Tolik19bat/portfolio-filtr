import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div key={project.id}>
    <img src={project.imageUrl} alt={project.category} />
    <p>{project.category}</p>
  </div>
);

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default Project;