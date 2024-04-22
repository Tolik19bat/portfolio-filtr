
import PropTypes from 'prop-types';
import { useState } from 'react';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';
import data from "../data.js"

const Portfolio = () => {
  const [selected, setSelected] = useState("All");
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const projects = [...data.projects];

  const onSelectFilter = (filter) => {
    setSelected(filter);
  }

  const filteredProjects = projects.filter(project => selected === "All" || project.category === selected);

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

Portfolio.propTypes = {
    projects: PropTypes.array.isRequired,
}
export default Portfolio;
