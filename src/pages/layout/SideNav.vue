<template>
  <aside class="left-menu">
    <div
      class="nav"
      v-for="tab in tabs"
      :key="tab.value"
      @click="onClick(tab.value)"
    >
      nav {{ tab.name }}
    </div>
  </aside>
</template>
<script>
export default {
  name: "side-nav",
  /**
   * tabs: [
   *    {
   *        name: String,
   *        value: String
   *    }
   * ]
   */
  props: {
    tabs: {
      type: Array,
      require: true,
    },
    onClick: {
      type: Function,
      require: false,
    },
  },
};
</script>
