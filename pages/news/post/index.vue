<template>
  <div class="container">
    <div class="width-wrap">
      <div class="flex-wrap">test</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feeds: []
    };
  },
  mounted() {}
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

.container {
  width: 100vw;
  min-height: 100vh;
  background: #eaeaeacc;
}

.flex-wrap {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.width-wrap {
  max-width: 960px;
  height: 100%;
  margin: auto;
  padding: 8% 0;
}
</style>
