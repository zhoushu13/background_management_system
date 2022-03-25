<template>
  <div class="login">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input type="text" v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button @click.stop="handleLogin">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log(this.form);
      localStorage.setItem("login", "true");
      router.push({ name: "home" });
    },
  },
};
</script>
<style scoped>
.login {
  display: grid;
  place-items: center center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
