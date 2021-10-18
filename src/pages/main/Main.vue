<template>
  <div>
    <div class="nav-body">
      <div
        class="tab"
        v-for="tab in tabs"
        :key="tab.value"
        @click="onTabClick(tab.value)"
      >
        tab {{ tab.name }}
      </div>
    </div>
    <div v-if="selectedTab === 1">Nav A - Tab a body</div>
    <div v-if="selectedTab === 2">Nav A - Tab b body</div>
    <div v-if="selectedTab === 3">Nav B - Tab c body</div>
    <div v-if="selectedTab === 4">Nav B - Tab d body</div>
  </div>
</template>

<script>
import store from "../../store/index";

export default {
  methods: {
    onTabClick(value) {
      this.selectedTab = value;
    },
    fetchData() {
      const cloneTo = Object.assign({}, this.$route);
      const auth = cloneTo.meta.auth;
      const tabsByNavigation = store.getters["hasActionPermission"](auth);
      if (tabsByNavigation) {
        console.log(tabsByNavigation);
        this.tabs = [...tabsByNavigation].map((it) => ({
          name: it.name,
          value: it.value,
        }));
        this.selectedTab = this.tabs[0].value;
      }
    },
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      tabs: [],
      selectedTab: 1,
    };
  },
  //   beforeRouteEnter(to, from, next) {
  //     const cloneTo = Object.assign({}, to);
  //     const auth = cloneTo.meta.auth;
  //     console.log("auth", cloneTo.meta.auth);
  //     const tabsByNavigation = store.getters["hasActionPermission"](auth);
  //     if (tabsByNavigation) {
  //       console.log(tabsByNavigation);
  //       const tabs = [...tabsByNavigation].map((it) => ({
  //         name: it.name,
  //         value: it.value,
  //       }));
  //       console.log(tabs);
  //       next();
  //     } else {
  //       next();
  //     }
  //   },
};
</script>
