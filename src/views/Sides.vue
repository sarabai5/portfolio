<template>
  <div class="sides">
    <!-- <div class="head">
      <div class="desc">and her fun facts</div>
      <div class="name">Sara Bai</div>
      <div class="slogan">Enbraces change.</div>
      <div class="buttons">
        <button class="buttons-btn buttons--l">More About Me.</button>
        <button class="buttons-btn buttons--r">Email Me</button>
      </div>
    </div> -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  name: "Sides",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
.sides {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
