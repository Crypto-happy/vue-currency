<template>
  <v-app class="body">
    <v-card class="pa-2" color="indigo darken-2" flat>
      <v-card>
        <v-navigation-drawer floating permanent width="100%">
          <v-list dense rounded class="d-flex">
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  ><router-link :to="'/' + item.navlinkto" class="nav-link">{{
                    item.title
                  }}</router-link></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-card>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </v-app>
</template>
    
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [
        {
          title: "Currency List",
          icon: "mdi-view-dashboard",
          navlinkto: "list",
        },
        {
          title: "Currency Converter",
          icon: "mdi-forum",
          navlinkto: "converter",
        },
      ],
    };
  },
  methods: {},
  created: function () {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((response) => {
      this.$store.dispatch("setCurrency", response.data.Valute);
    });
  },
  watch: {},
};
</script>

<style>
.bold {
  font-weight: 700 !important;
}
.thin {
  font-weight: 300 !important;
}
.center {
  text-align: center;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.row {
  margin-right: -12px;
  margin-left: -12px;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.no-underline {
  text-decoration: none;
  color: inherit !important;
}
.underline {
  text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.gap {
  margin-top: 5px;
}
.body {
  background: cornflowerblue;
}
a {
  text-decoration: none;
}
</style>
