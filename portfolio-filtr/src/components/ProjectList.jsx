// ProjectList.jsx
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.img} alt={project.name} />
          <span>{project.category}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
