<template>
  <div class="paybar">
    <router-link to="/address" tag="button" class="back">
      <img src="../../assets/back.png" class="backButton" />
    </router-link>
    پرداخت
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.paybar {
  display: flex;
  align-items: center;
  padding: 20px 5px 5px 5px;
  margin-bottom: 20px;
}

.back {
  width: 40px;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
</style>