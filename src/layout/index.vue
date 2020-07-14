<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      @click="handleClickOutside"
    ></div>

    <sidebar class="sidevar-container"></sidebar>

    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar></navbar>
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidevar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidevar.opened,
        openSideBar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style scoped></style>
