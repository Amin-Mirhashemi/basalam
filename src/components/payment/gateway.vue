<template>
  <div class="choosingGateway">
    انتخاب درگاه پرداخت
    <br />
    <form class="gateways" id="gateawyForm">
      <label class="radiocontainer"
        >بانک سامان
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="radiocontainer"
        >بانک پاسارگاد
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="radiocontainer"
        >آسان پرداخت
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>