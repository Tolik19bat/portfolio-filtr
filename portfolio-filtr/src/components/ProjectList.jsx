// ProjectList.jsx
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.img} alt={project.name} />
        </div>
      ))}
    </div>
  );
};

// Определяем PropTypes для компонента ProjectList
ProjectList.propTypes = {
  // projects - список проектов (массив объектов)
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
