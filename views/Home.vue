<template>
<view class="container">
  <text>{{ "USER ID:" + userid }}</text>
</view>
</template>
<script>
export default {
  data: function() {
    return {
      userid: '',
      password: '',
    }
  },
  props: {
    navigation: {
      type: Object
    }
  },
  created: function () {
    this.userid = this.navigation.state.params.userid
    this.password = this.navigation.state.params.password
  }
}
</script>
<style>
.container {
  background-color: white;
  justify-content: center;
  margin: 8px;
}

.text-color-primary {
  color: blue;
}
</style>
