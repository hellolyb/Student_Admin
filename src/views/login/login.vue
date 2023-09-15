<template>
  <div class="login">
    <div class="fromBox">
      <div>
        <img
          src="	https://cdn7.axureshop.com/demo/2151475/images/%E7%99%BB%E5%BD%95/u129.svg
"
          alt=""
          class="imgs"
        />
        <img
          src="https://cdn7.axureshop.com/demo/2151475/images/%E7%99%BB%E5%BD%95/u132.png
"
          alt=""
          class="imgr"
        />
      </div>
      <div class="from">
        <div class="title">
          <h2>检验结果互联互通互认平台</h2>
          <span>Welcome 欢迎登录</span>
        </div>
        <div class="inp">
          <p>
            <el-icon color="#5e78ff" size="20"><User /></el-icon
            ><input type="text" v-model="username" placeholder="请输入用户名" />
          </p>
          <p>
            <el-icon color="#5e78ff" size="20"><Lock /></el-icon
            ><input type="password" v-model="password" placeholder="请输入密码" />
          </p>
        </div>
        <button class="but" @click="handleLogin">登录</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import hanlogIn from './hooks/login'
const { username, password, handleLogin } = hanlogIn()
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90.0919143518403deg,
    rgba(48, 68, 255, 1) 1%,
    rgba(64, 103, 255, 1) 48%,
    rgba(73, 145, 255, 1) 100%
  );
  .fromBox {
    width: 1000px;
    height: 500px;
    background-color: #fff;
    position: relative;
    .imgs {
      position: absolute;
      left: -5px;
    }
    .imgr {
      width: 658px;
      height: 400px;
      position: absolute;
      top: 50px;
    }
    .from {
      width: 400px;
      height: 100%;
      position: absolute;
      right: 0;
      .title {
        margin-top: 40px;
        margin-left: 20px;
        h2 {
          color: #3d3b56;
        }
        span {
          color: #5e78ff;
          display: block;
          margin-top: 10px;
        }
      }
      p {
        border-bottom: 1px solid #e5e7e9;
        height: 50px;
        width: 300px;
        display: flex;
        align-items: center;
        padding-left: 7px;
      }
      .inp {
        margin-left: 20px;
        margin-top: 50px;
        input {
          width: 250px;
          outline: none;
          border: 0;
          color: #3d3b56;
          margin-left: 10px;
          margin-top: 3px;
        }
      }
      .but {
        width: 270px;
        height: 40px;
        background-color: #5e78ff;
        border: 0;
        color: #fff;
        border-radius: 30px;
        margin: 40px 0 0 80px;
        font-size: 16px;
      }
    }
  }
}
</style>
