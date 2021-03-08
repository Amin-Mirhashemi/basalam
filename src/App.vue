<template>
  <div id="app" class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <app-header :toPersian="toPersian" :vendors="vendors"></app-header>
    <div v-if="isLoading" class="loading">در حال بارگذاری اطلاعات</div>
    <div v-else-if="errorWithLoading" class="loading">
      بارگذاری ناموفق
      <button @click="loadData" class="retry">تلاش مجدد</button>
    </div>
    <router-view v-else :toPersian="toPersian" :vendors="vendors"></router-view>
  </div>
</template>

<script>
import header from "./components/header.vue";

export default {
  name: "app",
  components: {
    appHeader: header,
  },
  data() {
    return {
      isLoading: false,
      errorWithLoading: false,
      vendors: [],
    };
  },
  mounted() {
    this.loadData();
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
    async loadData() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("getData");
        this.vendors = this.$store.getters.getvendors.vendors;
        this.errorWithLoading = false;
      } catch {
        this.errorWithLoading = true;
      }
      this.isLoading = false;
    },
  },
};
</script>
  
<style>
.retry {
  background-color: black;
  color: white;
  margin-right: 10px;
  height: 32px;
  border-radius: 100px;
  padding: 0 10px;
}
/* global styles */

.container div div {
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
}
form {
  margin-bottom: 0;
}

button {
  border: none;
  cursor: pointer;
}
button:focus {
  outline: none;
}

input {
  width: 100%;
  border: none;
  color: #7d7d7d;
}
input:focus {
  outline: none;
}

.continue {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
  width: 100%;
  position: relative;
  font-size: 12px;
}
.footer {
  position: sticky;
  bottom: 0;
  padding: 10px 0;
  border: none;
  outline: none;
  border-top: #dfdfdf 1px solid;
  background: #fff;
  margin: 0;
  overflow: visible;
}

.footer button {
  height: 48px;
  font-size: 16px;
}

.cbutton {
  background-color: #df3856;
  border-radius: 100px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  height: 32px;
  width: 172px;
  padding: 5px;
  color: white;
  box-sizing: border-box;
  border: none;
}

.price {
  direction: rtl;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  margin-right: auto;
}

.toma {
  font-weight: bold;
  font-size: 10px;
  position: relative;
  top: 9px;
}
.nn {
  font-weight: bold;
  font-size: 10px;
  position: absolute;
  left: 4px;
}
.pnum {
  margin: 5px;
}

.loading {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9d9d9d;
}
</style>
