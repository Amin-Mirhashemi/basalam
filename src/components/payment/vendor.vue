<template>
  <div class="vendor">
    از غرفه: {{ vendor.vendor.name }}
    <br />
    <product
      v-for="product in vendor.items"
      :key="product.id"
      :product="product"
      :toPersian="toPersian"
    ></product>
  </div>
</template>

<script>
import product from "./product";
export default {
  props: ["vendor", "toPersian"],
  components: {
    product,
  },
};
</script>

<style>
</style>