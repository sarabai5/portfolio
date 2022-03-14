<template>
  <div class="sides">
    <div class="sides-list" @mouseleave="mouseLeave()">
      <div
        class="side"
        v-for="(item, i) in list"
        :key="i"
        @click="clickItem(item)"
        @mouseenter="hoverItem(i)"
      >
        <div class="c-s-s">
          <div class="cover" :style="item.style">
            <img :src="item.img" />
            <div
              class="cover-mask"
              v-if="item.mask && hoverIndex == i"
              :style="item.mask"
            >
              <div class="cover-mask-text">
                Details Coming Soon... <br />Check Back later!
              </div>
            </div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>

        <div class="c-s-s">
          <div class="tags">
            <div class="tag" v-for="(tag, j) in item.tags" :key="j">
              {{ tag }}
            </div>
          </div>
          <button
            class="button"
            :class="{ 'button-disabled': item.disabled }"
            @click="open(item.link)"
          >
            {{ item.action }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about sides",
  data: () => {
    return {
      hoverIndex: -1,
      list: [
        {
          img: "/assets/about/about_1.png",
          title: "Relationship Well-being App",
          desc: "Leveraging pschological persuasive design tecniques, Amornymous is a mobile app designed to provide a safe space for young adults to ask and answer anonymous questions about romantic relationships. ",
          tags: [
            "In-depth User Research",
            "Team project",
            "Mobile design",
            "Pitch Deck",
          ],
          action: "Comming soon",
          mask: "background-color:rgba(61, 77, 71, 0.7);",
          disabled: true,
        },
        {
          img: "/assets/about/about_2.gif",
          title: "Bakery Shop Web Design",
          desc: "The website is designed to allow customers customize their cinnamon rolls with fun at a local sweet shop. Project went through lo-fi prototyping and usability testing to hi-fi mockups and front-end development.",
          tags: [
            "Coding in HTML | CSS | Javascript",
            "Web Design",
            "Usability Test",
          ],
          link: "https://sarabai5.github.io/cinna.github.io/homework_6/menu.html",
          action: "Go Play",
          style: "background-color:#8393EC;",
        },
        {
          img: "/assets/about/about_3.png",
          title: "Kinetic Text",
          desc: "A short introduction about myself in kinetic text done in Adobe After Effect.\nWorking in process...",
          tags: ["Adobe After Effect", "Kinetic text design"],
          link: "https://drive.google.com/file/d/14w_S1_5xJSXTp5P080D-ehZeSRptA8I7/view?usp=sharing",
          action: "Watch it",
        },
        {
          img: "/assets/about/about_4.png",
          title: "Fintech Case Study",
          desc: "The pitch deck and research project was dedicated to the captone client project for the National Foundation Credit Counciling (NFCC) on what product can be developed to help minority small business owners succeed. ",
          tags: ["In-depth User Research", "Team project", "Pitch Deck"],
          path: "/works/Capstone",
          action: "Discover",
        },
        {
          img: "/assets/about/about_5.png",
          title: "Design Challenge for Neo4j",
          desc: "After second round interview, I was given an 6-hour exercise to design an app of hostel booking experience with a focus on the user flow and design process.",
          tags: [
            "User Persona",
            "information architecture",
            "Wireframing",
            "Hi-fi",
          ],
          action: "Comming soon",
          mask: "background-color: rgba(72, 70, 89, 0.7);",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    clickItem(item) {
      if (item.path) {
        this.$router.push(item.path);
        return;
      }

      if (item.link) {
        window.open(item.link);
      }
    },
    hoverItem(index) {
      this.hoverIndex = index;
    },
    mouseLeave() {
      this.hoverIndex = -1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-s-s {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.sides {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-list {
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.side {
  margin: 0 0 160px 0;
  position: relative;
  width: 554px;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .cover {
    position: relative;
    width: 100%;
    height: 355px;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }

    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-text {
        width: 100%;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 150%;
        text-align: center;
        color: #ffffff;
      }
    }
  }

  .title {
    margin: 32px 0 0 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */

    color: #67648b;
  }

  .desc {
    margin: 8px 0 0 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #918dbf;
    text-align: left;
  }

  .tags {
    margin: 10px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .tag {
      margin-left: 10px;
      box-sizing: border-box;
      padding: 5px 13px;
      line-height: 18px;
      background-color: #918dbf;
      border-radius: 8px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      text-align: center;
      color: #ffffff;
    }

    :first-child {
      margin-left: 0;
    }
  }

  .button {
    margin: 24px 0 0 0;
    width: 186px;
    height: 64px;
    background-color: #fbfbfb;
    border: 1px solid #7673fb;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 100px;

    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #826feb;
  }

  .button-disabled {
    color: #c3c2fb;
    border: 1px solid #c3c2fb;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    cursor: auto;

    &:hover {
      animation: none;
    }
  }
}
</style>
