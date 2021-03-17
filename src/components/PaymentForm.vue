<template>
  <form @submit.prevent="submitHandler" class="paymontForm">
    <span class="paymontForm__header"> Оплата </span>
    <div class="paymontForm__cardOwnerWapper">
      <CustomInput
        @toggleError="changeError"
        type="text"
        :regEx="regEx.name"
        inputType="name"
        placeholder="Konstantin Ivanov"
        v-model="form.cardOwner"
        id="name"
        :error="error"
        label="Имя на карте"
        ref="cardOwner"
      />
    </div>
    <div class="paymontForm__cardNumberWapper">
      <CustomInput
        @toggleError="changeError"
        type="text"
        placeholder="XXXX XXXX XXXX XXXX XXXX"
        v-model="form.cardNumber"
        inputType="cardNumber"
        id="cardNumber"
        :error="error"
        label="Номер карты"
        ref="cardNumber"
        mask="#### #### #### #### ####"
      />
    </div>
    <div class="paymontForm__cardDate">
      <CustomInput
        @toggleError="changeError"
        type="text"
        placeholder="MM/YY"
        v-model="form.cardDate"
        id="cardDate"
        :error="error"
        label="Срок"
        ref="cardDate"
        mask="##/##"
      />
    </div>
    <div class="paymontForm__cardCvv">
      <CustomInput
        @toggleError="changeError"
        type="text"
        placeholder=""
        v-model="form.cardCvv"
        id="cardCvv"
        :error="error"
        label="CVV"
        ref="cardCvv"
        mask="###"
      />
    </div>

    <button class="paymontForm__submitButton">Оплатить</button>
  </form>
</template>

<script>
import CustomInput from "./CustomInput";
import SelectIcon from "./../assets/icons/selectIcon.svg";
export default {
  name: "ShippingForm",
  components: { CustomInput, SelectIcon },
  data() {
    return {
      error: false,
      regEx: {
        name: /^[a-zA-Z]+$/,
      },
      form: {
        cardOwner: "",
        cardNumber: "",
        cardDate: "",
        cardCvv: "",
      },
    };
  },
  methods: {
    changeError() {
      this.error = false;
    },

    submitHandler() {
      for (let item in this.form) {
        if (!this.form[item]) {
          this.$refs[item].setInputError(true);
        } else {
          this.$refs[item].setInputError(false);
        }
      }
      if (
        this.form.cardOwner &&
        this.form.cardNumber &&
        this.form.cardDate &&
        this.form.cardCvv
      ) {
        console.log(this.form);
        this.$emit("thankeYouStep", "thankYou");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.paymontForm {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &__header {
    width: 100%;
    font-family: "Helvetica Neue";
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    color: #101d94;
    margin-bottom: 20px;
  }
  &__cardOwnerWapper,
  &__cardNumberWapper {
    width: 100%;
    margin-bottom: 10px;
  }
  &__cardDate,
  &__cardCvv {
    width: 30%;
  }
  &__cardDate {
    margin-right: 30px;
  }
  &__cardCvv {
    margin-bottom: 20px;
  }
  &__submitButton {
    width: 180px;
    height: 45px;
    background: rgba(25, 165, 39, 0.8);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    outline: none;
    font-family: "Helvetica Neue";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
}
</style>