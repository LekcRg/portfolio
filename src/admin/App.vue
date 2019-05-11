<template lang="pug">
#root
  router-view(name='header')
  router-view(name='nav')
  .content
    router-view
  .modal 
    span.modal__text error
    button.button(type='button' @click='closeModal') Закрыть
</template>

<script>
export default {
  methods: {
    closeModal() {
      const modal = document.querySelector(".modal");
      console.log(modal);
      modal.classList.remove("modal--active");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  position: relative;
  width: 100%;
  height: 100%;
}
body,
html {
  font-family: "Roboto";
  height: 100%;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}
input,
textarea {
  border: none;
  padding: 16px 20px;
  border-radius: 5px;
  font-size: 15px;
  color: #566358;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
}
.wrapper,
#root {
  height: 100%;
}
#root {
  display: flex;
  flex-direction: column;
}

.content {
  display: block;
  width: 100%;
  padding: 30px;
  color: #566358;
  &:before {
    content: "";
    position: fixed;
    background: url("./bg.jpg") center / cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  @media screen and (max-width: 420px) {
    padding: 10px;
  }
}
.button {
  border: none;
  padding: 7px 10px;
  font-size: 15px;
  font-weight: 300;
  border-radius: 5px;
  background: #6c9c5a;
  transition: background 0.4s ease;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #518040;
  }
}
.tab__title {
  margin-bottom: 35px;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 280px;
  height: 115px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease;
  padding: 7px 15px;
  &__text {
    color: #566358;
    font-weight: 400;
    margin-bottom: 15px;
  }
  &--active {
    visibility: visible;
    opacity: 1;
  }
  &--hide {
    visibility: hidden;
    opacity: 0;
  }
}
input,
textarea,
button {
  outline: none;
}
</style>
