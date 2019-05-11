const blog = {
  state: {
    data: []
  },
  mutations: {
    fullUpPosts(state, posts) {
      state.data = posts;
    },
    addPostsToState(state, posts) {
      state.data.push(posts);
    },
    deletePostsToState(state, post) {
      const data = state.data;
      const index = data.indexOf(post);
      data.splice(index, index);
    }
  },
  actions: {
    addNewPost({ commit }, post) {
      console.log(post);

      return this.$axios
        .post("/posts", post)
        .then(response => {
          commit("addPostsToState", response.data);

          console.log("sdfasdf!", response);
          if (response.status === 201) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Запись успешно добавлена";
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
    fetchPosts({ commit }) {
      return this.$axios.get("/posts/23").then(response => {
        commit("fullUpPosts", response.data);
      });
    },
    removeOldPost({ commit }, post) {
      console.log(post);

      return this.$axios
        .delete("/posts/" + post.id)
        .then(response => {
          console.log("asdfasdf!", response);
          commit("deletePostsToState", post);
          if (response.status === 200) {
            const modal = document.querySelector(".modal");
            const modalText = modal.querySelector(".modal__text");

            modalText.innerText = "Запись успешно удалена";
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

export default blog;
