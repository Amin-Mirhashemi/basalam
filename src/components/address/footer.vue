<template>
  <div class="continue" id="footer">
    <router-link
      to="/payment"
      tag="button"
      class="cbutton"
      id="footerbutton"
      type="submit"
      form="addressForm"
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
  props: ["toPersian", "vendors"],
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

<style>
</style>