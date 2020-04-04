import { createClient } from "~/plugins/contentful";

const contentfulClient = createClient();
export const state = () => ({
  projects: null,
  experiences: null,
  aboutme: null
});

export const mutations = {
  setAllProjects(state, data) {
    state.projects = data;
  },
  setAllExperiences(state, data) {
    state.experiences = data;
  },
  setAboutMe(state, data) {
    state.aboutme = data;
  }
};

export const actions = {
  getAllProjects({ commit }) {
    contentfulClient
      .getEntries({
        content_type: "projects",
        order: "-sys.createdAt"
      })
      .then(res => {
        if (res) {
          const projects = res.items;
          commit("setAllProjects", projects);
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  },
  getAllExperiences({ commit }) {
    contentfulClient
      .getEntries({
        content_type: "experiences",
        order: "fields.startDate"
      })
      .then(res => {
        if (res) {
          const experiences = res.items;
          commit("setAllExperiences", experiences);
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  },
  getAboutMe({ commit }) {
    contentfulClient
      .getEntry("6e2K1wY4yJSJ8qLb6j4GL")
      .then(aboutMe => {
        if (aboutMe) {
          commit("setAboutMe", aboutMe);
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  },
  downloadResume({ browser }) {
    contentfulClient
      .getAsset("5MCb3ffKpCgKL5c7X8AlUa")
      .then(resume => {
        if (resume) {
          window.open(resume.fields.file.url);
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
