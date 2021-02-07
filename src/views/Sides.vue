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
    <div class="roomsmart">
      <img class="roomsmart-gif" src="/assets/project/roomsmart.gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Sides"
};
</script>

<style lang="scss" scoped>
.sides {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.roomsmart {
  position: relative;
  width: 416px;
  height: 705px;
  background-image: url("/assets/project/iphone.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .roomsmart-gif {
    margin: 98px 0 0 0;
    width: 270px;
    height: 481px;
  }
}
</style>
