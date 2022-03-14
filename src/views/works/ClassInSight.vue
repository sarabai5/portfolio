<template>
  <div class="page">
    <div class="c-s-c block-padding-0">
      <div class="subtitle">
        Impove classroom learning by guiding teachers in reflecting upon their
        verbal data and teaching content
      </div>
      <p class="h1 mt-30 w-954">
        <span class="blue">ClassInSight</span> | AI-aided Desktop App for
        Classroom Verbal Data Visualziation
      </p>

      <div class="r-b-s w-954 mt-170">
        <div class="c-s-s w-232" v-for="(item, i) in heads" :key="i">
          <div class="h-item h-item-bold">{{ item.title }}</div>
          <div class="h-item mt-28">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <div class="r-b-c page-padding block-padding-1 w-full bg-blue">
      <p class="h2 w-457">
        How might the ClassInSight interface
        <span class="fw-800"
          >provide clear and actionable classroom verbal data</span
        >
        that will encourage them to
        <span class="fw-800"
          >reflect upon their teaching content and classroom interaction</span
        >
        ?
      </p>
      <img class="img-1" src="/assets/works/ClassInSight/img_1.png" />
    </div>

    <div class="c-c-c block-padding-2 w-full">
      <p class="h1">
        Project Details Under Construction<br />
        <span class="blue">Coming Soon...</span>
      </p>
    </div>

    <Turnpage class="div-gray margin-6" :next="next"></Turnpage>

    <!-- <Quicklinks :list="quicklinks"></Quicklinks> -->
  </div>
</template>

<script>
import Turnpage from "@/components/turnpage.vue";
// import Quicklinks from "@/components/quicklinks.vue";

export default {
  name: "ClassInSight",
  components: {
    Turnpage,
    // Quicklinks,
  },
  data: () => {
    return {
      previous: {
        title: "SmartConnect",
        name: "SmartConnect",
      },
      next: {
        title: "PET TRACKER",
        name: "FurGo",
      },
      heads: [
        {
          title: "Role:",
          desc: "Research Assistant UX designer",
        },
        {
          title: "Time:",
          desc: "January 2022 - Present",
        },
        {
          title: "Team: Oh!Lab",
          desc: "Dr. Tricia J. Ngoon, Ph.D. researcher\nDr. Amy Ogan, Ph.D. researcher\nProfessor John Zimmerman\nNeil Thawani, research programmer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  text-align: left;
  padding-bottom: 100px;
}

.mt-18 {
  margin-top: 18px;
}

.mt-28 {
  margin-top: 28px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-108 {
  margin-top: 108px;
}

.mt-170 {
  margin-top: 170px;
}

.w-full {
  width: 100%;
}

.w-232 {
  width: 232px;
}

.w-457 {
  width: 457px;
}

.w-954 {
  width: 954px;
}

.blue {
  color: #3384f3;
}

.bg-blue {
  background: linear-gradient(
    252.85deg,
    rgba(233, 232, 245, 0.7) 0%,
    rgba(187, 209, 240, 0.7) 19.79%,
    rgba(233, 232, 245, 0.7) 49.37%,
    rgba(204, 221, 244, 0.7) 76.04%,
    rgba(187, 209, 240, 0.7) 100%
  );
}

.page-padding {
  box-sizing: border-box;
  padding-left: 243px;
  padding-right: 243px;
}

.c-c-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.c-s-c {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.c-s-s {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.r-b-s {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.r-b-c {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  color: #454262;
}

.h2 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 180%;
  letter-spacing: 0.01em;
  color: #454262;
}

.fw-800 {
  font-weight: 800;
}

.subtitle {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: rgba(69, 66, 98, 0.6);
}

.h-item {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(69, 66, 98, 0.7);

  &-bold {
    color: #454262;
  }
}

.block-padding {
  &-0 {
    padding-top: 108px;
    padding-bottom: 140px;
  }
  &-1 {
    padding-top: 124px;
    padding-bottom: 124px;
  }

  &-2 {
    padding-top: 294px;
    padding-bottom: 328px;
  }
}

.img {
  &-1 {
    width: 457px;
    height: 323.63px;
  }
}
</style>
