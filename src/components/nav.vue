<template>
  <div class="nav">
    <div class="icon">[ S ]</div>
    <div class="links">
      <div
        class="links-item"
        v-for="(item, i) in links"
        :key="i"
        :class="active == item.name ? 'links-item--active' : ''"
        @click="clickItem(item.name)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data: () => {
    return {
      links: [
        {
          name: "Works"
        },
        {
          name: "Sides"
        },
        {
          name: "Resume"
        }
      ]
    };
  },
  computed: {
    active() {
      return this.$route.name;
    }
  },
  methods: {
    clickItem(name) {
      this.$router.push(name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  height: 83px;
  box-sizing: border-box;
  padding: 0 90px 0 121px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon {
    color: #101010;
    font-size: 24px;
    font-family: "TsukuARdGothic-Regular", serif;
  }

  .links {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-item {
      width: 97px;
      color: #7e7e7e;
      font-size: 16px;
      font-family: "TsukuARdGothic-Regular", serif;

      &--active {
        color: #826feb;
        font-weight: bold;
      }
    }
  }
}
</style>
