<template>
  <div class="resume">
    <div class="head">
      <img class="avatar" src="/assets/info/resume_avatar.png" />
      <div class="content">
        <p class="content-row-1">
          Hello, I’m <span class="content-row-1--name">Sara Bai.</span>
        </p>
        <p class="content-row-2">
          I’m a <span class="content-row-2--job">UX designer</span>/ a former
          architect who’s pursuing a master’s degree in product and service
          design <span class="content-row-2--major">MIIPS@CMU</span>. I’m
          passionate about creating enjoyable and meaningful human experience
          with the surrounded digital world.
        </p>
        <div class="content-row-3">
          <button class="download" @click="open(0)">Download My CV</button>
          <div class="email" @click="open(1)">
            <img class="email-icon" src="/assets/icons/resume_email.png" />
            <p class="email-link">jinfanb@andrew.cmu.edu</p>
          </div>
        </div>
      </div>
    </div>
    <img class="resume" src="assets/info/resume.jpg" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/footer.vue";

export default {
  name: "Resume",
  components: { Footer },
  methods: {
    open(index) {
      if (index == 1) {
        window.open(
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
        );
      } else {
        window.open("/assets/info/Sara Bai's Resume 2.pdf");
      }
    }
  }
};
</script>

<style lang="scss">
.resume {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .head {
    margin: 98px 0 0 0;
    position: relative;
    width: 100%;
    // height: 457px;
    box-sizing: border-box;
    padding: 0 204px 0 117px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .avatar {
      margin: 40px 43px 87px 80px;
      width: 330px;
      height: 330px;
      border-radius: 50%;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      &-row-1 {
        height: 36px;
        color: #101010;
        font-size: 24px;
        font-family: "TsukuARdGothic-Bold", serif;
        font-weight: bold;

        &--name {
          font-size: 36px;
          font-weight: bold;
          border-bottom: #9281ec 10px solid;
        }
      }

      &-row-2 {
        width: 545px;
        font-family: "TsukuARdGothic-Regular", serif;
        font-size: 18px;
        color: #101010;
        line-height: 36px;
        text-align: left;

        &--job {
          color: #faca0c;
          font-weight: bold;
        }

        &--major {
          color: #826feb;
          font-weight: bold;
        }
      }

      &-row-3 {
        margin: 48px 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .download {
          box-sizing: border-box;
          width: 226px;
          height: 58px;
          overflow: visible;
          box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #826feb;
          color: #826feb;
          font-size: 18px;
          font-family: "AndaleMono", monospace;
          text-align: center;
        }

        .email {
          margin: 0 0 0 52px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

          &-icon {
            width: 23px;
            height: 17px;
          }

          &-link {
            margin: 0 0 0 13px;
            height: 36px;
            color: #101010;
            font-size: 18px;
            font-family: "TsukuARdGothic-Regular", serif;
            line-height: 36px;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .resume {
    margin: 86px 0 0 0;
    width: 1161px;
    height: 1458px;
  }
}
</style>
