<template>
  <div class="addressblock">
    <div class="reciver">
        به: {{address.reciver}}
        <button class='editicon'>
            <img src="../../assets/pen.png" alt="">
        </button>
    </div>
    <label class="radiocontainer" @change="changeAddress()"
      >{{address.address}}
      <input type="radio" :checked="isChosen" name="radio" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
    props: ['address'],
    computed: {
      isChosen() {
        return this.address.id == this.$store.getters.getChosenAddress
      }
    },
    methods: {
      changeAddress() {
        this.$store.dispatch("changeAddress" , this.address.id)
      }
    }
};
</script>

<style>
</style>