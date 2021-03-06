<template>
  <div class="continue footer" v-if="numOfVendors > 0">
    <router-link to="/address">
      <button class="cbutton footerbutton">
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
  <div class="emptybasket" v-else>سبد خرید شما خالی است.</div>
</template>

<script>
export default {
  props: {
    toPersian: Function,
    vendors: Array,
  },
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
  methods: {},
};
</script>

<style scoped>
.emptybasket {
  display: flex;
  align-items: center;
  color: #9d9d9d;
  height: 500px;
  justify-content: center;
}

.footerbutton {
  height: 48px;
  font-size: 16px;
  padding: 10px;
}
</style>