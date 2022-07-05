<template>
  <div class="container">
    <div class="user-input">
      <button class="button--navi" @click="goHome()">Go to Home</button>
      <button class="button--navi" @click="goBack()">Go Back</button>
      <button class="button--navi" @click="goShop()">Go to Shop</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/home');
    },
    goBack() {
      this.$router.go(-1);
    }, goShop() {
      this.$router.push('/shop');
    }
  }
}
</script>

<style lang="scss">

.container {
  max-width: 600px;
  margin: 20px auto;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 0px;

  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

// Buttons
button {
  appearance: none;
  padding: 10px;
  margin: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--navi {
  display: block;
  margin: 20px auto;
  background: #d16e8d;
}

</style>