<template>
  <div class="page">
    <div class="r-b-s w-full mt-74 mb-160">
      <div class="c-s-c sticky">
        <img class="avatar" src="/assets/about/avatar.png" />

        <div class="r-c-c mt-44">
          <button
            class="button r-c-c"
            @click="open('/assets/info/Sara Bai\'s Resume.pdf')"
          >
            <img class="button-icon" src="/assets/about/icon_resume.png" />
            <div class="button-text">Resume</div>
          </button>

          <button
            class="button r-c-c ml-16"
            @click="open('https://www.linkedin.com/in/sara-jinfan-bai/')"
          >
            <img class="button-icon" src="/assets/about/icon_linkedin.png" />
            <div class="button-text">LinkedIn</div>
          </button>
        </div>
      </div>

      <div class="c-s-s w-654">
        <p class="h1 fw-700">Hey, this is <span class="purple">Sara</span></p>

        <p class="h2 line-height-120">🎓 CMU graduate</p>
        <p class="h2 line-height-120">🏛 Ex-architect</p>
        <p class="h2 line-height-120">🍩 Sweet tooth</p>
        <p class="h2 line-height-120">
          💍 Newly engaged!!<img
            class="icon-like ml-5"
            src="/assets/icons/emoji_like.png"
          /><img class="icon-like" src="/assets/icons/emoji_like.png" />
        </p>

        <p class="h2">
          I’m a product designer with a Master’s degree in Integrated Innovation
          for Products & Services at
          <span class="fw-700">Carnegie Mellon University</span>.<br /><br />
          My interests in user experience grew from my empathy for people’s
          feelings and curiosity in human psychology. As an ex-architect, I was
          trained to create integrated solutions that fit the needs of business,
          budget, and humans. I was also aware of how my design skills and
          natural empathy could be more valuable to users of digital products
          and services, where human-centered design is more emphasized. I enjoy
          crafting meaningful and intuitive interfaces that enhance both
          efficiency and engagement.
        </p>

        <img class="icon-1" src="/assets/about/icon_1.png" />

        <p class="h2">
          I previously interned at S&C Electric Company working on in-house
          <span class="fw-700">B2B engineering dashboard design</span>, and
          BioMotivate, a mental healthcare startup. Currently, I’m working as a
          research assistant in two labs at CMU HCII respectively on hospitality
          <span class="fw-700">tipping mobile experience</span> and
          <span class="fw-700">AI-aided classroom dashboard</span>, while also
          part-time helping with a
          <span class="fw-700">client-facing website</span> at a Harvard lab
          startup. <br /><br />My past experience enriched my understanding in
          human-centered design and development process. It gave me
          opportunities in both designing new products and iterating on existing
          products, and prepared my way to a mature designer who is confident in
          taking on any design projects. <br /><br />Feel free to explore the
          side projects I did ranging from After Effect video production, design
          challenge, front-end coding, and other projects.
        </p>

        <button class="more" @click="clickLink('1')">
          <div class="more-text">Explore side projects</div>
          <img class="more-icon" src="/assets/about/arrow_down.png" />
        </button>
      </div>
    </div>

    <Sides id="1" />
  </div>
</template>

<script>
import Sides from "@/components/abouts.vue";

export default {
  name: "About",
  components: {
    Sides,
  },
  methods: {
    open(url) {
      window.open(url);
    },
    clickLink(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  box-sizing: border-box;
  padding: 0 144px 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.sticky {
  position: sticky;
  top: 74px;
}

.r-b-s {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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

.r-c-c {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.w-full {
  width: 100%;
}

.w-654 {
  width: 654px;
}

.mt-44 {
  margin-top: 44px;
}

.mt-74 {
  margin-top: 74px;
}

.ml-5 {
  margin-left: 5px;
}

.ml-16 {
  margin-left: 16px;
}

.mb-160 {
  margin-bottom: 260px;
}

.avatar {
  width: 358px;
  height: 374px;
}

.button {
  box-sizing: border-box;
  padding: 0 30px;
  height: 53px;
  background-color: #fbfbfb;
  border: 1px solid #7673fb;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  &-icon {
    width: 19px;
    height: 16.5px;
  }

  &-text {
    margin: 0 0 0 10px;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #7673fb;
  }
}

.more {
  margin: 73px 0 0 0;
  align-self: flex-end;
  box-sizing: border-box;
  padding: 0 36px;
  height: 53px;
  background-color: #fbfbfb;
  border: 1px solid rgba($color: #826feb, $alpha: 0.8);
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &-text {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;

    color: #826feb;
  }

  &-icon {
    margin: 0 0 0 12px;
    width: 16px;
    height: 16px;
  }
}

.h1 {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #454262;
  text-align: left;
}

.h2 {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #454262;
  line-height: 170%;
  text-align: left;
}

.line-height-120 {
  line-height: 110%;
}

.purple {
  color: #7673fb;
}

.fw-700 {
  font-weight: 700;
}

.icon-1 {
  margin: 32px 0;
  width: 41px;
  height: 14px;
}

.icon-like {
  width: 23px;
  height: 20px;
  vertical-align: text-bottom;
}
</style>
