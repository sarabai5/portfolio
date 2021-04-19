<template>
  <div class="page">
    <img class="item-1" src="/assets/project/P3/1.png" />
    <img class="item-2" src="/assets/project/P3/2.png" />
    <img class="item-3" src="/assets/project/P3/3.png" />

    <div class="item-block-1">
      <img class="item-4" src="/assets/project/P3/4.png" />
      <img class="item-demo" src="/assets/project/P3/demo.gif" />
    </div>

    <img class="item-5" src="/assets/project/P3/5.png" />
    <img class="item-6" src="/assets/project/P3/6.png" />
    <img class="item-7" src="/assets/project/P3/7.png" />
    <img class="item-8" src="/assets/project/P3/8.png" />
    <img class="item-9" src="/assets/project/P3/9.png" />
    <img class="item-10" src="/assets/project/P3/10.png" />
    <img class="item-11" src="/assets/project/P3/11.png" />

    <div class="item-block-2">
      <img class="item-scroll-head" src="/assets/project/P3/scroll-head.png" />
      <img
        class="item-scroll-content"
        src="/assets/project/P3/scroll-content.png"
      />
    </div>

    <img class="item-12" src="/assets/project/P3/12.png" />
    <img class="item-13" src="/assets/project/P3/13.png" />
    <img class="item-14" src="/assets/project/P3/14.png" />
    <img class="item-15" src="/assets/project/P3/15.png" />
    <img class="item-16" src="/assets/project/P3/16.png" />
    <img class="item-18" src="/assets/project/P3/18.png" />

    <Turnpage :next="next"></Turnpage>
  </div>
</template>

<script>
// style="width:2880px; height:1412px"
// :style="{ width: item.s[0] + 'px', height: item.s[0] + 'px' }"

import Turnpage from "@/components/turnpage.vue";
export default {
  name: "MovingBoxes",
  components: {
    Turnpage
  },
  data: () => {
    return {
      previous: null,
      next: {
        title: "BAKERY SHOP WEBSITE",
        // name: "MovingBoxes"
        link: "https://sarabai5.github.io/cinna.github.io/homework_5/menu.html"
      },
      handler: null
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: left;
}

.item- {
  &1 {
    width: 1440px;
    height: 704px;
  }

  &2 {
    margin: 108px 0 0 0;
    width: 840px;
    height: 883px;
  }

  &3 {
    margin: 170px 0 0 0;
    width: 1039px;
    height: 496px;
  }

  &block-1 {
    // margin: 170px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &4 {
    width: 507px;
    height: 473px;
  }

  &demo {
    margin: 450px 0 0 100px;
    width: 352px;
    height: 669px;
  }

  &5 {
    margin: 120px 0 0 0;
    width: 826px;
    height: 576px;
  }

  &6 {
    margin: 120px 0 0 0;
    width: 1028px;
    height: 514px;
  }

  &7 {
    margin: 170px 0 0 0;
    width: 939px;
    height: 935px;
  }

  &8 {
    margin: 200px 0 0 0;
    width: 1440px;
    height: 646px;
  }

  &9 {
    margin: 132px 0 0 0;
    width: 1147px;
    height: 983px;
  }

  &10 {
    margin: 300px 0 0 0;

    width: 926px;
    height: 1142px;
  }

  &11 {
    margin: 180px 0 0 0;
    width: 1038px;
    height: 609px;
  }

  &block-2 {
    margin: 170px 0 0 0;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &scroll-head {
    width: 272px;
    height: 727px;
  }

  &scroll-content {
    width: 4770px;
    height: 1456px;
  }

  &12 {
    margin: 108px 0 0 0;
    width: 844px;
    height: 1011px;
  }

  &13 {
    margin: 300px 0 0 0;
    width: 1038px;
    height: 1063px;
  }

  &14 {
    margin: 300px 0 0 0;
    width: 1038px;
    height: 723px;
  }

  &15 {
    width: 1038px;
    height: 646px;
  }

  &16 {
    margin: 300px 0 0 0;
    width: 844px;
    height: 811px;
  }

  &18 {
    margin: 69px 0 0 0;
    width: 1440px;
    height: 789px;
  }
}
</style>
