<template>
  <!-- <div class="header-container">
   
  </div>-->
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
          <nuxt-link to="/store">最新消息</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/store">店家中心</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/store">加入我們</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/store">下載</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about">企業服務</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/admin">
            <input type="button" class="btn-login" value="登入" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped lang="scss">
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
  /* background-color: #c7c7c7; */
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
  width: 76px;
  height: 34px;
  border: none;
  border-radius: 5px;
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
  color: red;
}
</style>
