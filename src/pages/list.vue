<template>
  <v-card color="rgb(40, 110, 200)" class="py-4 px-4">
    <v-text-field
      v-model="searchQuery"
      placeholder="Search By Currency name or Number ID"
    >
      <v-icon slot="prepend" color="red">mdi-database-search </v-icon>
    </v-text-field>
    <v-row justify="center">
      <v-card
        v-for="(item, index) in filteredList"
        :key="index"
        class="my-4"
        width="60%"
        rounded="lg"
      >
        <CurrencyList :content="item" />
      </v-card>
    </v-row>
  </v-card>
</template>
<script>
import CurrencyList from "../components/CurrencyList";
export default {
  components: {
    CurrencyList,
  },
  data() {
    return {
      currencyList: [],
      searchQuery: "",
    };
  },
  created: function () {
    this.currencyList = Object.values(this.$store.state.currencyList);
  },
  computed: {
    filteredList() {
      return this.currencyList.filter((item) => {
        return (
          item.CharCode.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          ) ||
          item.NumCode.includes(this.searchQuery) ||
          item.Name.includes(this.searchQuery)
        );
      });
    },
  },
};
</script>
<style scoped>
</style>