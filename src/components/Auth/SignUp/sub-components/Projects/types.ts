export type PreAddProjectPropTypes = {
  nextStep: Function;
  skipProjects: any;
};

export type AddProjectPropTypes = {
  handleChange: Function;
  projects: any;
  submit: Function;
  skipProjects: any;
  addNewProject: any;
  removeProject: any;
};

export type Project = {
  id: number | null;
  projectName: string;
  projectAddress: string;
  projectYear: string;
  projectCost: string;
  projectCategory: string;
  projectImages: Array<any>;
};
