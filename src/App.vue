<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
  mounted() {
    var window_bottom = window.pageYOffset + window.screen.height;
    document.querySelectorAll(".fade-content > *").forEach(ele => {
      if (ele.offsetTop > window_bottom) {
        ele.style.opacity = 0;
      } else {
        ele.style.opacity = 1;
      }
    });

    window.addEventListener("scroll", this.scrollListener, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    scrollListener() {
      let window_bottom = window.pageYOffset + window.screen.height;
      document.querySelectorAll(".fade-content > *").forEach(ele => {
        if (ele.style.opacity == 0 && ele.offsetTop + 100 <= window_bottom) {
          ele.classList.add("fade-content--in");
        }
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button:hover {
  animation-name: buttonHover;
  animation-duration: 0.5s;
  animation-fill-mode: backwards;
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
}

.fade-content--in {
  animation: 500ms ease-in-out 0s normal forwards 1 running fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

// @keyframes buttonHover {
//   from {
//     transform: scale(1);
//     box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
//   }

//   to {
//     transform: scale(1.05);
//     box-shadow: 3px 3px 7.5px 0px rgba(0, 0, 0, 0.4);
//   }
// }
</style>
