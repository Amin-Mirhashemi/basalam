<template>
  <div>
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
  </div>
</template>

<script>
import gateway from "./gateway";
export default {
  components: {
    gateway,
  },
  data() {
    return {
      usingCredit: false,
    };
  },
  methods: {
    toggle() {
      this.usingCredit = !this.usingCredit;
    },
  },
};
</script>

<style scoped>
.discountform {
  border: #9d9d9d solid 1px;
  margin-top: 15px;
  padding: 5px 15px;
  display: flex;
  border-radius: 8px;
  padding-left: 5px;
}

.confirmcode {
  border-radius: 100px;
  height: 32px;
  width: 68px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 45.5px;
  height: 28px;
  margin-left: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24.5px;
  width: 24.5px;
  left: 1px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #df3856;
}

input:focus + .slider {
  box-shadow: 0 0 1px #df3856;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.usingCredit {
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
  display: flex;
}
</style>