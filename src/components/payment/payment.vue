<template>
  <div>
    <payment-header></payment-header>
    <payment-options></payment-options>
    <purchase-summary
      :vendors="vendors"
      :toPersian="toPersian"
    ></purchase-summary>
    <page-footer></page-footer>
  </div>
</template>

<script>
import footer from "./footer.vue";
import paymentHeader from "./paymentHeader";
import paymentOptions from "./payOptions";
import purchaseSummary from "./summary";
export default {
  components: {
    pageFooter: footer,
    paymentHeader,
    paymentOptions,
    purchaseSummary,
  },
  props: {
    toPersian: Function,
    vendors: Array,
  },
};
</script>

<style scoped>
</style>