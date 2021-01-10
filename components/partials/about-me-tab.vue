<template>
  <div id="about--tab">
    <h1 class="aboutme__title">About Me</h1>
    <p class="aboutme__body" v-html="HTMLAbouMe"></p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  // Break down what is stores in th CMS
  computed: {
    ...mapState("portfolio", ["aboutme"]),
    HTMLAbouMe: function () {
      if (this.aboutme) {
        return documentToHtmlString(this.aboutme.fields.aboutMe);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutme__title {
  font-family: "Jomolhari", serif;
  font-size: 2em;
  // text-decoration: overline;
  text-align: center;
  color: mix($secondary-d, $secondary, 75%);
  margin-bottom: 3rem;
}
.aboutme__body {
  font-size: 1.5em;
  color: $primary;
  margin: 1rem 0;
   /deep/ h4 {
    font-family: "Jomolhari";
    font-weight: bold;
    margin-bottom: 0;
    color: $secondary-d;
    font-size: 1.5rem;
  }
  /deep/ p {
    font-size: 1rem;
  }
  /deep/ a {
    text-decoration: none;
    color: $secondary-d;
    &:hover {
      color: $secondary;
    }
  }
}

</style>
