<template>
  <div class="project__card">
    <div class="project__card__thumbnail">
      <img defer :src="thumbnail.fields.file.url" :alt="thumbnail.fields.title">
    </div>
    <div class="container">
      <ul class="project__card__tags">
        <li v-for="tag in tags" :key="tag">{{tag}}</li>
      </ul>
      <h1 class="project__card__title">{{title}}</h1>
      <p class="project__card__description" v-html="shortenHTMLDescription"></p>

      <button class="project__card__action" @click="$emit('openThisDialog')">Read MoRe</button>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  props: {
    thumbnail: Object,
    title: String,
    tags: Array,
    liveUrl: String,
    codeUrl: String,
    description: Object
  },
  computed: {
    shortenHTMLDescription: function() {
      return documentToHtmlString(this.description).substr(0, 190) + "...";
    }
  }
};
</script>

<style lang="scss" scoped>
.project__card {
  width: 350px;
  color: $white;
  background-color: $primary-l;
  overflow: hidden;
  margin: 2em;
  border-radius: 5% 5% 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: initial;
  @include respond-below("mobile") {
    height: 90vh;
  }
  &__thumbnail {
    width: 100%;
    img {
      width: inherit;
      object-fit: contain;
    }
  }
  .container {
    padding: 0 1em 1em;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  &__title {
    font-family: "Jomolhari", serif;
  }
  &__tags {
    display: flex;
    list-style: none;
    justify-content: space-between;
    flex-wrap: wrap;
    text-transform: uppercase;
    padding: 0;
    font-size: 0.8em;
    color: $secondary;
    li {
      margin: 0.4em;
    }
  }
  &__action {
    background-color: $white;
    background: none;
    color: $white;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
    padding: 0.2em 1em;
    text-transform: uppercase;
    border: 2px solid rgba($secondary, 0.8);
    transition: all 0.3s ease-in-out;
    text-align-last: center;
    height: auto;
    &:hover {
      background-color: $secondary;
    }
  }
  @include respond-below("tablet") {
    font-size: 12px;
  }
}
</style>
