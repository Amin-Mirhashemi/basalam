<template>
  <div>
    <bnav></bnav>
    <factor
      v-for="vendor in vendors"
      :key="vendor.id"
      :thisvendor="vendor"
      :toPersian="toPersian"
    ></factor>
    <app-footer :toPersian="toPersian" :vendors="vendors"></app-footer>
  </div>
</template>

<script>
import bnav from "./bnav.vue";
import factor from "./factor.vue";
import footer from "./footer.vue";
export default {
  computed: {},
  components: {
    bnav,
    factor,
    appFooter: footer,
  },
  methods: {},
  props: ["toPersian", "vendors"],
};
</script>

<style>
</style>