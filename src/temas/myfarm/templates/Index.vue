<template>
  <component :is="type">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Centerrr</el-menu-item>
      <el-submenu index="2">
        <template slot="title"
          >Workspace</template
        >
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title"
            >item four</template
          >
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
  </component>
</template>

<script>
import yaml from "js-yaml"
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "Index",
  status: "deprecated",
  created() {},
  release: "1.0.0",
  metaInfo: {
    title: "Vue Design System",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../tokens/_index.scss";

.index {
  background: $color-white;
  background: linear-gradient(0deg, $color-white, $color-primary 100%);
  text-align: center;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  @media #{$media_query_lg} {
    // This is how you’d use design tokens with media queries
  }
  .heading {
    color: $font-text;
  }
  .paragraph {
    color: $font-text;
  }
  .text-link {
    color: $color-secondary;
  }
  .wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  a {
    font-family: $font-text;
    color: $color-support-info;
    text-decoration: underline;
  }
}
</style>

<docs>
  ```jsx
  <Index />
  ```
</docs>
