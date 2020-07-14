<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped></style>
