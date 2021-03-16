<template>
  <header class="header">
    <span class="header__header"> Тестовое задание </span>
    <GraphemeLogo />
  </header>
</template>

<script>
import GraphemeLogo from "@/assets/icons/graphemeLogo.svg";
export default {
  name: "Header",
  components: {
    GraphemeLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  &__header {
    font-family: "Helvetica Neue";
    font-size: 34px;
    line-height: 41px;
    color: #000000;
  }
}
</style>