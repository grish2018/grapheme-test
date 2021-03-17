<template>
  <div id="app">
    <Header />
    <main>
      <div class="formWrapper">
        <div v-show="step !== 'thankYou'" class="formWrapper__stepper">
          <span
            clas="formWrapper__stepper__item"
            :class="{ currentStep: step === 'shipping' }"
            >Доставка</span
          >
          <ArrowRigthIcon />
          <span :class="{ currentStep: step === 'payment' }">Оплата</span>
        </div>
        <transition name="fade">
          <ShippingForm v-if="step === 'shipping'" @paymentStep="changeStep" />
        </transition>
        <transition name="fade">
          <PaymentForm v-if="step === 'payment'" @thankeYouStep="changeStep" />
        </transition>
        <transition name="fade">
          <ThankeYouStep
            v-if="step === 'thankYou'"
            @shippingStep="changeStep"
          />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import ArrowRigthIcon from "./assets/icons/arrowRigthIcon.svg";
import ShippingForm from "./components/ShippingForm";
import PaymentForm from "./components/PaymentForm";
import ThankeYouStep from "./components/ThankeYouStep";
export default {
  name: "App",
  components: {
    Header,
    ArrowRigthIcon,
    ShippingForm,
    PaymentForm,
    ThankeYouStep,
  },
  data() {
    return {
      step: "shipping",
    };
  },
  methods: {
    changeStep(value) {
      this.step = value;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  height: 100vh;
}
.md-menu.md-select {
  i {
    display: none;
  }
}
.md-field.md-has-value label {
  top: auto !important;
}
@font-face {
  //Helvetica Neue is paid
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue"),
    url(./fonts/LiberationSans-Regular.ttf) format("truetype");
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #f6f8ff;
    .formWrapper {
      max-width: 410px;
      height: 520px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px 40px;
      background: #ffffff;
      box-shadow: 0px 0px 10px #ebf0ff;
      border-radius: 24px;
      &__stepper {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        &__item {
          font-family: "Helvetica Neue";
          font-size: 12px;
          line-height: 14px;
          color: #979797;
          opacity: 0.8;
        }
        & svg {
          margin: 0px 15px;
        }
      }
    }
  }
}
.currentStep {
  color: #101d94;
}
.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter {
  opacity: 0;
}
</style>
