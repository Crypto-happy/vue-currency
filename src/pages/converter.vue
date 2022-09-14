<template>
  <v-card color="rgb(40, 110, 200)" class="py-4 px-4">
    <v-row align="center">
      <v-col cols="5">
        <v-card>
          <v-container fluid>
            <v-container>
              {{ this.selectedCurrencyName1 }}
            </v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="selectedCurrency[0]"
                  :items="currencyList"
                  item-text="CharCode"
                  menu-props="auto"
                  label="Select"
                  hide-details
                  single-line
                  return-object
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field type="number" v-model="inputValue"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-btn class="swap_btn" @click="swap"
          ><v-icon color="blue" size="40">mdi-arrow-left-right</v-icon></v-btn
        >
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-container fluid>
            <v-container>
              {{ this.selectedCurrencyName2 }}
            </v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="selectedCurrency[1]"
                  :items="currencyList"
                  item-text="CharCode"
                  menu-props="auto"
                  label="Select"
                  hide-details
                  single-line
                  return-object
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="text"
                  :value="this.caculate"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      selectedCurrency: [],
      currencyList: "",
      inputValue: 1,
      swapStatus: false,
    };
  },
  created: function () {
    this.currencyList = Object.values(this.$store.state.currencyList);
  },
  methods: {
    swap() {
      var tempCharCode = this.selectedCurrency[0].CharCode;
      this.selectedCurrency[0].CharCode = this.selectedCurrency[1].CharCode;
      this.selectedCurrency[1].CharCode = tempCharCode;
      var tempName = this.selectedCurrency[0].Name;
      this.selectedCurrency[0].Name = this.selectedCurrency[1].Name;
      this.selectedCurrency[1].Name = tempName;
      var tempValue = this.selectedCurrency[0].Value;
      this.selectedCurrency[0].Value = this.selectedCurrency[1].Value;
      this.selectedCurrency[1].Value = tempValue;
    },
  },
  computed: {
    selectedCurrencyName1() {
      return this.selectedCurrency[0]
        ? this.selectedCurrency[0].Name
        : "Выбрать";
    },
    selectedCurrencyName2() {
      return this.selectedCurrency[1]
        ? this.selectedCurrency[1].Name
        : "Выбрать";
    },
    caculate() {
      return (
        ((this.selectedCurrency[0] ? this.selectedCurrency[0].Value : "") *
          (this.inputValue ? this.inputValue : 0)) /
        (this.selectedCurrency[1] ? this.selectedCurrency[1].Value : 1)
      ).toFixed(4);
    },
  },
};
</script>
<style scoped>
.swap_btn {
  border-radius: 50%;
  height: 64px !important;
  width: 64px;
}
</style>