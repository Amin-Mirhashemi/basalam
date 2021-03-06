<template>
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
</template>

<script>
export default {};
</script>

<style scoped>
.addAddress {
  display: flex;
  align-items: center;
  padding: 20px 5px 5px 5px;
  margin-bottom: 10px;
}

.addAddressButton {
  margin-right: auto;
  border: 1px solid #9d9d9d;
  border-radius: 100px;
  width: 131px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  background-color: white;
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