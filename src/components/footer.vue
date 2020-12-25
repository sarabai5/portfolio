<template>
  <div class="footer">
    <div class="footer--l">
      <div class="desc-1">If you would like to..</div>
      <div class="desc-2">
        work with an enthutiastic individual, grab a coffee with a big cat
        lover, talk about the crazy stuff going on in this world…
      </div>

      <div class="right">© Sara Jinfan Bai.</div>
    </div>

    <div class="footer--r">
      <div class="media-title">Let’s connect !</div>
      <div class="medias">
        <img
          class="media"
          v-for="(item, i) in medias"
          :key="i"
          :src="item.icon"
          @click="openWeb(item.url)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-footer",
  data: () => {
    return {
      medias: [
        {
          name: "email",
          icon: "/assets/icons/media_email.png",
          url:
            "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
        },
        {
          name: "linkedin",
          icon: "/assets/icons/media_linkedin.png",
          url: "https://www.linkedin.com/in/sara-jinfan-bai/"
        },
        {
          name: "ins",
          icon: "/assets/icons/media_ins.png",
          url: "https://www.instagram.com/sarainthesoda/"
        }
      ],
      active: 0
    };
  },
  methods: {
    openWeb(url) {
      window.open(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  margin: 221px 0 0 0;
  width: 100%;
  height: 517px;
  box-sizing: border-box;
  padding: 142px 117px 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  &--l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .desc-1 {
      width: 569px;
      height: 64px;
      overflow: hidden;
      color: #101010;
      font-size: 48px;
      font-family: "Avenir-Heavy", serif;
      line-height: 42px;
      text-align: left;
    }

    .desc-2 {
      margin: 10px 0 0 0;
      width: 569px;
      height: 108px;
      color: #101010;
      font-size: 24px;
      font-family: "Avenir", serif;
      line-height: 36px;
      text-align: left;
    }

    .right {
      margin: 106px 0 0 0;
      color: #101010;
      font-size: 18px;
      font-family: "AndaleMono", monospace;
    }
  }

  &--r {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .media-title {
      margin: -15px 0 0 0;
      height: 57px;
      color: #101010;
      font-size: 48px;
      font-family: "Avenir-Heavy", serif;
    }

    .medias {
      margin: 43px 0 0 0;
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .media {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
