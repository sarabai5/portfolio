<template>
  <div class="page">
    <div class="head">
      <div class="head-l">
        <div class="welcome">Hi, I’m Sara Bai :)</div>

        <div class="intro">
          I am a passionate product designer studying Product Design Innovation
          at Carnegie Mellon University. <br /><br />I previously interned at
          S&C and BioMotivate, crafting meaningful
          <span class="intro-purple">web</span> and
          <span class="intro-purple">mobile</span> experience for complex
          systems and issues.
        </div>

        <div class="buttons">
          <button class="buttons-btn buttons--l" @click="clickMore()">
            More About Me.
          </button>
          <button class="buttons-btn buttons--r" @click="clickEmail()">
            Email Me
          </button>
        </div>
      </div>

      <img class="avatar" src="/assets/info/avatar.png" />
    </div>
    <Projects />
    <Sides />
    <div class="block"></div>
  </div>
</template>

<script>
import Projects from "@/components/projects.vue";
import Sides from "@/components/sides.vue";

export default {
  name: "Home",
  data: () => {
    return {
      name: "",
      wordsHandler: null,
      sloganHandler: null,
      typeHandler: null,
    };
  },
  components: {
    Projects,
    Sides,
  },
  created() {
    // for (let i in WORDS) {
    //   this.words[i] = WORDS[i].replace(/\S/g, "  ");
    // }
  },
  mounted() {
    this.typewriter("Hi, I’m Sara Bai :)");

    let words = document.getElementsByClassName("purpli");

    let index = 0;
    this.wordsHandler = setInterval(() => {
      if (index >= words.length) {
        this.clearWordsHandler();
        return;
      }

      document
        .getElementsByClassName("purpli")
        [index].setAttribute("class", "purpli purpli-show");
      index++;
    }, 500);
  },
  methods: {
    clearWordsHandler() {
      if (this.wordsHandler) {
        clearInterval(this.wordsHandler);
        this.wordsHandler = null;
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

        // this.slogan = text.substring(0, i);
        this.name = text.substring(0, i);

        i++;
      }, 100);
    },
    clearTypeHandler() {
      if (this.typeHandler) {
        clearInterval(this.typeHandler);
        this.typeHandler = null;
      }
    },
    clickMore() {
      this.$router.push("/About");
    },
    clickEmail() {
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0 144px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.block {
  position: relative;
  height: 226px;
}

.head {
  margin: 143px 0 120px 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 144px 0 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  &-l {
    position: relative;
    width: 755px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .avatar {
    margin: 20px 0 0 0;
    position: relative;
    width: 266px;
    height: auto;
  }

  .welcome {
    position: relative;
    // font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 70px;
    color: #826feb;
  }

  .intro {
    margin: 41px 0 0 0;
    width: 100%;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    line-height: 150%;
    color: #67648b;

    &-purple {
      color: #826feb;
    }
  }

  .buttons {
    margin: 68px 0 0 0;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-btn {
      box-sizing: border-box;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      border: 1px solid #826feb;
      color: #826feb;
      font-size: 16px;
      font-family: "AndaleMono", sans-serif, monospace;
      text-align: center;
    }

    &--l {
      width: 206px;
    }

    &--r {
      margin: 0 0 0 32px;
      width: 155px;
    }
  }
}
</style>
