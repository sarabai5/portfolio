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
          design
          <a
            href="https://www.cmu.edu/iii/degrees/miips/index.html"
            class="content-row-2--major"
            >MIIPS@CMU</a
          >. I’m passionate about creating enjoyable and meaningful human
          experience with the surrounded digital world.
        </p>
        <div class="content-row-3">
          <button class="download" @click="open(0)">Download My CV</button>
          <button class="email" @click="open(1)">
            <img class="email-icon" src="/assets/icons/resume_email.png" />
            <p class="email-link">jinfanb@andrew.cmu.edu</p>
          </button>
        </div>
      </div>
    </div>
    <pdf class="resume" ref="pdf" :src="url"> </pdf>
    <!-- <img class="resume" src="/assets/info/resume.jpg" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import pdf from "vue-pdf";

export default {
  name: "Resume",
  components: {
    pdf
  },
  data: () => {
    return {
      url: "/assets/info/resume-embed.pdf"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.resume {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 100px 0;
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
        font-size: 28px;
        font-family: "Dosis", sans-serif;
        font-weight: 400;
        letter-spacing: 2px;
        font-weight: bold;

        &--name {
          font-size: 36px;
          font-weight: bold;
          border-bottom: #9281ec 10px solid;
        }
      }

      &-row-2 {
        width: 545px;
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
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
            font-family: "Nunito", sans-serif;
            line-height: 36px;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .resume {
    // margin: 86px 0 0 0;
    width: 80%;
    height: auto;
  }
}
</style>
