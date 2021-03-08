<template>
  <div>
    <payment-header></payment-header>
    <payment-options></payment-options>
    <Summary :vendors="vendors" :toPersian="toPersian" />
    <page-footer></page-footer>
  </div>
</template>

<script>
import footer from "./footer.vue";
import paymentHeader from "./paymentHeader";
import paymentOptions from "./payOptions";
import Summary from "./summary";
export default {
  components: {
    pageFooter: footer,
    paymentHeader,
    paymentOptions,
    Summary,
  },
  props: {
    toPersian: Function,
    vendors: Array,
  },
};
</script>

<style scoped>
</style>