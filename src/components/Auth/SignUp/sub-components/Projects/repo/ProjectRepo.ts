import { Project } from "../types";
export let projects: Project[] = [];

export function getProjectById(id: number) {
  return projects.find((item) => item.id === id);
}
export function addProject(project: any) {
  const exitsingProject = getProjectById(project.id);
  if (exitsingProject) {
    const indexOfProject = projects.indexOf(exitsingProject);
    projects.splice(indexOfProject, 1, project);
  } else {
    console.log(project);
    projects.push(project);
    console.log(projects);
  }
}
export function removeProject(id: number, setAllProjects: any) {
  const project = getProjectById(id);
  console.log(id);
  if (project) {
    let copyOfProjects: Project[] = [...projects];
    const projectIndex = projects.indexOf(project);
    copyOfProjects.splice(projectIndex, 1);
    projects = copyOfProjects;
    setAllProjects(copyOfProjects);
  }
}
export function getNextID() {
  const lastAddedProject: any = projects.at(projects.length - 1);
  let id: number;
  if (lastAddedProject) {
    id = lastAddedProject.id + 1;
  } else {
    id = 0;
  }
  return id;
}
