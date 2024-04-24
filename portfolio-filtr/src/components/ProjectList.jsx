// ProjectList.jsx
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={uuidv4()} className="project">
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
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
