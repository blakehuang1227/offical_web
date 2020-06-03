<template>
  <!-- <div class="header-container">
   
  </div>-->
  <div>
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">
          <img class="head-logo" src="@/assets/images/header_icon.png" />
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/about">關於我們</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/store">最新消息</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/store">店家中心</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/store">加入我們</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link to="/store">下載</nuxt-link>
          </li>-->
          <li class="nav-item" @click="showExtend">
            <nuxt-link to="/store">下載</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">企業服務</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin">
              <input type="button" class="btn-login" value="註冊/登入" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <transition name="fade">
      <div class="folder" v-if="extendMenu">
        <img class="right-bg" src="/images/nav/right-bg.png" />
        <img class="left-bg" src="/images/nav/left-bg.png" />
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-if="extendMenu" @click="collapeMenu"></div>
    </transition>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  data() {
    return {
      extendMenu: false
    };
  },
  methods: {
    showExtend() {
      this.extendMenu = !this.extendMenu;
    },
    collapeMenu() {
      this.extendMenu = false;
    }
  }
};
</script>


<style scoped lang="scss">
.left-bg {
  bottom: 0%;
  width: 10%;
  position: absolute;
}

.right-bg {
  width: 10%;
  position: absolute;
  right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.folder-wrap {
  height: 100%;
  width: 100%;
}
.mask {
  height: 100%;
  width: 500%;
  opacity: 0.5;
  background: #000;
  position: fixed;
  z-index: 67;
}
.folder {
  height: 240px;
  width: 100%;
  position: fixed;
  top: 60px;
  background: #fff;
  z-index: 77;
}
/* .header-container {
  height: 60px;
} */

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: black; */
  background-color: #fff;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  color: black;
}

.head-logo {
  width: 176px;
}

.btn-login {
  color: #fff;
  background-color: #f8b62d;
  width: 126px;
  height: 34px;
  border: none;
  border-radius: 5px;
  // padding: 0 3%;
}

.nav-item {
  display: inline-block;
  margin: auto;

  a {
    margin: auto;
    display: inline-block;
    height: 100%;
  }
}

a:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}
a:focus {
  text-decoration: none;
  color: black;
}
a:hover,
a:active {
  text-decoration: none;
  color: black;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: auto 10px;
}

.nav-item a {
  text-decoration: none;
  /* color: white; */
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  // color: red;
}
</style>
