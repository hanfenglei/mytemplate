<template>
  <div>hhhhhh</div>
</template>


<script>
import path from "path";

export default {
  name: "SidebarItem",
  components: {
    // Item,
    // AppLink
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: "",
          noShowingChildren: true
        };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }

      if (isExternal(this.basePath)) {
        return this.basePath;
      }

      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>


<style scoped>
</style>
