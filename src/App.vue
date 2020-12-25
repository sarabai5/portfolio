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
