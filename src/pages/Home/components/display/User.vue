<template>
  <el-card shadow="hover">
    <div class="user">
      <img :src="user.img" :alt="user.username" width="40%" />
      <div class="userInfo">
        <p class="name">{{ user.username }}</p>
        <p class="info">{{ user.info.power }}</p>
      </div>
    </div>
    <div class="login-info">
      <p>
        上次登录时间：
        <span>{{ user.info.lastTime }}</span>
      </p>
      <p>
        上次登录地点：
        <span>{{ user.info.pos }}</span>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      user: this.$store.state.user,
    };
  },
};
</script>

<style scoped>
.user,
.user .userInfo,
.login-info {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  font-size: 1rem;
}
.user .userInfo,
.login-info {
  flex-direction: column;
}
.login-info {
  border-top: 1px solid #e7e8e9;
}
.login-info,
.login-info p {
  margin-top: 2rem;
}
.userInfo .name {
  font-size: 1.5rem;
}
</style>
