<template>
  <v-card>
    <v-container class="name">
      {{ content.Name }}
    </v-container>
    <v-card class="d-flex justify-space-around" v-if="toogle">
      <div class="d-flex align-center">
        <div>1 {{ content.CharCode }}</div>
        <v-btn icon color="pink" class="mx-4" @click="setToggle">
          <v-icon x-large>mdi-arrow-left-right</v-icon>
        </v-btn>
        <div>{{ content.Value }} RUB</div>
      </div>

      <div class="d-flex align-center">
        <div>
          <div v-if="content.Value > content.Previous">
            <v-icon color="green">mdi-arrow-up</v-icon>
          </div>
          <div v-else>
            <v-icon color="red">mdi-arrow-down</v-icon>
          </div>
        </div>
        <div>
          {{ variance_one }}
        </div>
      </div>
    </v-card>
    <v-card class="d-flex justify-space-around" v-else>
      <div class="d-flex align-center">
        <div>1 RUB</div>
        <v-btn icon color="pink" class="mx-4" @click="setToggle">
          <v-icon x-large>mdi-arrow-left-right</v-icon>
        </v-btn>
        <div>{{ (1 / content.Value).toFixed(4) }} {{ content.CharCode }}</div>
      </div>

      <div class="d-flex align-center">
        <div>
          <div v-if="content.Value < content.Previous">
            <v-icon color="green">mdi-arrow-up</v-icon>
          </div>
          <div v-else>
            <v-icon color="red">mdi-arrow-down</v-icon>
          </div>
        </div>
        <div>
          {{ variance_two }}
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ["title", "content"],
  data() {
    return {
      toogle: true,
    };
  },
  methods: {
    setToggle() {
      this.toogle = !this.toogle;
    },
  },
  computed: {
    variance_one() {
      return Math.abs(this.content.Value - this.content.Previous).toFixed(4);
    },
    variance_two() {
      return Math.abs(
        1 / this.content.Value - 1 / this.content.Previous
      ).toFixed(7);
    },
  },
};
</script>

<style scoped>
.name {
  color: #575252;
  margin-left: 17%;
}
</style>