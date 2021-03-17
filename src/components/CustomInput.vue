<template>
  <div class="customInput">
    <label class="customInput__label" v-if="label" :for="id">{{ label }}</label>
    <input
      class="customInput__input"
      :class="{ error: inputError || error }"
      :id="id"
      v-mask="mask"
      :value="value"
      @focus="focusHandler"
      @blur="blurHandler"
      @input="inputHandler"
      @change="inputHandler"
      :placeholder="placeholder"
      :type="type"
      :ref="id"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputError: false,
    };
  },
  methods: {
    setInputError(value) {
      this.inputError = value;
    },

    inputHandler(e) {
      this.$emit("toggleError");
      this.$emit("input", e.target.value);
      if (this.regEx) {
        const test = this.regEx.test(String(e.target.value).toLowerCase());
        if (this.inputType === "name" && !test) {
          this.inputError = true;
          this.$refs[`${this.id}`].setCustomValidity("The Name is invalid.");
        } else {
          this.inputError = false;
          this.$refs[`${this.id}`].setCustomValidity("");
        }
      } else if (this.inputType === "cardNumber") {
        if (!e.target.value || e.target.value.length !== 24) {
          this.inputError = true;
          this.$refs[`${this.id}`].setCustomValidity("Field is incorect.");
        } else {
          this.inputError = false;
          this.$refs[`${this.id}`].setCustomValidity("");
        }
      } else if (!e.target.value) {
        this.inputError = true;
        this.$refs[`${this.id}`].setCustomValidity("Fill the field.");
      } else {
        this.inputError = false;
        this.$refs[`${this.id}`].setCustomValidity("");
      }
    },
    focusHandler() {
      if (!this.value) {
        this.inputError = true;
      }
    },
    blurHandler() {
      if (!this.value) {
        this.inputError = true;
      }
    },
  },
  props: {
    mask: {
      type: String,
    },
    label: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    inputType: {
      type: String,
    },
    regEx: {},
    value: {
      required: true,
    },
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style";
.customInput {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &__label {
    font-family: "Helvetica Neue";
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #101d94;
    margin-bottom: 6px;
  }
  &__input {
    width: 100%;
    height: 40px;
    border: 1px solid #dedcdc;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    font-family: "Helvetica Neue";
    color: black;
    border-radius: 5px;
    transition: all 0.3s;
    outline: none;
    padding: 0px 15px;
    &::placeholder {
      font-family: "Helvetica Neue";
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #6b6b6b;
      @include sm {
        font-size: 12px;
      }
    }
  }
}

.error {
  border: 1px solid #ef3249;
}
</style>