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
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          commit("addSkillToState", response.data);
          console.log("addSkill", response);
          if (response.status === 201) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Скилл успешно добавлен";
            modal.classList.add("modal--active");
          } else {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = response.error;
            modal.classList.add("modal--active");
          }
        })
        .catch(er => {
          console.error(er);
          const modal = document.querySelector(".modal");
          const modalText = modal.querySelector(".modal__text");
          const errors = er.response.data.errors;
          console.log(errors);

          for (let error in errors) {
            console.log(error);
          }

          modalText.innerText = er.response.data.errors.percents;

          modal.classList.add("modal--active");
        });
    },
    fetchSkills({ commit }) {
      return this.$axios.get("/skills/23").then(response => {
        commit("fullUpSkills", response.data);
      });
    },
    removeOldSkill({ commit }, skill) {
      console.log(skill);

      return this.$axios
        .delete("/skills/" + skill.id)
        .then(response => {
          console.log("worked!", response);
          commit("deleteSkillToState", skill);
          if (response.status === 200) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Скилл успешно удален";

            modal.classList.add("modal--active");
          }
        })
        .catch(er => {
          console.error(er);
          const modal = document.querySelector(".modal");
          const modalText = modal.querySelector(".modal__text");

          modalText.innerText = er;
          modal.classList.add("modal--active");
        });
    }
  }
};

export default skills;
