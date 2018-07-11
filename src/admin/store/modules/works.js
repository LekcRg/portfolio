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

      return this.$axios
        .post("/works", work)
        .then(response => {
          commit("addWorksToState", response.data);

          console.log("worked!", response);
          if (response.status === 201) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Работа успешно добавлена";

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
    },
    fetchWorks({ commit }) {
      return this.$axios.get("/works/23").then(response => {
        commit("fullUpWorks", response.data);
      });
    },
    removeOldWork({ commit }, work) {
      console.log(work);

      return this.$axios
        .delete("/works/" + work.id)
        .then(response => {
          console.log("worked!", response);
          commit("deleteWorksToState", work);
          if (response.status === 200) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Работа успешно удалена";
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

export default works;
