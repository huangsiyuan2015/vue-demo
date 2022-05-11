<template>
  <div class="login">
    <div class="title">欢迎使用今招聘</div>

    <div class="input">
      <div class="label">手机号</div>
      <input type="number" placeholder="请输入手机号" />
    </div>

    <div class="input">
      <div class="label">密码</div>
      <input type="password" placeholder="请输入密码" />
    </div>

    <div class="agreement">
      <input type="checkbox" id="agreement" />
      <label for="agreement">
        我已阅读并同意遵守
        <a href="">《用户协议》</a>
        及
        <a href="">《隐私政策》</a>
      </label>
    </div>

    <div class="btn">登录</div>

    <div class="link">
      <span>立即注册</span> |
      <span>忘记密码</span>
    </div>

    <div class="footer">游客进入</div>
  </div>
</template>

<style scoped>
.login {
  padding: 0 3rem;
}

.title {
  height: 14rem;
  margin-top: 2rem;
  line-height: 14rem;
  font-size: 1.8rem;
  font-weight: bold;
}

.input {
  margin-top: 2rem;
}

.input > .label {
  margin-bottom: 0.86rem;
  font-size: 0.8rem;
}

.input > input {
  width: 100%;
  padding-bottom: 1.2rem;
  border: none;
  border-bottom: solid 1px;
  outline: medium;
  font-size: 1.2rem;
}

.agreement {
  margin-top: 0.6rem;
  margin-bottom: 2.4rem;
  font-size: 0.4rem;
}

.agreement a {
  text-decoration: none;
}

.btn {
  width: 100%;
  padding: 0.86rem 0;
  margin-bottom: 0.72rem;
  border-radius: 0.28rem;
  background-color: #418dff;
  color: #fff;
  text-align: center;
}

.link {
  margin-bottom: 8rem;
  text-align: center;
  font-size: 0.8rem;
}

.footer {
  text-align: center;
  font-weight: bold;
}
</style>