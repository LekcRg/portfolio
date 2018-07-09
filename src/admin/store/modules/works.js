const works = {
  state: {
    data: []
  },
  mutations: {
    fullUpWorks(state, works) {
      state.data = works;
    },
    addWorksToState(state, works) {
      state.data.push(works);
    },
    deleteWorksToState(state, work) {
      const data = state.data;
      const index = data.indexOf(work);
      data.splice(index, index);
    }
  },
  actions: {
    addNewWork({ commit }, work) {
      console.log(work);

      return this.$axios.post("/works", work).then(response => {
        commit("addWorksToState", response.data);

        console.log("worked!", response);
      });
    },
    fetchWorks({ commit }) {
      return this.$axios.get("/works/23").then(response => {
        commit("fullUpWorks", response.data);
      });
    },
    removeOldWork({ commit }, work) {
      console.log(work);

      return this.$axios.delete("/works/" + work.id).then(response => {
        console.log("worked!", response);
        commit("deleteWorksToState", work);
      });
    }
  }
};

export default works;
