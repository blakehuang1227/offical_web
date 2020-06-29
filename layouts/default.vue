<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import Vue from "vue";
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import TheFooter from "@/components/Navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>


<style   lang="scss">
@import "~/assets/font/font.css";
$base-font-size: 16px !default;

@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}
$device-list: 320px 360px 400px 440px 480px 520px 560px 600px 640px;
@each $current-device in $device-list {
  @media screen and (min-width: $current-device) {
    body,
    html {
      font-size: $current-device * 0.015;
      // font-size: 18px;
    }
  }
}
* {
  touch-action: pan-y;
}

*:focus {
  border: none;
  outline: none;
}

.container {
  padding: 0;
  margin: 0;
  width: 100vw;
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  font-family: "Noto Sans TC", "roboto";
  font-style: normal;
}
body {
  /* display: block; */
  margin: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
