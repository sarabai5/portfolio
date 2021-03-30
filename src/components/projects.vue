<template>
  <div class="projects fade-content">
    <div
      class="project"
      v-for="(item, i) in projects"
      :key="i"
      @click="clickItem(item)"
    >
      <img v-if="item.gif" class="project-img" :src="item.gif" />
      <img
        class="project-img"
        :class="{ 'project-img--hover': item.gif && hoverIndex == i }"
        :src="item.img"
        @mouseover="onHover(i)"
        @mouseout="onOut()"
      />
      <div v-if="item.name" class="project-content">
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
      hoverIndex: -1,
      projects: [
        {
          name: "FurGo Pet Tracker & Monitor",
          desc: "UI / UX / Product Design | Individual Project",
          img: "/assets/works/covers/project_3.png",
          path: "/works/FurGo",
          isHover: false
        },
        {
          name: "Moving Boxes",
          desc: "Product Design | Individual Project",
          img: "/assets/works/covers/project_2.png",
          path: "/works/MovingBoxes",
          isHover: false
        },
        {
          name: "Cinnamon Roll Specialty Bakery",
          desc: "UI / UX Design / Coding | Academic Project",
          img: "/assets/works/covers/roll-static.png",
          gif: "/assets/works/covers/roll-animation.gif",
          link: "https://sarabai5.github.io/cinna.github.io/homework_5/",
          isHover: false
        },
        {
          name: "Roomsmart",
          desc: "UI / UX Design / Architecture | Individual Project",
          img: "/assets/works/covers/project_1.png",
          path: "/works/RoomSmart",
          isHover: false
        },
        {
          // name: "StaySound",
          // desc: "UI / UX Design | Individual Project",
          img: "/assets/works/covers/project_4.png",
          isHover: false
        },
        {
          // name: "StaySound",
          // desc: "UI / UX Design | Individual Project",
          img: "/assets/works/covers/project_5.png",
          isHover: false
        }
      ]
    };
  },
  methods: {
    clickItem(item) {
      if (item.path) this.$router.push(item.path);
      else window.open(item.link);
    },
    onHover(index) {
      this.hoverIndex = index;
    },
    onOut() {
      this.hoverIndex = -1;
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
  position: relative;
  margin: 49px 0 0 0;
  width: 564px;
  height: 479px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 2px 8px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &--hover {
      opacity: 0;
    }
  }

  &-content {
    z-index: 1;
    position: relative;
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
    font-family: "Nunito", sans-serif;
    font-weight: 700;
  }

  &-desc {
    margin: 5px 0 0 0;
    height: 38px;
    color: #101010;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    line-height: 24px;
  }
}
</style>
