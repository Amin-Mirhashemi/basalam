<template>
  <div>
    <address-header></address-header>
    <address-option
      v-for="address in addresses"
      :key="address.id"
      :address="address"
    ></address-option>
    <page-footer :toPersian="toPersian" :vendors="vendors"></page-footer>
  </div>
</template>

<script>
import footer from "./footer.vue";
import addressOption from "./addressOption.vue";
import addressHeader from "./addressHeader";
export default {
  components: {
    pageFooter: footer,
    addressOption,
    addressHeader,
  },
  props: {
    toPersian: Function,
    vendors: Array,
  },
  computed: {
    addresses() {
      return this.$store.getters.getaddress;
    },
  },
};
</script>

<style>
</style>