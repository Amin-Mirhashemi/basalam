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

<style scoped>
.radiocontainer {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  padding-right: 50px;
  font-size: 14px;
}

/* Hide the browser's default radio button */
.radiocontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 3px;
  right: 15px;
  height: 20px;
  width: 20px;
  border: 1px solid #9d9d9d;
  border-radius: 50%;
  box-sizing: border-box;
}

/* On mouse-over, add a grey background color */

/* When the radio button is checked, add a blue background */
.radiocontainer input:checked ~ .checkmark {
  background-color: #df3856;
  border: none;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
}

/* Show the indicator (dot/circle) when checked */

/* Style the indicator (dot/circle) */
.radiocontainer .checkmark:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
}
.gateways {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.gateways .radiocontainer {
  width: 50%;
  box-sizing: border-box;
  padding-right: 42px;
}

.gateways .checkmark {
  right: 7px;
}

.choosingGateway {
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
}
</style>