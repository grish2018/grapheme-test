<template>
  <div @click="$emit('shippingStep', 'shipping')" class="thankeYouStep">
    <ThankeYouIcon class="thankeYouStep__icon" />
    <span class="thankeYouStep__message">Спасибо!</span>
  </div>
</template>

<script>
import ThankeYouIcon from "./../assets/icons/thankeYouIcon.svg";
export default {
  name: "ThankeYouStep",
  components: { ThankeYouIcon },
};
</script>

<style lang="scss" scoped>
.thankeYouStep {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__icon {
    margin-bottom: 10px;
  }
  &__message {
    font-family: "Helvetica Neue";
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    color: #000000;
  }
}
</style>