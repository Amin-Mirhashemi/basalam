<template>
  <div class="addressblock">
    <div class="reciver">
      به: {{ address.reciver }}
      <button class="editicon">
        <img src="../../assets/pen.png" alt="" />
      </button>
    </div>
    <label class="radiocontainer" @change="changeAddress()"
      >{{ address.address }}
      <input type="radio" :checked="isChosen" name="radio" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    address: Object,
  },
  computed: {
    isChosen() {
      return this.address.id == this.$store.getters.getChosenAddress;
    },
  },
  methods: {
    changeAddress() {
      this.$store.dispatch("changeAddress", this.address.id);
    },
  },
};
</script>

<style scoped>
.reciver {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px 15px 0;
}

.editicon {
  border-radius: 100px;
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
}
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

.addressblock {
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
</style>