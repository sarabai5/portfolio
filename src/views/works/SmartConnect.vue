<template>
  <div class="page">
    <div class="block block-0 div-gray">
      <div class="block-0-subtitle">
        Help the engineers to focus on one task at a time
      </div>
      <p class="block-0-title">
        <span class="block-0-title--color">SmartConnect</span> | Desktop
        Software Design for Electric Engineering
      </p>
      <div class="block-0-note">
        Work in collaboration with Daisy Chang and S&C design team
      </div>
    </div>
    <div class="block block-1">
      <img class="gif-1" src="/assets/works/SmartConnect/main.gif" />
    </div>
    <div id="0" class="block block-2">
      <div class="block-2-l">
        <!-- <img class="img-0" src="/assets/works/SmartConnect/img-0.png" /> -->
        <div class="block-topic">OVERVIEW</div>
        <div class="block-title">Background</div>
        <div class="block-2-content">
          In this summer internship, I worked with the design team on their
          engineering control system interface, focusing on streamlining UI and
          improving work efficiency for the engineers.<br /><br />Since
          IntelliLink was established in early 2000, the UI and the system has
          been outdated, so we want to migrate to new technologies and make the
          system modular and reusable, improving user interface as well as
          developer experience.
        </div>
      </div>
      <img class="img-1" src="/assets/works/SmartConnect/img-1.png" />
    </div>
    <div class="block margin-5">
      <div class="block-start">
        <div class="block-title margin-1">Challenge</div>
      </div>
      <div class="block-3-list">
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-2" src="/assets/works/SmartConnect/img-2.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Steep Learning Curve</div>
            <div class="block-3-item-desc">
              Electric power knowledge and ecosystem of all related software and
              hardware
            </div>
          </div>
        </div>
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-3" src="/assets/works/SmartConnect/img-3.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Simplify the Complicated</div>
            <div class="block-3-item-desc">
              Make the application more modular and reusable to improve the user
              flow of long operation route with side tasks
            </div>
          </div>
        </div>
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-4" src="/assets/works/SmartConnect/img-4.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Multi User Groups & REQS</div>
            <div class="block-3-item-desc">
              Accommodate tasks of different user groups and innovate UI within
              industry standards and consistency with company branding
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="div-gray"> -->
    <div id="1" class="block-4 div-gray">
      <div class="block-topic block-topic-4">HIGHLIGHTS</div>
      <div class="block-title block-4-title">
        Solutions Targeting Pain Points
      </div>
      <div class="block-swiper">
        <button
          class="block-swiper-arrow block-swiper-arrow-l"
          slot="button-prev"
        ></button>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            class="swiper-item"
            v-for="(item, i) in solutions"
            :key="i"
          >
            <img class="swiper-item-img" :src="item.img" />
            <div class="swiper-item-title">{{ item.title }}</div>
            <div class="swiper-item-desc">{{ item.desc }}</div>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-indicator"
            slot="pagination"
          ></div>
        </swiper>
        <button
          class="block-swiper-arrow block-swiper-arrow-r"
          slot="button-next"
        ></button>
      </div>
    </div>
    <!-- </div> -->

    <div class="block div-gray">
      <div class="block-title">Proposed Design System</div>
      <div class="block-row margin-2">
        <img class="img-6" src="/assets/works/SmartConnect/img-6.png" />
        <div class="block-6">
          <div class="block-6-title">UI Survey</div>
          <div class="block-6-content">
            A UI survey is designed particularly to find out how far the
            engineers are willing to go in terms of interface modernization, as
            some people shows the demand for newer-looking software for the
            industry while some would like to remain the traditional
            professionalism.<br /><br />
            The final design system has been tested with in-house engineers and
            gone through multiple team critiques.
          </div>
        </div>
      </div>
    </div>

    <div class="block div-gray">
      <div class="block-title margin-3">Design Process & Timeline</div>
      <img class="img-7" src="/assets/works/SmartConnect/img-7.png" />
    </div>

    <div id="2" class="block block-7">
      <div class="block-topic">USER RESEARCH</div>
      <p class="block-7-intro">
        Our first task was to conduct as many interviews as we could, so several
        ones in each user group. Unlike customer-facing products, IntelliLink is
        for professional electric engineers to perform daily checkups and
        configurations. In order to create <span>improved user flow</span>, we
        needed to conduct many interviews upfront to understand the ecosystem of
        Smart Connect down to details including electric power terminology, how
        the software operates on the devices, limitation, warning actions, etc.
        In these interviews, engineers discussed the
        <span>reasonings behind settings</span>, the
        <span>settings and data that they want quick access to</span>, and the
        <span>different goals they try to accomplish on each page</span> or
        <span>based on their job funtions</span>.
      </p>
      <div class="block-7-row">
        <div class="block-7-item">
          <img class="img-8" src="/assets/works/SmartConnect/img-8.png" />
          <div class="block-7-title">Expert Interviews</div>
          <div class="block-7-desc">
            Understand IntelliLink system and the ecosystem of related products
            at S&C. [Terminology, how the software operates on the devices,
            limitation, warning actions, etc.]
          </div>
        </div>
        <div class="block-7-item block-7-item--r">
          <img class="img-9" src="/assets/works/SmartConnect/img-9.png" />
          <div class="block-7-title">Stakeholders Interviews</div>
          <div class="block-7-desc">
            Understand use cases and pain points in engineers’ daily checkups
            and configurations.
          </div>
        </div>
      </div>
    </div>

    <div class="block block-8">
      <div class="block-title block-8-title">
        5 User Groups | 9 Participants | 15 Interviews
      </div>
      <div class="block-8-list">
        <div class="block-8-item" v-for="(item, i) in participants" :key="i">
          <img class="block-8-item-avatar" :src="item.avatar" />
          <div class="block-8-item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- <div class="block block-8">
      
    </div> -->

    <div id="3" class="block block-9 div-gray">
      <div class="block-topic">SYNTHESIS</div>

      <div class="block-9-title block-9-title-2">6 Pain Points Identified</div>

      <p class="block-9-intro">
        Next, we did a themati analysis of the interviews conducted with the
        in-house engineers and
        <span>identify patterns across different user groups</span>. By
        clustering the items that came up repeatedly within the interviews with
        an affinity diagram, we were able to identify 6 main pain points that
        our users wish for a fix.
      </p>

      <img class="img-19" src="/assets/works/SmartConnect/img-19.png" />

      <div class="block-9-title">
        First-time Onboarding and Daily Tasks Outlining
      </div>

      <p class="block-9-intro">
        The <span>complicated system</span> and the
        <span>multiple user groups</span> posed an difficulty in identifying a
        general user flow. To aid in our understanding of their user flows for
        our later ideation, we organized their common tasks into
        <span>one simple overarching skeleton</span> so that we have a base
        point for creating specific improvements targeting different user groups
        in addition to their main work flow.
      </p>

      <img class="img-16" src="/assets/works/SmartConnect/img-16.png" />

      <div class="block-nopadding">
        <div class="block-9-row">
          <img class="img-18" src="/assets/works/SmartConnect/img-18.png" />

          <div class="block-9-column">
            <div class="block-9-title block-9-title-3">Affinity Diagram</div>

            <div class="block-9-content">
              We gathered and categorized interview insights and pain points
              into list of items in clusters.<br /><br />
              The affinity diagram helped us identify 6 most complained pain
              points and develop them into possible features to design for the
              system.
            </div>
          </div>
        </div>

        <div class="block-9-row">
          <div class="block-9-column">
            <div class="block-9-title">Value-Effort Matrix</div>

            <p class="block-9-intro block-9-content block-9-content-1">
              Based on identified pain points, we developed a list of functions
              and features to add or improve.<br /><br />

              Then we mapped them onto a <span>value-effort matrix</span> to
              help us identify the priority of improvements, which should
              enhance the efficiency of the software while not costing too much
              for both designers and developers.
            </p>
          </div>
          <img class="img-20" src="/assets/works/SmartConnect/img-20.png" />
        </div>

        <div class="block-10">
          <div class="block-10-title">Design Principles</div>
          <p class="block-10-content">
            <span class="block-10-content-bold"
              >#1 Focus on one task at a time</span
            ><br /><br />
            The control system has hundreds of settings in which most requires
            electricity professional knowledge and working experiences to use.
            We can help users to more efficiently work with the settings in the
            system by building user flows that focus on one task at time.
            <br /><br /><span class="block-10-content-bold"
              >#2 Be informative</span
            ><br /><br />
            Allow engineers to see a list of settings as comprehensive as
            possible for configurations and navigation in one work session.
            <br /><br /><span class="block-10-content-bold"
              >#3 Be customizable</span
            ><br /><br />
            Accommodate different needs of multiple user groups by allowing more
            customization in interface design.
            <br /><br /><span class="block-10-content-bold"
              >#4 Innovative while consistent visual branding</span
            ><br /><br />
            Propose design improvements based on design system and their other
            software interfaces and find visual balance between modern and
            professional.
          </p>
        </div>
      </div>
    </div>

    <div id="4" class="block block-11">
      <div class="block-topic">USER TESTINGS</div>
      <img class="img-22" src="/assets/works/SmartConnect/img-22.png" />

      <div class="block-row margin-4">
        <div class="block-11-1">
          <div class="block-11-1-note">
            10 Participants | 13 Testing Sessions
          </div>
          <div class="block-11-1-title">Testing Goal & Methods</div>
          <div class="block-11-1-content">
            Tested out the solutions and user flows we proposed based on
            interview insights via Microsoft Teams by having users controlling
            cursor and thinking out loud.<br /><br />
            Moving on to the mid-fi and hi-fi phase, we conducted usability
            testings for interaction design details.
          </div>
        </div>
        <img class="img-23" src="/assets/works/SmartConnect/img-23.png" />
      </div>

      <div class="block-11-title">Testing-based Iteration Highlights</div>
      <div class="block-11-head">
        <div class="block-11-head-text block-11-head-l">#Proposed Solution</div>
        <div class="block-11-head-text block-11-head-r">
          #Iterative Solution
        </div>
      </div>
      <!-- @mouseout="onOut()" -->
      <div class="block-11-list">
        <div v-for="(item, i) in highlights" :key="i">
          <div
            v-if="item"
            class="block-11-item"
            :style="{ backgroundImage: `url('${item.normal}')` }"
            @mouseenter="onHover(i)"
          >
            <div v-if="hoverIndex == i" class="block-11-item-hover">
              <img class="block-11-item-hover-img" :src="item.hover" />
              <div class="block-11-item-hover-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
          <img
            v-else
            class="arrow"
            src="/assets/works/SmartConnect/arrow.png"
          />
        </div>
      </div>
    </div>

    <div id="5" class="block block-12 div-gray">
      <div class="block-topic">HI-FI DESIGNS</div>

      <div class="block-12-title block-12-title-1">Hi-fi Explorations</div>
      <div class="block-12-list">
        <div class="block-12-item" v-for="(item, i) in explorations" :key="i">
          <img class="block-12-item-img" :src="item.img" />
          <div class="block-12-item-desc">{{ item.desc }}</div>
        </div>
      </div>

      <div class="block-12-title block-12-title-2">Final Design</div>
      <img class="img-28" src="/assets/works/SmartConnect/img-28.png" />
    </div>
    <Turnpage class="div-gray margin-6" :next="next"></Turnpage>

    <div class="quick">
      <div v-if="canQuick" class="quick-unfold">
        <div class="quick-arrow" @click="clickQuice(false)"></div>
        <button
          class="quick-item"
          v-for="(item, i) in quicklinks"
          :key="i"
          @click="clickQuick(item)"
        >
          {{ item.title }}
        </button>
      </div>
      <div v-else class="quick-fold" @click="clickQuice(true)"></div>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus";
