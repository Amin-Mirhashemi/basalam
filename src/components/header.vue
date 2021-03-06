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
  props: ["toPersian", "vendors"],
};
</script>

<style>
</style>