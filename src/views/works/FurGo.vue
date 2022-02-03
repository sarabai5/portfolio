<template>
  <div class="page">
    <div class="head">
      <div class="subtitle">Know What Your Pet’s Up To and No More Worries</div>
      <div class="title">
        <span class="title--orange">FurGO</span> PET TRACKER | MONITOR | APP
      </div>
      <div class="tip">App Interaction Design | IoT Design | User Research</div>
    </div>
    <img class="item" src="/assets/works/pet/1.png" />
    <div class="item-block">
      <div class="item-title">BACKGROUND INFO</div>
      <img class="item-2" src="/assets/works/pet/2.png" />
    </div>
    <img class="item-3" src="/assets/works/pet/3.png" />

    <div class="item-block">
      <div class="item-title">HOW IT WORKS</div>
      <div class="item-row">
        <div class="item-row-l">
          <div class="item-row-l-title">Bluetooth<br />Tracking</div>
          <div class="item-row-l-desc">
            Bluetooth tracker is securely attached<br />to the pet's collar and
            can be paired +<br />tracked on their phone app.
          </div>
        </div>
        <img
          class="item-4"
          src="/assets/works/pet/4.png"
          style="margin: 0 0 0 127px;"
        />
      </div>

      <div class="item-row" style="margin: 54px 0 110px 0;">
        <img class="item-4-2" src="/assets/works/pet/4_2.gif" />
        <div class="item-row-l" style="margin: 0 0 0 160px;">
          <div class="item-row-l-title">Simple<br />Onboarding</div>
          <div class="item-row-l-desc">
            A very simple and delightful onboarding experience<br />for
            first-time users. It takes on a minimal design to<br />present only
            the needed information at each step to<br />avoid confusion. Easy
            device setting up with<br />flexbility to skip steps to speed up the
            experience<br />gives users freedom of control.
          </div>
        </div>
      </div>
    </div>
    <img class="item" src="/assets/works/pet/5.png" />
    <div class="item-row" style="margin: 110px 0 100px 0;">
      <img class="item-6-2" src="/assets/works/pet/6_2.gif" />
      <img
        class="item-6"
        src="/assets/works/pet/6.png"
        style="margin: 0 0 0 8px;"
      />
      <div class="item-row-l" style="margin: 0 0 0 50px;">
        <div class="item-row-l-title">
          Customize Safe Zone<br />& Get Alerts
        </div>
        <div class="item-row-l-desc">
          Set your own safe zone around your house or<br />
          around the park by chosing radius or<br />
          customizing the shape on drag. <br /><br />

          When your pets are outside by themselves or<br />
          play in your backyard, turn on safe zone and<br />
          you’ll get alert once they’re detect to be out of<br />
          the safe zone.
        </div>
        <div class="item-row-l-tip">No more losing your pets!</div>
      </div>
    </div>
    <img class="item" src="/assets/works/pet/7.png" />

    <div class="item-block">
      <div class="item-title">USER RESEARCH</div>
      <img class="item-8" src="/assets/works/pet/8.png" />
    </div>
    <img class="item-9" src="/assets/works/pet/9.png" />

    <div class="item-block">
      <div class="item-title">PERSONA + STORYBOARDING</div>
      <img class="item-10" src="/assets/works/pet/10.png" />
    </div>

    <img class="item-11" src="/assets/works/pet/11.png" />
    <img class="item-12" src="/assets/works/pet/12.png" />
    <img class="item-13" src="/assets/works/pet/13.png" />

    <img class="item-14" src="/assets/works/pet/14.png" />

    <img class="item-15" src="/assets/works/pet/15.png" />

    <img class="item-16" src="/assets/works/pet/16.png" />

    <img class="item-17" src="/assets/works/pet/17.png" />

    <img class="item-18" src="/assets/works/pet/18.png" />
    <Turnpage :next="next"></Turnpage>
  </div>
</template>

<script>
import Bus from "@/bus";
import Turnpage from "@/components/turnpage.vue";
export default {
  name: "MovingBoxes",
  components: {
    Turnpage
  },
  data: () => {
    return {
      previous: {
        title: "Desktop Software Product Design",
        // name: "MovingBoxes"
        name: "SmartConnect"
      },
      next: {
        title: "Political Engagement Website for Minorities",
        // name: "MovingBoxes"
        link: "http://www.wetheasians.com"
      },
      handler: null
    };
  },
  beforeCreate() {
    Bus.$emit("navstyle", "background-color: rgba(251, 251, 251, 0.7);");
    Bus.$emit("bodystyle", "background-color: #fbfbfb;");
  },
  beforeDestroy() {
    Bus.$emit("navstyle", "");
    Bus.$emit("bodystyle", "");
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: left;
  background-color: #fbfbfb;
  padding: 0 0 100px 0;
}

.head {
  position: relative;
  width: 100%;
  height: auto;
  padding: 80px 0 52px 0;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #58595b;
  }

  .title {
    // margin: 20px 0 0 0;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #101010;

    &--orange {
      color: #f1896d;
    }
  }

  .tip {
    margin: 117px 0 0 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #58585b;
  }
}

.item {
  width: 100%;
  height: auto;
}

.item- {
  &block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
  }

  &row {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
  }

  &title {
    margin: 190px 0 0 170px;
    align-self: flex-start;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    color: #f48a6e;
  }

  &1 {
    width: 100%;
    height: auto;
  }

  &2 {
    margin: 36px 0 128px 0;
    width: 1000px;
    height: auto;
  }

  &3 {
    width: 100%;
    height: auto;
  }

  &row-l {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start;

    &-title {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      color: #404040;
    }

    &-desc {
      font-family: Noto Sans;
      margin: 45px 0 0 0;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #404040;
    }

    &-tip {
      margin: 40px 0 0 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 33px;
      color: #f19c7c;
    }
  }

  &4 {
    width: 470px;
    height: auto;
  }

  &4-2 {
    width: 281px;
    height: 573px;
    height: auto;
  }

  &6-2 {
    width: 200px;
    height: auto;
  }

  &6 {
    width: 520px;
    height: auto;
  }

  &7 {
    margin: 170px 0 0 0;
    width: 939px;
    height: 935px;
  }

  &8 {
    margin: 50px 0 229px 0;
    width: 1016px;
    height: auto;
  }

  &9 {
    width: 1039px;
    height: auto;
  }

  &10 {
    margin: 80px 0 159px 0;
    width: 1100px;
    height: auto;
  }

  &11 {
    width: 981px;
    height: auto;
  }

  &12 {
    width: 1015px;
    height: auto;
  }

  &13 {
    width: 1071px;
    height: auto;
  }

  &14 {
    margin: 200px 0 0 0;
    width: 859px;
    height: auto;
  }

  &15 {
    margin: 200px 0 0 0;
    width: 1258px;
    height: auto;
  }

  &16 {
    margin: 200px 0 0 0;
    width: 1258.7px;
    height: auto;
  }

  &17 {
    margin: 200px 0 0 0;
    width: 1143px;
    height: auto;
  }

  &18 {
    margin: 200px 0 100px 0;
    width: 1236px;
    height: auto;
  }
}
</style>
