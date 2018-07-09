const skills = {
  state: {
    data: []
  },
  mutations: {
    fullUpSkills(state, skills) {
      state.data = skills;
    },
    addSkillToState(state, skill) {
      state.data.push(skill);
    },
    deleteSkillToState(state, skill) {
      const data = state.data;
      const index = data.indexOf(skill);
      data.splice(index, index);
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      return this.$axios.post("/skills", skill).then(response => {
        commit("addSkillToState", response.data);
        console.log("addSkill", response);
      });
    },
    fetchSkills({ commit }) {
      return this.$axios.get("/skills/23").then(response => {
        commit("fullUpSkills", response.data);
      });
    },
    removeOldSkill({ commit }, skill) {
      console.log(skill);

      return this.$axios.delete("/skills/" + skill.id).then(response => {
        console.log("worked!", response);
        commit("deleteSkillToState", skill);
      });
    }
  }
};

export default skills;
