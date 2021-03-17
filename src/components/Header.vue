<template>
  <header class="header">
    <span class="header__header"> Тестовое задание </span>
    <GraphemeLogo class="header__logo" />
    <MobileGraphemeLogo class="header__mobileLogo" />
  </header>
</template>

<script>
import GraphemeLogo from "@/assets/icons/graphemeLogo.svg";
import MobileGraphemeLogo from "@/assets/icons/mobileGraphemeLogo.svg";
export default {
  name: "Header",
  components: {
    GraphemeLogo,
    MobileGraphemeLogo,
  },
};
</script>

<style lang="scss" scoped>
@import "../style";
.header {
  height: 100px;
  width: 100%;
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  &__mobileLogo {
    display: none;
    @include sm {
      display: flex;
    }
  }
  &__logo {
    display: flex;
    @include sm {
      display: none;
    }
  }
  &__header {
    font-family: "Helvetica Neue";
    font-size: 34px;
    line-height: 41px;
    color: #000000;
    @include sm {
      font-size: 24px;
      line-height: 24px;
    }
  }
  @include sm {
    height: 50px;
  }
}
</style>