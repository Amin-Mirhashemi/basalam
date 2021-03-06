<template>
  <div id="bnav">
    <span id="current">سبد خرید</span>
    <span id="next">لیست خرید بعدی</span>
  </div>
</template>

<script>
</script>

<style scoped>
#bnav {
  width: 100%;
  height: 39.2px;
}
#bnav span {
  display: block;
  font-size: 14px;
  width: 50%;
  text-align: center;
  padding: 7px;
  border-bottom: 2px solid;
  box-sizing: border-box;
  margin: 0;
}

#current {
  border-color: #df3856;
  color: #df3856;
  position: absolute;
  right: 0;
}

#next {
  color: #535353;
  border-color: #dfdfdf;
  position: absolute;
  left: 0;
}
</style>