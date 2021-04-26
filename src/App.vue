<template>
  <div id="app" :style="bodystyle">
    <Nav :outstyle="navstyle" />
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

import Bus from "./bus";

export default {
  name: "App",
  data() {
    return {
      bodystyle: "",
      navstyle: ""
    };
  },
  components: {
    Nav,
    Footer
  },
  created() {
    Bus.$on("bodystyle", s => {
      this.bodystyle = s;
    });

    Bus.$on("navstyle", s => {
      this.navstyle = s;
    });
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
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;600&family=Nunito:wght@200;400;600;700&display=swap&family=VT323&display=swap&family=Noto+Sans&family=Roboto:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition-duration: 4s;
}

body {
  margin: 0;
  font-family: "Nunito", sans-serif;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
}

button:hover {
  animation: 200ms ease-in-out 0s normal forwards 1 running buttonHover;
}

@keyframes buttonHover {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}

.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
