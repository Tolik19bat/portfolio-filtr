import PropTypes from 'prop-types';
import Project from './Project.jsx';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <Project key={project.id} project={project} />
    ))}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
}

export default ProjectList;