<template>
  <div class="home">
    <div class="head">
      <div class="desc">and her fun facts</div>
      <div class="name">Sara Bai</div>
      <div class="slogan">Enbraces change.</div>
      <div class="buttons">
        <button class="buttons-btn buttons--l">More About Me.</button>
        <button class="buttons-btn buttons--r">Email Me</button>
      </div>
    </div>
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Projects from "@/components/projects.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Projects,
    Footer
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.head {
  margin: 0 0 8px 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 304px 0 0 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .desc {
    position: absolute;
    top: 70px;
    left: 60px;
    height: 35px;
    transform: rotate(-90deg);
    color: #101010;
    font-size: 21px;
    font-family: "TsukuARdGothic-Regular", serif;
  }

  .name {
    height: 110px;
    overflow: visible;
    color: #826feb;
    font-size: 110px;
    font-family: "TsukuARdGothic-Bold", serif;
    font-weight: bold;
  }

  .slogan {
    margin: 27px 0 0 0;
    height: 110px;
    overflow: visible;
    color: #101010;
    font-size: 110px;
    font-family: "TsukuARdGothic-Bold", serif;
    font-weight: bold;
  }

  .buttons {
    margin: 75px 0 0 0;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-btn {
      box-sizing: border-box;
      height: 100%;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
      background-color: #ffffff;
      border-radius: 20px;
      border: 1px solid #826feb;
      color: #826feb;
      font-size: 18px;
      font-family: "AndaleMono", monospace;
      text-align: center;
    }

    &--l {
      width: 206px;
    }

    &--r {
      margin: 0 0 0 40px;
      width: 155px;
    }
  }
}
</style>
