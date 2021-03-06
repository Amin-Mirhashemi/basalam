<template>
  <div id="app" class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <app-header :toPersian="toPersian" :vendors="vendors"></app-header>
    <router-view :toPersian="toPersian" :vendors="vendors"></router-view>
  </div>
</template>

<script>
import header from "./components/header.vue";

export default {
  name: "app",
  data() {
    return {
      vendors: [],
    };
  },
  async mounted() {
    try {
      await this.$store.dispatch("getData");
      this.vendors = this.$store.getters.getvendors.vendors;
    } catch {
      this.vendors = [];
    }
  },
  computed: {},
  components: {
    appHeader: header,
  },
  methods: {
    toPersian(mynum) {
      mynum = mynum.toString();
      let result = "";
      let arr = mynum.split("");
      var num_dic = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
      };
      for (let c of arr) {
        result += num_dic[c];
      }
      return result;
    },
  },
};
</script>
  
<style>
</style>
