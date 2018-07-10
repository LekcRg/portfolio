<template lang="pug">
.navigation
  nav.nav
    ul.nav__list
      li.nav__item(v-for='tab in tabs')
        router-link.nav__link(
          :to='tab.href'
        ) {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss">
.navigation {
  width: 100%;
}
.nav {
  &__list {
    width: 100%;
    background: #f0efe9;
  }
  &__item {
    display: inline-flex;
  }
  &__link {
    color: #566358;
    background: #f0efe9;
    padding: 25px 70px;
    text-decoration: none;
    transition: all 0.5s ease;
    &--active {
      color: #6c9c5a;
      background: #fff;
    }
    &:hover {
      color: #6c9c5a;
      background: #fff;
    }
  }
}
</style>
