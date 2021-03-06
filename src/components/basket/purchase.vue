<template>
  <div class="pur">
    <div class="product">
      <img :src="product.product.photoUrl" class="product_photo" />
      <div class="product_name">{{ product.product.name }}</div>
      <div class="oldprice">
        {{
          product.product.primaryPrice != null
            ? toPersian(product.product.primaryPrice)
            : ""
        }}
      </div>
      <span class="price">
        <span class="pnum"> {{ toPersian(product.product.price) }} </span>
        <span class="toma"> توما </span>
        <span class="nn"> ن </span>
      </span>
    </div>
    <div class="pur_num">
      <button
        class="minus ch_num"
        @mousedown="change(product.id, -1, 500)"
        @mouseup="clearTO()"
        @mouseout="clearTO()"
      >
        -
      </button>
      <div class="number">{{ toPersian(product.quantity) }}</div>
      <button
        class="plus ch_num"
        @mousedown="change(product.id, 1, 500)"
        @mouseup="clearTO()"
        @mouseout="clearTO()"
      >
        +
      </button>
      <button class="trashbox" @click="trash(product.id)">
        <img src="../../assets/trash.png" class="trash" />
      </button>
      <div class="next_basket">ذخيره در ليست خريد بعدی</div>
    </div>
  </div>
</template>

<script>
let mytimeout;
export default {
  data() {
    return {};
  },
  props: ["product", "toPersian"],
  methods: {
    change(id, x, t) {
      this.$store.dispatch("change", { id, x });
      mytimeout = setTimeout(() => this.change(id, x, 0.9 * t), t);
    },
    trash(id) {
      this.$store.dispatch("delete", id);
    },
    clearTO() {
      clearTimeout(mytimeout);
    },
  },
};
</script>

<style>
</style>