import Turnpage from "@/components/turnpage.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "SmartConnect",
  components: {
    Turnpage,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data: () => {
    return {
      canQuick: true,
      previous: null,
      next: {
        title: "PET TRACKER",
        name: "FurGo",
      },
      handler: null,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          prevEl: ".block-swiper-arrow-l",
          nextEl: ".block-swiper-arrow-r",
        },
      },
      quicklinks: [
        {
          title: "Overview",
          id: "0",
        },
        {
          title: "Highlights",
          id: "1",
        },
        {
          title: "Research",
          id: "2",
        },
        {
          title: "Synthesis",
          id: "3",
        },
        {
          title: "User Testings",
          id: "4",
        },
        {
          title: "Hi-Fi",
          id: "5",
        },
      ],
      solutions: [
        {
          img: "/assets/works/SmartConnect/1.gif",
          title: "Customizable Data Table ",
          desc: "Users from 5 different user groups can now select table header items for searching and filtering in device list and prioritize items based on their daily job needs.",
        },
        {
          img: "/assets/works/SmartConnect/2.gif",
          title: "Onboarding for Guidance",
          desc: "Guide first-time users through some critical aspects of the software. Encourage and guide users to configure some important settings upon adding a new device.",
        },
        {
          img: "/assets/works/SmartConnect/3.gif",
          title: "Task Work Flow Improving Efficiency ",
          desc: "Help users focus on one task at a time by removing distractions and building a user flow for layers of settings. Eliminate unused settings from views and only show the settings upon enabling. ",
        },
        {
          img: "/assets/works/SmartConnect/4.gif",
          title: "Efficient “Validate/Apply” User Flow",
          desc: "Make validation result to a retrievable and collapsable pop-up window and improve work efficiency with validate-apply-reconfigurate user flow and linkage.",
        },
        {
          img: "/assets/works/SmartConnect/5.gif",
          title: "Quick Multi-device Comparison",
          desc: "Engineers often need to cross check settings on different devices",
        },
      ],
      participants: [
        {
          name: "3 Quality Assuarance",
          avatar: "/assets/works/SmartConnect/img-11.png",
        },
        { name: "2 PSS", avatar: "/assets/works/SmartConnect/img-12.png" },
        {
          name: "1 Developer",
          avatar: "/assets/works/SmartConnect/img-13.png",
        },
        {
          name: "2 Product Manager",
          avatar: "/assets/works/SmartConnect/img-14.png",
        },
        {
          name: "2 Design Engineers",
          avatar: "/assets/works/SmartConnect/img-15.png",
        },
      ],
      explorations: [
        {
          img: "/assets/works/SmartConnect/img-25.png",
          desc: "Professional take",
        },
        {
          img: "/assets/works/SmartConnect/img-26.png",
          desc: "Bold take",
        },
        {
          img: "/assets/works/SmartConnect/img-27.png",
          desc: "Combination iteration",
        },
      ],
      hoverIndex: -1,
      highlights: [
        {
          normal: "/assets/works/SmartConnect/img-29-0.png",
          hover: "/assets/works/SmartConnect/img-29-1.png",
          desc: "While preserving cybersecurity, we incorporated device management so that users only log in once to manage all on homepage, which enables comparision function.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-30-0.png",
          hover: "/assets/works/SmartConnect/img-30-1.GIF",
          desc: "Added data table filtering and customization funtion for different user groups, and additional compare function for cross devices monitoring.",
        },
        {
          normal: "/assets/works/SmartConnect/img-31-0.png",
          hover: "/assets/works/SmartConnect/img-31-1.png",
          desc: "Create a user flow to notify users of the validation result. Unsuccessful result window guides users directly to error input locations.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-32-0.png",
          hover: "/assets/works/SmartConnect/img-32-1.GIF",
          desc: "Improve the UI and user flow in making pop-up window retrievable and collapsable for easier configuration.",
        },
        {
          normal: "/assets/works/SmartConnect/img-33-0.png",
          hover: "/assets/works/SmartConnect/img-33-1.png",
          desc: "Collapse to hide unused settings in default and reorganize settings into better groupings.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-34-0.png",
          hover: "/assets/works/SmartConnect/img-34-1.GIF",
          desc: "Create a work flow for the unused settings by reorganizing them into a more modular based and task based configuration experience.",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  beforeCreate() {
    Bus.$emit("navstyle", "background-color: rgba(251, 251, 251, 0.7);");
    Bus.$emit("bodystyle", "background-color: #fbfbfb;");
  },
  beforeDestroy() {
    Bus.$emit("navstyle", "");
    Bus.$emit("bodystyle", "");
  },
  methods: {
    clickQuick(item) {
      document.getElementById(item.id).scrollIntoView();
    },
    clickQuice(res) {
      this.canQuick = res;
    },
    onHover(i) {
      console.log("onHover " + i);
      this.hoverIndex = i;
    },
    onOut() {
      this.hoverIndex = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  animation: none;
  color: #826feb;
}

.page {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // padding: 0 0 100px 0;
  background-color: #ffffff;
  text-align: left;
  // scroll-behavior: smooth;
}

.div-gray {
  background-color: #fbfbfb;
  // background-color: red;
}

.quick {
  position: fixed;
  top: 300px;
  left: 0;
  z-index: 999;

  &-fold {
    position: relative;
    width: 48px;
    height: 44px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/assets/works/SmartConnect/quick-icon.png");
    cursor: pointer;
  }

  &-unfold {
    position: relative;
    box-sizing: border-box;
    padding: 16px 18px;
    background: rgba(255, 255, 255, 0.5);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 8px rgba(103, 100, 139, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-arrow {
    position: relative;
    width: 9px;
    height: 12.25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/assets/works/SmartConnect/quick-arrow.png");
    cursor: pointer;
  }

  &-item {
    margin: 16px 0 0 0;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #67648b;
    cursor: pointer;

    :hover {
      color: #826feb;
    }
  }
}

.block {
  width: 100%;
  box-sizing: border-box;
  padding: 0 144px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-nopadding {
    padding: 0 0;
  }

  &-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-topic {
    margin: 0 0 46px 0;
    position: relative;
    box-sizing: border-box;
    padding: 0 5px;
    width: auto;
    height: 38px;
    line-height: 38px;
    background: linear-gradient(90deg, #8b85d2 0%, #84c4c8 100%);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    text-transform: uppercase;
    color: #ffffff;
    align-self: flex-start;

    &-4 {
      margin: 0 0 0 144px;
      width: 208px;
    }
  }

  &-title {
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #67648b;
  }

  &-start {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}

.margin {
  &-1 {
    margin: 63px 0 42px 0;
  }

  &-2 {
    margin: 40px 0 0 0;
  }

  &-3 {
    margin: 150px 0 0 0;
  }

  &-4 {
    margin: 150px 0 0 0;
  }

  &-5 {
    margin: 0 0 150px 0;
  }

  &-6 {
    margin: 0 0 0 0;
    padding-bottom: 100px;
  }

  &-7 {
    margin: 0 0 0 99px;
  }
}

.block-0 {
  padding: 125px 144px 20px 144px;

  &-subtitle {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    color: #67648b;
  }

  &-title {
    margin: 40px 0 0 0;
    max-width: 864px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 150%;
    text-align: center;
    color: #67648b;
  }

  &-title--color {
    color: #5095a5;
  }

  &-note {
    margin: 141px 0 0 0;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #67648b;
  }
}

.block-1 {
  position: relative;
  height: 800px;
  background: linear-gradient(
    252.85deg,
    #e9e8f5 0%,
    #edf3f8 19.79%,
    #daeef2 49.37%,
    #e3ebf1 67.71%,
    #ddeced 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gif-1 {
  position: relative;
  width: 869px;
  height: auto;
  filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
  border-radius: 16px;
}

.img-0 {
  margin: 0 0 40px 0;
  position: relative;
  width: 289px;
  height: 72px;
}

.block-2 {
  margin: 87px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-l {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-content {
    margin: 32px 0 0 0;
    width: 655px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #67648b;
  }
}

.img-1 {
  margin: 71px 0 0 0;
  position: relative;
  width: 405px;
  height: auto;
}

.img-2 {
  width: 88px;
  height: auto;
}

.img-3 {
  width: 81px;
  height: auto;
}

.img-4 {
  width: 82px;
  height: auto;
}

.block-3 {
  padding: 105px 0 150px 0;
  &-list {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-img {
    width: auto;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  &-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-title {
      margin: 30px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      text-align: left;
      color: #67648b;
    }

    &-desc {
      margin: 10px 0 0 0;
      width: 271px;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: left;
      color: rgba(103, 100, 139, 0.6);
    }
  }
}

.block-4 {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 83px 0 142px 0;
  overflow: hidden;

  &-title {
    margin: 50px 0 65px 144px;
    align-self: flex-start;
  }
}

.block-swiper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-arrow {
    position: absolute;
    z-index: 12;
    top: 200px;
    width: 71px;
    height: 71px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &-l {
      left: 50px;
      background-image: url("/assets/works/SmartConnect/swiper-l.png");
    }

    &-r {
      right: 50px;
      background-image: url("/assets/works/SmartConnect/swiper-r.png");
    }
  }
}

.swiper {
  position: relative;
  // width: 100vw;
  // box-sizing: border-box;
  // padding: 0 0 0 144px;
  // overflow-y: hidden;
  // overflow-x: scroll;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  align-items: center;
  // overflow: hidden;
  // width: 100%;

  &-item {
    position: relative;
    // margin: 0 150px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-img {
      width: 754px;
      height: 441px;
      filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
      border-radius: 16px;
    }

    &-title {
      margin: 50px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 130%;
      text-align: center;
      color: #67648b;
    }

    &-desc {
      max-width: 754px;
      margin: 16px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #67648b;
    }
  }

  &-indicator {
    position: relative;
    width: 400px;
    // margin: 43px 0 0 0;
  }
}

.img-6 {
  position: relative;
  width: 755px;
  height: 549px;
}

.block-6 {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 150%;
    color: #67648b;
  }

  &-content {
    margin: 31px 0 0 0;
    width: 330px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #67648b;
  }
}

.img-7 {
  margin: 40px 0 96px 0;
  position: relative;
  width: 1152px;
  height: 554px;
}

.block-7 {
  padding: 100px 144px 0 144px;

  &-intro {
    margin: 58px 0 99px 0;
    align-self: center;
    width: 954px;
    text-align: left;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #67648b;

    span {
      font-weight: bold;
    }
  }

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &--r {
      margin: 0 0 0 40px;
    }
  }

  &-title {
    margin: 22px 0 0 0;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #67648b;
  }

  &-desc {
    margin: 16px 0 0 0;
    width: 356px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: rgba(103, 100, 139, 0.6);
  }
}

.img-8 {
  position: relative;
  width: auto;
  height: 167px;
}

.img-9 {
  position: relative;
  width: auto;
  height: 167px;
}

.img-10 {
  margin: 0 0 75px 0;
  align-self: flex-start;
  position: relative;
  width: 286px;
  height: 73px;
}

.block-8 {
  margin: 85px 0 128px 0;
  &-title {
    align-self: center;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #67648b;
  }

  &-list {
    margin: 51px 0 0 0;
    width: 761px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-avatar {
      position: relative;
      width: 90px;
      height: 90px;
    }

    &-name {
      width: 107px;
      margin: 28px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: rgba(103, 100, 139, 0.6);
    }
  }
}

.block-9 {
  padding: 78px 144px 100px 144px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &-title {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #67648b;
  }

  &-title-1 {
    margin: 50px 0 0 0;
  }

  &-title-2 {
    margin: 65px 0 0 0;
  }

  &-title-3 {
    margin: 5px 0 0 0;
  }

  &-intro {
    margin: 40px 0 0 0;
    width: 954px;
    text-align: left;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #67648b;

    span {
      font-weight: bold;
    }
  }

  &-row {
    margin: 200px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-column {
    margin: 0 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-content {
    margin: 43px 0 0 0;
    width: 358px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #67648b;

    &-1 {
      margin: 35px 0 0 0;
    }
  }
}

.img-16 {
  margin: 69px 0 0 0;
  position: relative;
  width: 956px;
  height: 529px;
}

.img-17 {
  align-self: flex-start;
  position: relative;
  width: 297px;
  height: 76px;
}

.img-18 {
  position: relative;
  width: 556px;
  height: 342px;
}

.img-19 {
  margin: 69px 0 136px 0;
  position: relative;
  width: 954px;
  height: auto;
}

.img-20 {
  margin: 0 0 0 40px;
  position: relative;
  width: 556px;
  height: 364px;
}

.block-10 {
  margin: 150px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  &-title {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #67648b;
  }

  &-content {
    margin: 0 0 0 56px;
    width: 656px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #67648b;
    text-align: left;

    &-bold {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 150%;
      color: #67648b;
      text-align: left;
    }
  }
}

.block-11 {
  padding: 156px 144px 180px 144px;

  &-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-note {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #67648b;
    }

    &-title {
      margin: 9px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 150%;
      color: #67648b;
    }

    &-content {
      margin: 32px 0 0 0;
      width: 556px;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      color: #67648b;
    }
  }

  &-title {
    margin: 150px 0 0 0;
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #67648b;
  }

  &-head {
    margin: 80px 0 20px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
      width: 457px;
      text-align: center;
      font-family: Open Sans;
      font-style: italic;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }

    &-l {
      color: #67648b;
    }

    &-r {
      color: #509daf;
    }
  }

  &-list {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }

  &-item {
    position: relative;
    margin: 75px 0;
    width: 457px;
    height: 249px;
    background-repeat: no-repeat;
    background-size: cover;
    // border: 1px solid rgba(103, 100, 139, 0.3);
    // box-sizing: border-box;
    // filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
    // border-radius: 8px;

    &-hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 457px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #f8f8f8;
      // filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
      box-shadow: 0px 4px 15px 2px rgba(47, 85, 94, 0.2);
      border: 1px solid rgba(103, 100, 139, 0.3);
      box-sizing: border-box;
      border-radius: 8px;
      overflow: hidden;

      &-img {
        width: 457px;
        height: 249px;
      }

      &-desc {
        margin: 15px 0 0 0;
        width: 428px;
        height: 87px;
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 180%;
        color: #67648b;
        text-align: left;
      }
    }
  }

  .arrow {
    margin: 0 0 35px 0;
    position: relative;
    width: 111px;
    height: 88px;
    // background-image: url("/assets/works/SmartConnect/arrow.png");
    // background-size: 100% auto;
    // background-repeat: no-repeat;
  }
}

.img-21 {
  align-self: flex-start;
  position: relative;
  width: 369px;
  height: 69px;
}

.img-22 {
  margin: 50px 0 0 0;
  position: relative;
  width: 954px;
  height: 650px;
}

.img-23 {
  margin: 0 0 0 139px;
  position: relative;
  width: 457px;
  height: 247px;
}

.block-12 {
  padding: 100px 144px 229px;

  &-title {
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #67648b;
  }

  &-title-1 {
    margin: 50px 0 0 0;
  }

  &-title-2 {
    margin: 100px 0 0 0;
  }

  &-list {
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-img {
      width: 357px;
      height: 477px;
    }

    &-desc {
      margin: 24px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      color: #67648b;
    }
  }
}

.img-24 {
  align-self: flex-start;
  position: relative;
  width: 349px;
  height: 54px;
}

.img-28 {
  margin: 40px 0 0 0;
  position: relative;
  width: 1152px;
  height: 864px;
}
</style>
