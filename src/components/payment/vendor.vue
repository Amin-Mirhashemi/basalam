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
  components: {
    product,
  },
  props: {
    vendor: Object,
    toPersian: Function,
  },
};
</script>

<style scoped>
.vendor {
  font-size: 14px;
  padding-top: 15px;
  border-bottom: 1px solid #eeeeee;
}
</style>