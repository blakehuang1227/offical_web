<template>
  <div class>
    <section class="section1">
      <div class="wrap">
        <div class="container">
          <div class="container-head">
            <div
              class="login"
              :class="{'active':active === 'login'}"
              v-on:click="regActive = false; active = 'login'"
            >登入</div>
            <div
              class="register"
              :class="{'active':active === 'regist'}"
              v-on:click="regActive = true;  active = 'regist'"
            >註冊</div>
          </div>
          <div class="dynamic-content" v-bind:class="{ 'c-blue': regActive }">
            <div class="login-form-origin" v-bind:class="{ 'login-form': regActive }">
              <form>
                <h3>帳號:</h3>
                <input class="user-input" type="text" name="email" v-model="Login.email" required />
                <h3>密碼:</h3>
                <input
                  class="user-input"
                  type="password"
                  name="password"
                  v-model="Login.password"
                  required
                />
                <input class="sub-btn c-blue" v-on:click="submitLog" type="submit" />
              </form>
              <p class="forgot-pass">
                <a href="#">Forgot Your Password?</a>
              </p>
            </div>
            <div class="reg-form-origin" v-bind:class="{ 'reg-form': regActive }">
              <div class="sign-up-wrap">
                <p>
                  <nuxt-link to="/Register">
                    <input type="button" value="店家註冊" />
                  </nuxt-link>
                </p>

                <p>
                  <nuxt-link to="/Register">
                    <input type="button" value="經銷商註冊" />
                  </nuxt-link>
                </p>
                <!-- <h3>Email:</h3>
                <input type="text" class="user-input" />
                <input class="sub-btn e-blue" type="submit" />-->
              </div>
            </div>
          </div>
        </div>
        <div class="data-output">
          <p>Login Data: {{ Login }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regActive: false,
      Login: {
        email: "",
        password: ""
      },
      Register: {
        email: "",
        password: "",
        confirmPass: ""
      },
      active: "login"
    };
  },
  mounted() {},
  methods: {
    submitLog() {
      this.$http.post(tempApi + "logindata" + extension, this.userLog).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    submitReg() {
      this.$http
        .post(tempApi + "registrationdata" + extension, this.userReg)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>


<style scoped lang="scss">
@import "~/assets/font/font.css";
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}

section {
  height: 100vh;
}
/*--------------------
       GLOBAL
--------------------*/
body {
  margin: 0;
  padding: 0;
}

h3 {
  color: black;
  font-size: 25px;
}

a {
  color: black;
}

a:hover {
  color: #d3d3d3;
}

.regActive {
  color: white;
  background-color: #f8b62d;
}

/*--------------------
    BASIC CLASSES
--------------------*/
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.data-output {
  width: 100%;
  background-color: #4286f4;
  margin-top: 50px;
  text-align: center;
  color: white;
  font-size: 20px;
} /*styling for data display*/

.get-data {
  height: 20px;
  width: 100px;
  background-color: grey;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/*--------------------
    container STYLING
--------------------*/
.container {
  width: 600px;
  height: 450px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 0;
}

.container-head {
  width: 100%;
  height: 50px;
  display: flex;
  color: black;

  .active {
    background-color: white;
    color: black;
  }
}

.login,
.register {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: #f1f1f1;
}

.dynamic-content {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  // background-color: #f8b62d;
  color: black;
}

.login-form-origin {
  width: 80%;
  transition: all 0.2s linear;
} /*display by default*/

.reg-form-origin {
  width: 80%;
  visibility: hidden;
  display: none;
  transition: all 0.2s linear;
} /*hide by default*/

.login-form {
  visibility: hidden;
  display: none;
} /*hides login after*/

.reg-form {
  visibility: visible;
  display: inline;
} /*shows register after*/

.sign-up-wrap {
  color: black;
  text-align: center;

  p {
    display: block;
    width: 100%;
  }

  input {
    color: black;
    background-color: #f8b62d;
    padding: 2% 4%;
    min-width: 150px;
    font-size: rem(35px);
    border-radius: 10px;
    border: none;
    width: 80%;
  }

  a:focus,
  p:focus {
    border: none;
  }
}

.google-play-button {
  width: 100%;
  height: 100px;
  background-image: url(https://play.google.com/intl/en_us/badges/official_web/images/generic/en_badge_web_generic.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
}

/*--------------------
    FORM STYLING
--------------------*/
.user-input,
.user-input:focus {
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 2px solid #ffffff;
  background-color: transparent;
  outline: none;
  color: black;
  padding-left: 20px;
  border: 1px solid #989494;
  border-radius: 8px;
}

.sub-btn {
  width: 100%;
  height: 35px;
  color: black;
  font-size: 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background-color: #f8b62d;
  border-radius: 8px;
}

.forgot-pass {
  margin-top: 20px;
}

/*--------------------
    MEDIA QUERIES
--------------------*/
@media screen and (max-width: 616px) {
  .container {
    width: 100%;
    height: 80%;
  }
  .dynamic-content {
    height: 90vh;
    margin-top: 0px;
  }
  .data-output {
    font-size: 16px;
  }
}

@media screen and (min-width: 100px) and (max-width: 750px) {
}
</style>
