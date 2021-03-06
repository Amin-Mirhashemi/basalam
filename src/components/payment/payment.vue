<template>
  <div>
    <div class="paybar">
      <router-link to="/address" tag="button" class="back">
        <img src="../../assets/back.png" class="backButton" />
      </router-link>
      پرداخت
    </div>
    اگر کد تخفیف دارید وارد کنید

    <form class="discountform">
      <input type="text" placeholder="کد تخفیف" name="discountcode" />
      <button type="submit" class="confirmcode">تایید</button>
    </form>
    <div class="usingCredit">
      <label class="switch">
        <input type="checkbox" @click="toggle()" />
        <span class="slider round"></span>
      </label>
      استفاده از اعتبار
    </div>
    <gateway v-if="!usingCredit"></gateway>
    <br />
    خلاصه سفارش
    <br />
    <vendor
      v-for="vendor in vendors"
      :key="vendor.id"
      :vendor="vendor"
      :toPersian="toPersian"
    ></vendor>
    <page-footer></page-footer>
  </div>
</template>

<script>
import footer from "./footer.vue";
import gateway from "./gateway.vue";
import vendor from "./vendor";
export default {
  data() {
    return {
      usingCredit: false,
    };
  },
  components: {
    pageFooter: footer,
    gateway,
    vendor,
  },
  props: ["toPersian", "vendors"],
  computed: {},
  methods: {
    toggle() {
      this.usingCredit = !this.usingCredit;
    },
  },
};
</script>

<style>
</style>