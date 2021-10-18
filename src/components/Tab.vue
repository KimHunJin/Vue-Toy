<template>
  <div class="tab" @click="onClick">{{ name }}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    onClick: {
      type: Function,
      require: false,
    },
  },
};
</script>
