<template>
  <div class="nav">
    <div class="nav-fixed" :class="showNav ? 'showNav' : 'hideNav'">
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
  </div>
</template>

<script>
export default {
  name: "navigation",
  data: () => {
    return {
      showNav: true,
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
      ],
      offset: 0,
      timer: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener, true);

    this.timer = setInterval(() => {
      this.offset = this.scrollTop();
    }, 100);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener);

    clearInterval(this.timer);
    this.timer = null;
  },
  computed: {
    active() {
      return this.$route.name;
    }
  },
  methods: {
    scrollListener() {
      var scroll = this.scrollTop() - this.offset;
      if (!this.showNav && scroll < 0) {
        console.log("up");
        this.showNav = true;
        //添加你想要的事件
      } else if (this.showNav && scroll > 0) {
        //添加你想要的事件
        console.log("down");
        this.showNav = false;
      }
    },
    clickItem(name) {
      this.$router.push(name);
    },
    scrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: relative;
  width: 100%;
  height: 83px;
}

.nav-fixed {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 83px;
  box-sizing: border-box;
  padding: 0 90px 0 121px;
  background-color: #ffffff;
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

.showNav {
  animation: 500ms ease-in-out 0s normal forwards 1 running fadeInDown;
}

.hideNav {
  animation: 500ms ease-in-out 0s normal forwards 1 running fadeOutUp;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(0, -100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translate(0, -100%);
  }
}
</style>
