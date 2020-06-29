<template>
  <div class>
    <section class="section1">
      <div class="block">
        <div id="app">
          <div class="card-row">
            <div
              v-for="(card, index) in cards"
              :key="index"
              :ref="`card_${index}`"
              @mouseover="hoverCard(index)"
              @mouseout="hoverCard(-1)"
              class="card"
              @click="redirect(card.path)"
            >
              <img class="card-image" :class="{'selected': isSelected(index)}" :src="card.image" />
              <div class="card-detail" v-show="isSelected(index)" :src="card.image">
                <div>{{card.detail}}</div>
              </div>

              <div class="card-footer">
                <p class="card-text"></p>
                <h3 class="card-title">{{card.title}}</h3>
                <p class="card-text">
                  <span class="card-desc" :class="{'selected': isSelected(index)}">{{card.desc}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "基本資料",
          desc: "AVBVDDFKJ dsf",
          detail: "blablabla",
          image: "/official_web/images/regist/badge.svg",
          path: "basic-info"
        },
        {
          title: "附件上傳",
          desc: "Colman Andrews",
          detail: "blablabla",
          image: "/official_web/images/regist/doc.svg",
          path: "upload"
        },
        {
          title: "付款方式",
          desc: "Celeste Mills",
          detail: "blablabla",
          image: "/official_web/images/regist/card.svg",
          path: "payment"
        }
      ],
      selectedCard: -1
    };
  },
  mounted() {},
  methods: {
    hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex;
      this.animateCards();
    },
    animateCards() {
      this.cards.forEach((card, index) => {
        const direction = this.calculateCardDirection(
          index,
          this.selectedCard
        ); /* we put the calculated direction in this variable */
        // TweenMax.to(
        //   this.$refs[`card_${index}`] /* tweenmax changes its position */,
        //   0.3 /* duration */,
        //   { x: direction * 50 } /* only x-axis no y */
        // );
      });
    },
    calculateCardDirection(cardIndex, selectedIndex) {
      if (selectedIndex === -1) {
        return 0;
      }

      const diff = cardIndex - selectedIndex;
      return diff === 0 ? 0 : diff / Math.abs(diff);
    },
    isSelected(cardIndex) {
      return this.selectedCard === cardIndex; /* === is important */
    },
    redirect(path) {
      this.$router.push(path);
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

  .block {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

body {
  background-color: #e1e7e7;
}

.card-row {
  display: flex;
  justify-content: center;
  align-items: center;
  //   min-width: 780px;
  //   width: 80%;
  margin: auto;
  height: 500px;
}

.card {
  position: relative;
  background-color: #ffffff;
  height: 370px;
  width: 340px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: height 0.3s, box-shadow 0.3s;
}

.card:hover {
  height: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}

.card-image {
  /* center horizontally overflown image */
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;

  height: 220px;
  min-width: 100%;
  transition: height 0.3s, opacity 0.3s;
  color: black;
  cursor: pointer;
  padding: 10px;
}
.card-image.selected {
  height: 410px;
  opacity: 0;
}

.card-detail {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  padding: 10px;
  height: 100%;

  > div {
    // height: 100%;
    margin: auto;
  }
}
.card-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 130px;
  padding: 10px 15px;
  box-sizing: content-box;
}

.card-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}

.card-desc {
  font-size: 14px;
  color: #bab096;
  transition: color 0.3s;
}
.card-desc.selected {
  color: #6a6456;
}

@media screen and (min-width: 100px) and (max-width: 750px) {
}
</style>
