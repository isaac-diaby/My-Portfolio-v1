<template>
  <div>
    <h3 class="aboutme__timeline__title">{{title}}</h3>
    <h4 class="aboutme__timeline__company">
      {{company}}:
      <span class="aboutme__timeline__duration">
        {{startDate.slice(2)}} -
        <span v-if="endDate">{{endDate.slice(2)}}</span>
        <span v-else>current</span>
      </span>
    </h4>

    <p class="aboutme__timeline__description" v-html="HTMLDescription"></p>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  props: {
    title: String,
    company: String,
    startDate: String,
    endDate: String,
    description: Object
  },
  computed: {
    HTMLDescription: function() {
      return documentToHtmlString(this.description);
    }
  }
};
</script>

<style lang="scss">
.aboutme__timeline__title {
  color: $secondary-d;
}
</style>
