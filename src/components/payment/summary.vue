<template>
  <div>
    <br />
    خلاصه سفارش
    <br />
    <vendor
      v-for="vendor in vendors"
      :key="vendor.id"
      :vendor="vendor"
      :toPersian="toPersian"
    ></vendor>
  </div>
</template>

<script>
import vendor from "./vendor";
export default {
  components: {
    vendor,
  },
  props: {
    toPersian: Function,
    vendors: Array,
  },
};
</script>

<style>
</style>