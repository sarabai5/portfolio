<template>
  <div class="projects">
    <div class="project" v-for="(item, i) in projects" :key="i">
      <img class="cover" :src="item.img" @click="clickItem(item)" />
      <div class="info">
        <div class="subtitle">{{ item.subtitle }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="tags">{{ item.tags }}</div>

        <button class="visit" @click="clickItem(item)">
          {{ item.button }}
        </button>
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
          img: "/assets/works/covers/cover_1.png",
          subtitle: "Design for electric engineers @ S&C",
          title: "Desktop Software Product Design",
          tags: "Desktop Application Design | User Testings | Design System | UI/UX",
          button: "Discover",
          path: "/works/SmartConnect",
        },
        {
          img: "/assets/works/covers/cover_5.png",
          subtitle: "Dashboard Design @CMU Oh!Lab",
          title: "Classroom Data Analysis Tool",
          tags: "Desktop Application Design | UI/UX",
          button: "Discover",
          path: "/works/ClassInSight",
        },
        {
          img: "/assets/works/covers/cover_2.png",
          subtitle: "AAPI Alliance #hackforchange \n🏆 2nd place",
          title: "Political Engagement Website for Minorities",
          tags: "Tead Lead & Initiator | Web Design | UI/UX | 2-week Completion",
          button: "Go Play",
          link: "http://www.wetheasians.com/#/",
        },
        {
          img: "/assets/works/covers/cover_3.png",
          subtitle: "Know what your pets are up to",
          title: "Pet Tracker | Moniter | Mobile App",
          tags: "App Design | IoT Design | User Research",
          button: "Discover",
          path: "/works/FurGo",
        },
        {
          img: "/assets/works/covers/cover_4.png",
          subtitle: "Make Series II design competition \n🏆 2nd place finalist",
          title: "Studio Installation Design",
          tags: "User Study | Architecture Design | 3D Modeling",
          button: "Discover",
          path: "/works/MovingBoxes",
        },
        // {
        //   title: "CINNAMON ROLL BAKERY",
        //   label: "Customize Rolls with Fun",
        //   name: "BAKERY SHOP WEBSITE",
        //   desc: "Web Design | User Testing | Usability Test | Front-End Coding",
        //   button: "Go Play",
        //   img: "/assets/works/covers/cover2.gif",
        //   link:
        //     "https://sarabai5.github.io/cinna.github.io/homework_6/menu.html",
        //   background: "#8393EC",
        //   isHover: false
        // },
        // {
        //   title: "MAKE SERIES 2 DESIGN COMPETITION  🏆 2ND PLACE FINALIST",
        //   label: "Make the Studio A Better Place!",
        //   name: "INSTALLATION DESIGN",
        //   desc: "User Study | Architecture Design | 3D Modeling",
        //   button: "Discover",
        //   img: "/assets/works/covers/cover3.png",
        //   background: "#EEE2E4",
        //   path: "/works/MovingBoxes",
        //   isHover: false
        // },
        // {
        //   title: "ROOMSMART",
        //   label: "One Stop Solution for Students",
        //   name: "SIMPLE ROOM RESERVATION SYSTEM",
        //   desc: "App Design | User Study",
        //   button: "Discover",
        //   img: "/assets/works/covers/cover4.png",
        //   path: "/works/RoomSmart",
        //   background:
        //     "linear-gradient(90deg, #FFD88C 0%, #FBD690 39.58%, #E7CFA2 59.37%, #D2C7B5 79.17%, #C0C0C5 90.62%, #9FB3E3 100%)",
        //   color: "#FFD97F",
        //   isHover: false
        // },
        // {
        //   title: "CLIENT: NATIONAL FOUNDATION FOR CREDIT COUNSELING (NFCC)",
        //   status: "In working progress",
        //   label: "How Can We Help Minority Small Business Owner succeed",
        //   name: "FINTECH PRODUCT OPPORTUNITIES",
        //   desc: "In-depth User Research | Team project | Pitch Deck",
        //   button: "Case Study",
        //   img: "/assets/works/covers/cover5.png",
        //   background: "#C7EAE8",
        //   path: "/works/Capstone",
        //   isHover: false
        // },
        // {
        //   title: "IN SECRET",
        //   label: "DancinCloud Website Solution Tool",
        //   name: "COMING SOON...",
        //   desc: "In Secret| In Mystery",
        //   background: "#5AB5C9",
        //   opacity: 0.5,
        //   isHover: false
        // }
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.project {
  position: relative;
  margin: 0 0 160px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  .cover {
    width: 755px;
    height: 500px;
    border-radius: 40px;
    cursor: pointer;
  }

  .info {
    margin: 0 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .subtitle {
      width: 410px;
      text-align: left;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 180%;
      color: #918eb5;
      white-space: pre-wrap;
    }

    .title {
      margin: 39px 0 0 0;
      width: 410px;
      text-align: left;
      font-family: rubik, sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 48px;
      color: #67648b;
    }

    .tags {
      margin: 16px 0 0 0;
      width: 350px;
      text-align: left;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #67648b;
    }

    .visit {
      margin: 50px 0 0 0;
      width: 186px;
      height: 64px;
      line-height: 64px;
      background-color: #fbfbfb;
      border: 1px solid #826feb;
      box-sizing: border-box;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 100px;
      font-family: Roboto Mono;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      color: #826feb;
    }
  }
}
</style>
