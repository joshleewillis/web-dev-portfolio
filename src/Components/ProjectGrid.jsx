import { useState } from 'react';
import projectArray from './ProjectArray.jsx';

export default function ProjectGrid() {
  // Track the expanded state of each project using an object.
  const [expandedProjects, setExpandedProjects] = useState({});
  const [isReversed, setIsReversed] = useState(false);
  const [currentArray, setCurrentArray] = useState(projectArray);

  // Toggle the expanded state for the clicked project.
  const toggleExpanded = (projectId) => {
    setExpandedProjects((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId] // Toggle the expanded state for the specific project.
    }));
  };

  const handleAnimation = () => {
    const projectGrid = document.getElementById('project-grid');
    
    projectGrid.classList.add('project-grid-reversed');

    setTimeout(() => {
      projectGrid.classList.remove('project-grid-reversed');
    }, 1000);
  }

  const toggleProjectGridOrder = () => {
    // Animate the project grid when it is reordered.
    handleAnimation();

    setIsReversed(prevState => {
      const newState = !prevState;

      // Reverse the array only if the state changes.
      setCurrentArray(prevState ? projectArray : [...projectArray].reverse());

      return newState;
    });
  };

  return (
    <main>
      <section id="project-grid-container">
        <div id="project-grid-heading">
          <h2 id="project-section-title">My Work:</h2>
          <p id="project-heading-text">
            Below is a list of all my projects. Click <b>'Show Description'</b> below the title of each project for more details about how it works and my process for building it.
          </p>
          <div id="select-menu-container">
            <label htmlFor="order-select">Sort by: </label>
            <select id="order-select" value={isReversed ? 'oldest-to-newest' : 'newest-to-oldest'} onChange={toggleProjectGridOrder}>
              <option value="newest-to-oldest">Newest to Oldest</option>
              <option value="oldest-to-newest">Oldest to Newest</option>
            </select>
          </div>
        </div>

        <div id="project-grid">
          {
            currentArray.map((project) => (
              <div 
                className={expandedProjects[project.id] ? "project-tile" : "project-tile-hidden"} 
                key={project.id}
              >
                <div className="image-and-list-container">
                  <img 
                    src={project.src} 
                    className="project-image" 
                    alt={project.title + " Project Screenshot"} 
                  />

                  <div className="list-container">
                    <ul>
                      <li className="list-item">
                        <b>Project Purpose/Function:</b> {project.purpose}
                      </li>
                      <li className="list-item">
                        <b>What I learned:</b> {project.lessons}
                      </li>
                      <li className="list-item">
                        <b>Technologies used:</b> {project.technologies}
                      </li>
                      <li className="list-item">
                        Link to <b><a 
                          href={project.link}
                          aria-label={"Go to: " + project.title + " Project (opens in a new tab)"}
                          title={"Go to: " + project.title + " Project (opens in a new tab)"}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          project/source code
                        </a></b>
                      </li>
                    </ul>
                  </div>
                </div>
    
                <a 
                  className="project-title-anchor" 
                  href={project.link} 
                  aria-label={"Go to: " + project.title + " Project (opens in a new tab)"}
                  title={"Go to: " + project.title + " Project (opens in a new tab)"}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <p className="project-title">
                    <span className="hover-underline-animation">{project.title}</span>
                  </p>
                </a>
                
                {/* Button to toggle the description */}
                <button 
                  className="show-hide-button" 
                  onClick={() => toggleExpanded(project.id)}
                  aria-expanded={expandedProjects[project.id] || "false"}
                  aria-controls={`project-desc-${project.id}`}
                >
                  {expandedProjects[project.id] ? 'Hide Description' : 'Show Description'}
                </button>

                {/* Conditional rendering of the project description */}
                {expandedProjects[project.id] && (
                  <p
                    id={`project-desc-${project.id}`}
                    className={expandedProjects[project.id] ? "project-description" : "project-description-hidden"}
                  >
                    {project.description}
                  </p>
                )}
              </div>
            ))
          } 
        </div>  
      </section>
    </main>
  );
}