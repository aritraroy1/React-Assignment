import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";

let selectedProject;

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: null
      }
    });
  }

  function handleAddProject(projectData) {

    console.log(projectData);
    setProjectState(prevProjectState => {

      const newProject = {
        ...projectData,
        id: Math.random(),
        taskList: []
      };

      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject]
      }
    });
  }

  function handleCancel() {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined
      }
    });
  }

  function handleOpenProject(projectId) {

    selectedProject = projectState.projects.filter(project => project.id === projectId)[0];
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: selectedProject.id
      }
    });
  }


  function handleDeleteProject() {
    selectedProject = undefined;
    setProjectState((prevProjectState) => {
      return {
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(project => project.id != prevProjectState.selectedProjectId)
      };
    });

  }

  function handleAddTask(taskDetails) {

    setProjectState(prevProjectState => {
      selectedProject.taskList.push(taskDetails);
      return {
        ...prevProjectState
      }
    });

  }

  function handleDeleteTask(taskDetails) {

    setProjectState(prevProjectState => {
      selectedProject.taskList = selectedProject.taskList.filter(task => task != taskDetails);
      console.log(selectedProject.taskList);
      return {
        ...prevProjectState
      }
    });

  }

  let content;
  if (projectState.selectedProjectId === null) {

    content = <NewProject onSave={handleAddProject} onCancel={handleCancel} />;

  } else if (projectState.selectedProjectId === undefined) {

    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  } else {

    content = (
      <ProjectDetails
        project={selectedProject}
        deleteProject={handleDeleteProject}
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
      />
    );

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        openProject={handleOpenProject}
        selectedProjectId={selectedProject ? selectedProject.id : undefined}
      />
      {content}
    </main>
  );
}

export default App;
