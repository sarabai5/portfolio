<template>
  <div class="page">
    <div class="head">
      <img class="avatar" src="/assets/info/avatar.png" />
      <button class="download" @click="open(0)">Download My CV</button>
    </div>
    <!-- <pdf class="resume" ref="pdf" :src="url"> </pdf> -->
    <div class="resume">
      <img src="/assets/info/resume-embed.png" />
    </div>
  </div>
</template>

<script>
// import pdf from "vue-pdf";

export default {
  name: "Resume",
  components: {
    // pdf
  },
  data: () => {
    return {
      url: "/assets/info/resume-embed.pdf",
    };
  },
  methods: {
    open(index) {
      if (index == 1) {
        window.open(
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
        );
      } else {
        window.open("/assets/info/Sara Bai's Resume.pdf");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  box-sizing: border-box;
  padding: 0 144px 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
      width: 105px;
      height: auto;
    }

    .download {
      box-sizing: border-box;
      width: 226px;
      height: 58px;
      overflow: visible;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
      background-color: #826feb;
      border-radius: 20px;
      border: 1px solid #826feb;
      color: #ffffff;
      font-size: 18px;
      font-family: "AndaleMono", sans-serif, monospace;
      text-align: center;
      z-index: 1;
    }
  }

  .resume {
    position: relative;
    // margin: 86px 0 0 0;
    margin: -29px 0 0 0;
    padding: 100px;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    border: 1px solid #826feb;
    box-sizing: border-box;
    border-radius: 30px;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
