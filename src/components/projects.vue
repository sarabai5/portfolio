<template>
  <div class="projects fade-content">
    <div
      class="project"
      v-for="(item, i) in projects"
      :key="i"
      :class="active == i ? 'links-item--active' : ''"
      @click="clickItem(i)"
    >
      <img class="project-img" :src="item.img" />
      <div class="project-content">
        <div class="project-name">{{ item.name }}</div>
        <div class="project-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data: () => {
    return {
      projects: [
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        },
        {
          name: "StaySound",
          desc: "UI / UX Design | Individual Project",
          img:
            "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
        }
      ],
      active: 0
    };
  },
  methods: {
    clickItem(i) {
      this.active = i;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  width: 100%;
  box-sizing: border-box;
  padding: 0 117px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.project {
  margin: 49px 0 0 0;
  width: 564px;
  height: 479px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 2px 8px 4px rgba(0, 0, 0, 0.1);

  &-img {
    width: 100%;
    height: 348px;
  }

  &-content {
    width: 100%;
    height: 132px;
    box-sizing: border-box;
    padding: 0 51px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &-name {
    height: 30px;
    color: #101010;
    font-size: 24px;
    font-family: "Avenir-Heavy", serif;
  }

  &-desc {
    height: 38px;
    color: #101010;
    font-size: 16px;
    font-family: "TsukuARdGothic-Regular", serif;
    line-height: 24px;
  }
}
</style>
