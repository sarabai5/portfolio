<template>
  <div class="quick">
    <div v-if="canQuick" class="quick-unfold">
      <div class="quick-arrow" @click="clickQuick(false)"></div>
      <button
        class="quick-item"
        v-for="(item, i) in list"
        :key="i"
        @click="clickLink(item)"
      >
        {{ item.title }}
      </button>
    </div>
    <div v-else class="quick-fold" @click="clickQuick(true)"></div>
  </div>
</template>

<script>
export default {
  name: "quicklinks",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data: () => {
    return {
      canQuick: true,
    };
  },
  methods: {
    clickLink(item) {
      document.getElementById(item.id).scrollIntoView();
    },
    clickQuick(res) {
      this.canQuick = res;
    },
  },
};
</script>

<style lang="scss" scoped>
.quick {
  position: fixed;
  top: 300px;
  left: 0;
  z-index: 999;

  &-fold {
    position: relative;
    width: 48px;
    height: 44px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/assets/works/SmartConnect/quick-icon.png");
    cursor: pointer;
  }

  &-unfold {
    position: relative;
    box-sizing: border-box;
    padding: 16px 18px;
    background: rgba(255, 255, 255, 0.5);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 8px rgba(103, 100, 139, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-arrow {
    position: relative;
    width: 9px;
    height: 12.25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/assets/works/SmartConnect/quick-arrow.png");
    cursor: pointer;
  }

  &-item {
    margin: 16px 0 0 0;
    max-width: 111px;
    text-align: left;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #454262;
    cursor: pointer;

    :hover {
      color: #826feb;
    }
  }
}
</style>
