<template>
  <div class="sumproduct">
    <img :src="product.product.photoUrl" class="product_photo summary" />
    <div class="productName">{{ product.product.name }}</div>
    <div class="numOfPro">{{ toPersian(product.quantity) }} عدد</div>
    <div class="primaryprice">
      {{
        product.product.primaryPrice != null
          ? toPersian(product.product.primaryPrice)
          : ""
      }}
    </div>
    <div class="productPrice">
      {{ toPersian(product.product.price) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "toPersian"],
};
</script>

<style>
</style>