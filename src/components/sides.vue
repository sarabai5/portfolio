<template>
  <div class="sides">
    <div class="sides-head">
      <div class="sides-title">Side Works</div>
      <!-- <button class="sides-more">See More >></button> -->
      <div></div>
    </div>

    <div class="sides-list">
      <div
        class="side"
        v-for="(item, i) in list"
        :key="i"
        @click="clickItem(item)"
      >
        <div v-if="i == 1" class="cover-gif"></div>
        <img v-else class="cover" :src="item.img" />
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <!-- <div class="desc">{{ item.desc }}</div> -->
          <div class="tags">
            <div class="tag" v-for="(tag, j) in item.tags" :key="j">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data: () => {
    return {
      list: [
        {
          img: "/assets/sides/cover/cover_1.png",
          title: "Kinetic Text",
          desc:
            "A little about myself in kinetic text.\n Working in process...",
          tags: ["Adobe After Effect", "Kinetic text design"],
          link:
            "https://drive.google.com/file/d/14w_S1_5xJSXTp5P080D-ehZeSRptA8I7/view?usp=sharing"
        },
        {
          // img: "/assets/sides/cover/cover_2.gif",
          title: "Bakery Shop Web Design",
          desc: "Let customers customize their \ncinnamon rolls with fun",
          tags: [
            "Coding in HTML | CSS | Javascript",
            "Web Design",
            "Usability Test"
          ],
          link:
            "https://sarabai5.github.io/cinna.github.io/homework_6/menu.html"
        },
        {
          img: "/assets/sides/cover/cover_3.png",
          title: "Fintech Case Study",
          desc: "How can we help minority small \nbusiness owners succeed",
          tags: ["In-depth User Research", "Team project", "Pitch Deck"],
          path: "/works/Capstone"
        }
      ]
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sides {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 144px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-head {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: #67648b;
  }

  &-more {
    position: relative;
    width: 172px;
    height: 56px;
    line-height: 56px;
    background-color: #fbfbfb;
    border: 1px solid #826feb;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #826feb;
  }

  &-list {
    margin: 52px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.side {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .cover {
    width: 357px;
    height: 277px;
    border-radius: 24px;
    cursor: pointer;
  }

  .cover-gif {
    width: 357px;
    height: 277px;
    border-radius: 24px;
    background-color: #8393ec;
    background-image: url("/assets/sides/cover/cover_2.gif");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
  }

  .info {
    margin: 31px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .title {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      color: #67648b;
    }

    // .desc {
    //   margin: 8px 0 0 0;
    //   width: 309px;
    //   font-family: Noto Sans;
    //   font-style: normal;
    //   font-weight: normal;
    //   font-size: 18px;
    //   line-height: 150%;
    //   text-align: center;
    // }

    .tags {
      margin: 12px 0 0 0;
      max-width: 357px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .tag {
        margin: 0 5.5px 8px;
        height: 28px;
        line-height: 28px;
        box-sizing: border-box;
        padding: 0 13px;
        border: 1px solid #918dbf;
        border-radius: 8px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        text-align: center;
        color: #918dbf;
      }
    }
  }
}
</style>
