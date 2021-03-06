<template>
  <div>
    <div class="addAddress">
      <router-link to="/" tag="button" class="back">
        <img src="../../assets/back.png" class="backButton" />
      </router-link>
      آدرس ارسال
      <button class="addAddressButton">
        <img src="../../assets/plus.png" class="plusicon" />
        آدرس جدید
      </button>
    </div>
    <form name="addressForm">
      <address-option
        v-for="address in addresses"
        :key="address.id"
        :address="address"
      ></address-option>
    </form>
    <page-footer :toPersian="toPersian" :vendors="vendors"></page-footer>
  </div>
</template>

<script>
import footer from "./footer.vue";
import addressOption from "./addressOption.vue";
export default {
  components: {
    pageFooter: footer,
    addressOption,
  },
  computed: {
    addresses() {
      return this.$store.getters.getaddress;
    },
  },
  methods: {},
  props: ["toPersian", "vendors"],
};
</script>

<style>
</style>