<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <side-nav :tabs="navigations" :onClick="onNavClick" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNav from "./pages/layout/SideNav.vue";
export default {
  name: "App",
  components: {
    SideNav,
  },
  data() {
    return {
      navigations: [
        {
          name: "A",
          value: "A",
        },
        {
          name: "B",
          value: "B",
        },
      ],
    };
  },
  computed: {
    // navigations() {
    //   return [
    //     {
    //       name: "A",
    //       value: "A",
    //     },
    //     {
    //       name: "B",
    //       value: "B",
    //     },
    //   ];
    // },
  },
  methods: {
    onNavClick: (id) => {
      window.location.href = `/page/${id}`;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
