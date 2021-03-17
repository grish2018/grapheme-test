<template>
  <form @submit.prevent="submitHandler" class="shippingForm">
    <span class="shippingForm__header"> Информация для доставки </span>
    <div class="shippingForm__nameInputWrapper">
      <CustomInput
        @toggleError="changeError"
        type="text"
        :regEx="regEx.name"
        inputType="name"
        placeholder="ФИО"
        v-model="form.name"
        id="name"
        :error="error"
        label="Получатель"
        ref="name"
      />
    </div>
    <div class="shippingForm__adressInputsWrapper">
      <span class="shippingForm__adressInputsWrapper__label">Адрес</span>
      <CustomInput
        @toggleError="changeError"
        type="text"
        placeholder="Город"
        v-model="form.city"
        id="city"
        :error="error"
        ref="city"
      />
      <CustomInput
        @toggleError="changeError"
        type="text"
        placeholder="Адрес"
        v-model="form.adress"
        id="adress"
        :error="error"
        ref="adress"
      />
    </div>
    <div class="shippingForm__inputWrapper">
      <md-field
        class="shippingForm__countrySelect"
        :class="{
          errorInput: (!form.country && showCountryValidation) || error,
        }"
      >
        <label
          class="shippingForm__countrySelect__label"
          :class="{ hidden: form.country }"
          for="country"
          >Страна</label
        >
        <md-select
          v-model="form.country"
          name="country"
          id="country"
          @focus="showCountryValidation = true"
        >
          <md-option
            v-for="(type, index) in countryList"
            :value="type"
            :key="index"
            >{{ type }}</md-option
          >
        </md-select>
        <label class="shippingForm__countrySelect__arrowIcon" for="country">
          <SelectIcon />
        </label>
      </md-field>
      <div class="shippingForm__inputWrapper__indexInputWrapper">
        <CustomInput
          @toggleError="changeError"
          type="text"
          placeholder="Индекс"
          v-model="form.index"
          id="index"
          :error="error"
          ref="index"
        />
      </div>
    </div>
    <button class="shippingForm__submitButton">Продолжить</button>
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
      showCountryValidation: false,
      form: {
        name: "",
        country: "",
        city: "",
        adress: "",
        index: "",
      },
      regEx: {
        name: /^[a-zA-Z]+$/,
      },
      countryList: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands",
      ],
    };
  },
  methods: {
    changeError() {
      this.error = false;
    },

    submitHandler() {
      for (let item in this.form) {
        if (!this.form[item]) {
          if (item === "country") {
            this.showCountryValidation = true;
          } else {
            this.$refs[item].setInputError(true);
          }
        } else {
          if (item === "country") {
            this.showCountryValidation = false;
          } else {
            this.$refs[item].setInputError(false);
          }
        }
      }
      if (
        this.form.name &&
        this.form.country &&
        this.form.city &&
        this.form.adress &&
        this.form.index
      ) {
        console.log(this.form);
        this.$emit("paymentStep", "payment");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.shippingForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__header {
    font-family: "Helvetica Neue";
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    color: #101d94;
    margin-bottom: 20px;
  }
  &__nameInputWrapper {
    margin-bottom: 30px;
  }
  &__adressInputsWrapper {
    display: flex;
    flex-direction: column;
    &__label {
      font-family: "Helvetica Neue";
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #101d94;
      margin-bottom: 6px;
    }
  }
  &__inputWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    &__indexInputWrapper {
      width: 37%;
    }
  }
  &__countrySelect {
    width: 56%;
    height: 40px;
    border: 1px solid #dedcdc;
    min-height: 0px;
    margin: 0px;
    padding-top: 0px;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    border-radius: 5px;
    & i {
      display: none;
    }
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
    &__label {
      top: auto;
      left: 15px;
    }
    &__arrowIcon {
      right: 15px;
      left: auto;
      top: auto;
    }
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
.hidden {
  display: none;
}
.errorInput {
  border: 1px solid #ef3249;
}
</style>