<template>
  <div class="continue footer">
    <router-link to="/payment" tag="button" class="cbutton footerbutton"
      >ادامه فرایند خرید</router-link
    >

    <span class="paytext">
      مبلغ قابل پرداخت
      <br />
      <span class="price">
        <span class="pnum"> {{ toPersian(finalprice) }} </span>
        <span class="toma"> توما </span>
        <span class="nn"> ن </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    toPersian: Function,
    vendors: Array,
  },
  computed: {
    finalprice() {
      let sum = 0;
      for (let vendor of this.vendors) {
        for (let pro of vendor.items) {
          sum += pro.quantity * pro.product.price;
        }
      }
      return sum;
    },
  },
};
</script>

<style scoped>
.footerbutton {
  height: 48px;
  font-size: 16px;
  padding: 10px;
}
</style>