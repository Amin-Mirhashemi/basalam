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
    <span class="productPrice">
      <span class="pnum"> {{ toPersian(product.product.price) }} </span>
      <span class="toma third"> توما </span>
      <span class="nn abs"> ن </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    toPersian: Function,
  },
};
</script>

<style scoped>
.third {
  top: 0;
}

.abs {
  bottom: 10px;
}

.sumproduct {
  position: relative;
  font-size: 12px;
  margin: 15px 0;
}

.summary {
  margin-left: 16px;
}

.productName {
  position: absolute;
  top: 5px;
  right: 98px;
  line-height: 18px;
}

.primaryprice {
  position: absolute;
  left: 0;
  top: 35px;
  color: #9d9d9d;
  text-decoration: line-through;
}

.productPrice {
  position: absolute;
  left: 0;
  bottom: 5px;
}

.product_photo {
  width: 82px;
  height: 82px;
  border-radius: 10px;
}

.numOfPro {
  position: absolute;
  top: 35px;
  right: 98px;
}
</style>