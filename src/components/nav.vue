<template>
  <!-- <div class="nav"> -->
  <div
    class="nav-fixed"
    :class="showNav ? 'showNav' : 'hideNav'"
    :style="outstyle"
  >
    <button class="icon" @click="clickHome()"></button>
    <div class="links">
      <button
        class="links-item"
        v-for="(item, i) in links"
        :key="i"
        :class="active == item.name ? 'links-item--active' : ''"
        @click="clickItem(item.path)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "navigation",
  props: {
    outstyle: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      showNav: true,
      links: [
        {
          name: "Works",
          path: "/Works"
        },
        // {
        //   name: "Sides",
        //   path: "/Sides"
        // },
        {
          name: "Resume",
          path: "/Resume"
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
        this.showNav = true;
        //添加你想要的事件
      } else if (this.showNav && scroll > 0) {
        //添加你想要的事件
        this.showNav = false;
      }
    },
    clickHome() {
      this.$router.push("/");
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
  height: 72px;
}

.nav-fixed {
  z-index: 999;
  // position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  padding: 0 64px;
  // background-color: #ffffff;
  background: hsla(0, 0%, 100%, 0.5);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon {
    position: relative;
    width: 38px;
    height: 38px;
    background-image: url("/assets/icons/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    // left: 64px;
    // border: 2px solid #826feb;

    // &-text {
    //   position: absolute;
    //   left: 6px;
    //   top: 10px;
    //   font-family: SF Pro Text;
    //   font-style: normal;
    //   font-weight: bold;
    //   font-size: 20px;
    //   line-height: 24px;
    //   color: #826feb;
    // }
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
      font-family: "Nunito", sans-serif;

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
