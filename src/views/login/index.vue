<template>
  <div class="sign-in">
    <div class="logo">
      <!-- <img src="./images/logo.png" alt="" /> -->
    </div>
    <div class="login-box">
      <div class="shadow1"></div>
      <div class="shadow2"></div>
      <div class="shadow3"></div>
      <div class="signInFrom shadow4">
        <el-row :gutter="20" class="signInFrom_row">
          <el-col :span="12" class="signInFrom_oa_col">
            <img src="./images/login_oa.png" alt="" />
          </el-col>
          <el-col :span="12" class="signInFrom_info_col">
            <h3>您好！欢迎登录本系统</h3>
            <span></span>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
              <el-form-item prop="username">
                <el-input
                  v-model="loginForm.username"
                  type="text"
                  placeholder="账号"
                >
                  <!-- <template #suffix>
                    <el-icon><user /></el-icon>
                  </template> -->
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  placeholder="密码"
                >
                  <!-- <template #suffix>
                    <el-icon><compass /></el-icon>
                  </template> -->
                </el-input>
              </el-form-item>
              <el-form-item class="form-item-m">
                <el-checkbox v-model="loginForm.rememberMe"
                  >记住密码</el-checkbox
                >
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="login_loading"
                  size="medium"
                  type="primary"
                  @click="handleLogin()"
                  >{{ login_loading ? "登录中..." : "登 录" }}</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  export default defineComponent({
    setup() {
      let loginForm = reactive({
        username: "", // 帐号
        password: "", // 密码
        rememberMe: false, //
        code: "", // 验证码
        uuid: "" // uuid? 验证码uuid
      })
      const loginRules = {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }],
        code: [{ required: true, message: "验证码不能为空" }]
      }
      let login_loading = false
      const handleLogin = () => {
        console.log('登录中...')
      }
      return {
        loginForm,
        loginRules,
        login_loading,
        handleLogin
      }
    }
  })
</script>

<style scoped lang="scss">
.sign-in {
  position: relative;
  background: url('./images/login_bg.jpg') no-repeat;
  background-size: cover;
  height: 100vh;
}

.sign-in .logo {
  text-align: center;
}

.sign-in .logo img {
  width: 185px;
  margin-top: 40px;
}

.sign-in .login-box {
  width: 850px;
  height: 410px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  z-index: 10;
  /* box-shadow: 0 1px 10px rgba(0,0,0,0.2); */
}

.sign-in .shadow1 {
  position: absolute;
  left: 50%;
  width: 714px;
  height: 212px;
  background: #FFFFFF;
  opacity: 0;
  border-radius: 12px;
  transform: translate(-50%, -45px);
  z-index: 1;
  animation-name: shadow1_fade;
  animation-duration: .35s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}

.sign-in .shadow2 {
  position: absolute;
  left: 50%;
  width: 750px;
  height: 272px;
  background: #FFFFFF;
  opacity: 0;
  border-radius: 12px;
  transform: translate(-50%, -30px);
  z-index: 2;
  animation-name: shadow2_fade;
  animation-duration: .35s;
  animation-delay: .1s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}

.sign-in .shadow3 {
  position: absolute;
  left: 50%;
  width: 800px;
  height: 339px;
  background: #FFFFFF;
  opacity: 0;
  border-radius: 12px;
  transform: translate(-50%, -15px);
  z-index: 3;
  animation-name: shadow3_fade;
  animation-duration: .35s;
  animation-delay: .2s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}

.sign-in .shadow4 {
  opacity: 0;
  animation-name: shadow4_fade;
  animation-duration: .35s;
  animation-delay: .3s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}

.sign-in .signInFrom {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  z-index: 4;
  position: relative;
}

.sign-in .signInFrom .signInFrom_row {
  height: 410px;
}

.sign-in .signInFrom .signInFrom_oa_col {
  position: relative;
  height: 100%;
}

.sign-in .signInFrom .signInFrom_oa_col img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
}

.sign-in .signInFrom .signInFrom_info_col {
  position: relative;
  height: 100%;
  padding-top: 40px;
}

.sign-in .signInFrom .signInFrom_info_col strong {
  font-size: 18px;
  color: #9F96D7;
  font-family: Adobe Heiti Std, '微软雅黑', serif;
  font-weight: normal;
}

.sign-in .signInFrom .signInFrom_info_col h3 {
  font-size: 18px;
  color: #9F96D7;
  font-family: Adobe Heiti Std, '微软雅黑', serif;
  font-weight: normal;
  background: linear-gradient(-50deg, #A0B8FB 0%, #928FF9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sign-in .signInFrom .signInFrom_info_col > span {
  display: inline-block;
  width: 20px;
  height: 2px;
  background: linear-gradient(-50deg, #A0B8FB, #928FF9);
  box-shadow: 0 13px 30px 0 rgba(72, 117, 174, 0.25);
}

.sign-in .signInFrom .el-form {
  padding-right: 30px;
  margin-top: 35px;
}

.sign-in .signInFrom .el-form .el-form-item,
.sign-in .signInFrom .el-form .el-form-item {
  margin-bottom: 18px;
}

.sign-in .el-checkbox__label {
  font-size: 13px;
  color: #666;
}

.sign-in .el-checkbox__label:hover {
  color: #9F96D7;
}

.sign-in input[type=checkbox] {
  border: 1px solid #666;
}

.sign-in .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #9F96D7;
}

.sign-in .signInFrom .el-form .form-item-m {
  margin-bottom: 15px;
}

.sign-in .signInFrom .el-form .login-code {
  height: 36px;
  text-align: right;
}

.sign-in .signInFrom .el-form .login-code img {
  height: 100%;
  cursor: pointer;
}

.sign-in .el-checkbox__input.is-checked .el-checkbox__inner,
.sign-in .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #B29AE1;
  border-color: #B29AE1;
}

.sign-in .el-checkbox__inner:hover {
  border-color: #B29AE1;
}

.sign-in .signInFrom .el-form .el-button--primary {
  width: 100%;
  background: linear-gradient(-50deg, #A0B8FB, #928FF9) !important;
  border-radius: 5px;
  border: none !important;
  font-size: 15px;
  color: #FFFFFF;
  padding: 12px 20px;
  box-shadow: 0 13px 30px 0 rgba(72, 117, 174, 0.25);
}

.sign-in .signInFrom .el-button--primary:focus,
.sign-in .signInFrom .el-button--primary:hover {
  border-color: transparent;
}

.sign-in .el-input__inner:focus {
  border-color: #B29AE1;
}

/* 动画 */

@keyframes shadow1_fade {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 0.15;
    transform: translate(-50%, -45px);
  }
}

@keyframes shadow2_fade {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 0.23;
    transform: translate(-50%, -30px);
  }
}

@keyframes shadow3_fade {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 0.35;
    transform: translate(-50%, -15px);
  }
}

@keyframes shadow4_fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>