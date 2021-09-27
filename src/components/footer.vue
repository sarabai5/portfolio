<template>
  <div class="footer fade-content">
    <div class="footer-l">
      <div class="title">Thank you for scrolling!</div>
      <div class="desc">
        If you’d like to work together or just talk about our shared passion in
        design!<br />Connect with me: 👇
      </div>

      <div class="media">
        <img
          class="media-item"
          v-for="(item, i) in medias"
          :key="i"
          :src="item.icon"
          @click="openWeb(item.url)"
        />
      </div>
    </div>
    <div class="footer-r">
      <img class="footer-icon" src="/assets/icons/footer_note.png" />
      <div class="footer-note">
        © Designed by Sara | Developed by Sara <br />https://github.com/sarabai5
      </div>
    </div>
    <!-- <div class="desc">
      If you’d like to work together or just talk about anything fun! 🥳
      <br />Connect with me:
    </div>

    <div class="finger">👇</div>

    <div class="media">
      <div class="media-list">
        <img
          class="media-item"
          v-for="(item, i) in medias"
          :key="i"
          :src="item.icon"
          @click="openWeb(item.url)"
        />
      </div>
    </div>

    <div @click="clickGitHub()" class="right">
      © Designed by Sara | Developed by Sara<br />
      <p class="right-link">https://github.com/sarabai5</p>
    </div> -->
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
    },
    clickGitHub() {
      window.open("https://github.com/sarabai5");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 90px 145px 52px 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #edebf7;
  border-radius: 16px;

  &-l {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: #897ec1;
    text-align: left;
  }

  .desc {
    max-width: 539px;
    margin: 50px 0 0 0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    color: #897ec1;
    text-align: left;
    line-height: 150%;
  }

  .media {
    margin: 61px 0 0 0;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-item {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  &-r {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &-icon {
    margin: 0 34px 0 0;
    width: 191px;
    height: auto;
  }

  &-note {
    margin: 57px 0 0 0;
    font-family: Andale Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: right;
    color: #897ec1;
    text-align: right;
  }
}
</style>
