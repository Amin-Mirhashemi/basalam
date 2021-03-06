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
  props: {
    product: Object,
    toPersian: Function,
  },
  data() {
    return {};
  },
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

<style scoped>
.pur {
  border-bottom: 1px solid #eeeeee;
}

.product {
  font-size: 12px;
  display: flex;
  position: relative;
  margin-top: 15px;
  margin-bottom: 5px;
}

.product_name {
  margin-right: 10px;
}
.product .price {
  position: absolute;
  bottom: 0;
  left: 0;
}

.product_photo {
  width: 82px;
  height: 82px;
  border-radius: 10px;
}
.oldprice {
  position: absolute;
  bottom: 5px;
  left: 80px;
  color: #9d9d9d;
  text-decoration: line-through;
}

.pur_num {
  display: flex;
  align-items: center;
}
.minus,
.plus,
.trashbox {
  background-color: #eeeeee;
  border-radius: 50%;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.minus {
  margin-right: 0;
}
.trashbox {
  margin: 10px;
}
.trash {
  width: 13.5px;
  height: 15px;
}
.number {
  border: 1px solid #eeeeee;
  font-size: 14px;
  border-radius: 6px;
  width: 25.79px;
  height: 23.36px;
  box-sizing: border-box;
  text-align: center;
}
.next_basket {
  text-decoration: underline dotted;
  color: #7d7d7d;
  font-size: 10px;
  margin-right: auto;
}
</style>