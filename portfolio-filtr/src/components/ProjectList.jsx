// ProjectList.jsx
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


const ProjectList = ({ projects, activeFilter }) => {
  const getProjectListHeight = () => {
    switch (activeFilter) {
      case 'All':
        return '180rem';
      case 'Websites':
        return '112rem';
      case 'Flayers':
        return '55rem';
      case 'Business Cards':
        return '75rem';
      // default:
      //   return 'auto';
    }
  }

  return (
    <div className="project-list" style={{ height: getProjectListHeight() }}>
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
  activeFilter: PropTypes.string.isRequired,
};

export default ProjectList;
