<template>
  <div class="continue" id="footer" v-if="numOfVendors > 0">
    <router-link to="/address">
      <button class="cbutton" id="footerbutton">
        ادامه خرید از {{ toPersian(numOfVendors) }} غرفه
      </button>
    </router-link>
    <span class="paytext">
      مبلغ قابل پرداخت {{ toPersian(numOfVendors) }} غرفه
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
  computed: {
    numOfVendors() {
      let sum = 0;
      for (let vendor of this.vendors) {
        for (let pro of vendor.items) {
          if (pro.quantity > 0) {
            sum++;
            break;
          }
        }
      }
      return sum;
    },
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
  props: ["toPersian", "vendors"],
  methods: {},
};
</script>

