<template>
  <header>
    <div id="uppernav">
      <img src="../assets/Basalam Logo.jpg" id="logo" />
      <img src="../assets/vl.png" id="logo_vector" />
      <span id="sale">فروش در باسلام</span>
      <div id="basket">
        <img src="../assets/basket.png" id="basket_logo" />
        <span id="amount">{{ toPersian(totalpros) }}</span>
      </div>
    </div>
    <form id="search">
      <input
        type="text"
        placeholder="جستجو در صدها هزار محصول خانگی و محلی ..."
        name="searchfor"
      />
      <img src="../assets/gl.png" id="sbutton" />
    </form>
  </header>
</template>

<script>
export default {
  props: {
    toPersian: Function,
    vendors: Array,
  },
  data() {
    return {};
  },
  computed: {
    totalpros() {
      let sum = 0;
      for (let vendor of this.vendors) {
        for (let pro of vendor.items) {
          sum += pro.quantity;
        }
      }
      return sum;
    },
  },
};
</script>

<style scoped>
#uppernav {
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  align-items: center;
}

#logo {
  height: 20.16px;
}
#logo_vector {
  width: 10.54px;
  height: 6.25px;
  padding: 10px 2px;
  margin: 0 5px;
}

#amount {
  font-size: 12px;
  color: white;
  background-color: #df3856;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: -6px;
  left: -5px;
  overflow: visible;
}

#sale {
  font-size: 12px;
  color: white;
  background-color: #3e3e3e;
  border-radius: 100px;
  height: 24px;
  width: 102px;
  text-align: center;
  display: inline-block;
  padding: 4px;
  margin-right: auto;
}

#basket_logo {
  width: 16px;
  height: 20px;
  margin-right: 1rem;
  margin-left: 5px;
}

#basket {
  position: relative;
  overflow: visible;
}

#search {
  border: #9d9d9d solid 1px;
  border-radius: 100px;
  margin-top: 15px;
  padding: 5px 15px;
  display: flex;
}

#sbutton {
  padding-top: 2px;
  margin-right: -15px;
  width: 20px;
  height: 20px;
  vertical-align: center;
}
</style>