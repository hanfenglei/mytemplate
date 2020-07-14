<template>
  <div class="navbar">
    <hamburger
      is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    ></hamburger>

    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper"></div>
        <el-dropdown-menu></el-dropdown-menu>>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  components: {
    // Breadcrumb,
    // Hamburger
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispath("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispath("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>

<style scoped></style>
