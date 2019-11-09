<template>
<view class="container">
  <text class="label">USER ID</text>
  <text-input class="fixed" v-model="userid" />
  <text class="label">PASSWORD</text>
  <text-input class="fixed" :secureTextEntry="true" v-model="password" />
  <button :on-press="doLogin" title="ログイン" />
</view>
</template>
<script>

export default {
  data: function() {
    return {
      userid: '',
      password: ''
    }
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    doLogin: function() {
      this.navigation.navigate("Home",{userid: this.userid, password: this.password})
    }
  }
}
</script>
<style>
.container {
  background-color: white;
  justify-content: center;
}

.text-color-primary {
  color: blue;
}

.label {
  margin: 8px;
  align-items: flex-start;
}

.fixed {
  height: 40;
  width: 90%;
  margin: 8px;
  borderColor: gray;
  borderWidth: 1;
}
</style>
