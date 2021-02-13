<template>
  <div class="home">
    <div class="head">
      <div class="desc">and her fun facts</div>
      <div class="name">Sara Bai</div>
      <div class="slogan">{{ slogan }}</div>
      <div class="buttons">
        <button class="buttons-btn buttons--l" @click="clickMore()">
          More About Me.
        </button>
        <button class="buttons-btn buttons--r" @click="clickEmail()">
          Email Me
        </button>
      </div>
    </div>
    <Projects />
  </div>
</template>

<script>
import Projects from "@/components/projects.vue";

export default {
  name: "Home",
  data: () => {
    return {
      slogan: "",
      slogans: [
        "Is value-driven.",
        "Enbraces change.",
        "But missed old times.",
        "Loves tennis.",
        "Not very good at it tho.",
        "Moves around a lot."
      ],
      sloganHandler: null,
      typeHandler: null
    };
  },
  components: {
    Projects
  },
  mounted() {
    this.setSloganInterval();
  },
  methods: {
    setSloganInterval() {
      this.clearSloganHandler();

      this.typewriter(this.slogans[0]);

      let i = 1;
      this.sloganHandler = setInterval(() => {
        if (i >= this.slogans.length) {
          i = 0;
        }

        this.typewriter(this.slogans[i]);
        i++;
      }, 3000);
    },
    clearSloganHandler() {
      if (this.sloganHandler) {
        clearInterval(this.sloganHandler);
        this.sloganHandler = null;
      }
    },
    typewriter(text) {
      this.clearTypeHandler();

      let i = 1;
      this.typeHandler = setInterval(() => {
        if (i > text.length) {
          this.clearTypeHandler();
          return;
        }

        this.slogan = text.substring(0, i);
        i++;
      }, 80);
    },
    clearTypeHandler() {
      if (this.typeHandler) {
        clearInterval(this.typeHandler);
        this.typeHandler = null;
      }
    },
    clickMore() {
      this.$router.push("/Resume");
    },
    clickEmail() {
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
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
  padding: 224px 0 0 117px;
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
