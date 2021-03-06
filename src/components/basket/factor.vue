<template>
  <div class="factor">
    <div class="store">
      از غرفه: <strong>{{ thisvendor.vendor.name }}</strong>
    </div>
    <div class="profile">
      <img :src="thisvendor.vendor.owner.avatarUrl" class="personal_photo" />
      <span class="name">{{ thisvendor.vendor.owner.name }}</span>
      <br />
      <img src="../../assets/loc.png" class="loc_logo" />
      <span class="city">از {{ thisvendor.vendor.owner.city }}</span>
    </div>
    <purchase
      v-for="product in thisvendor.items"
      :key="product.id"
      :product="product"
      :toPersian="toPersian"
    ></purchase>
    <div class="free_delivery" v-if="totalprice >= 300000">
      <div class="greenbar fullgreen"></div>
      <span class="d_status"
        >هورا! ارسال از این غرفه برای شما <strong>رایگان </strong>شد.</span
      >
    </div>
    <div class="free_delivery" v-else>
      <div class="greenbar" :style="{ width: greenwidth }"></div>
      <span class="d_status">برای ارسال رایگان: </span>
      <span class="d_cond">
        {{ toPersian(300000 - totalprice) }} تومان دیگه از این غرفه خرید
        کنید</span
      >
    </div>
    <div class="copon" v-if="thisvendor.havecopon && purnum > 0">
      <button>
        <img src="../../assets/Vector (1).png" class="copon_logo" />
        ثبت كد تخفيف غرفه
      </button>
    </div>
    <div class="continue" v-if="purnum > 0">
      <button class="cbutton">ادامه خرید فقط از این غرفه</button>
      <span class="paytext innerpt">
        جمع مبلغ برای {{ toPersian(purnum) }} کالا
        <br />
        <span class="price">
          <span class="pnum"> {{ toPersian(totalprice) }} </span>
          <span class="toma"> توما </span>
          <span class="nn"> ن </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import purchase from "./purchase.vue";
export default {
  name: "factor",
  components: {
    purchase,
  },
  props: ["thisvendor", "toPersian"],
  computed: {
    totalprice() {
      let sum = 0;
      for (let pro of this.thisvendor.items) {
        sum += pro.quantity * pro.product.price;
      }
      return sum;
    },
    purnum() {
      let sum = 0;
      for (let pro of this.thisvendor.items) {
        if (pro.quantity > 0) sum++;
      }
      return sum;
    },
    greenwidth() {
      return (this.totalprice / 300000) * 100 + "%";
    },
  },
  methods: {},
};
</script>

<style>
</style>