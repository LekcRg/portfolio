<template lang="pug">
header.header
  .header__title-wrapper
    h1.header__title Панель администрирования
  .header__back-wrapper
    a.header__back(href='/') Вернуться на сайт
</template>

<style lang="scss">
.header {
  width: 100%;
  padding: 0;
  margin: 0;
  background: #6c9c5a;
  color: #fff;
  padding: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  &__title {
    font-weight: 400;
    font-size: 28px;
  }
  &__back {
    color: rgba(#fff, 0.7);
    transition: color 0.4s ease;
    &-wrapper {
      margin-left: auto;
      @media screen and (max-width: 420px) {
        visibility: hidden;
      }
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
