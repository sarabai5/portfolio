<template>
  <div class="page">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vQJF-bU7CQPePSOa20HRp3IMMhCBy9Rb6wk0Jrlp5BQucuT0ArlMIPWGZyhf6qJ5HOF60rHx8drI2Rw/embed?start=false&loop=false&delayms=3000"
      frameborder="0"
      width="1440"
      height="839"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>

    <Turnpage :previous="previous"></Turnpage>
  </div>
</template>

<script>
import Turnpage from "@/components/turnpage.vue";

export default {
  name: "Capstone",
  components: {
    Turnpage
  },
  data: () => {
    return {
      previous: {
        title: "Produc Design | Moving Boxes",
        name: "MovingBoxes"
      },
      url: "/assets/info/Sara Bai's Resume.pdf",
      handler: null
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100%;
}

.pdf {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
