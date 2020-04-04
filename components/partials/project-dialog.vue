<template>
  <dialog id="projectDialog">
    <div class="scrollContainer">
      <div class="dialog__thumbnail" v-if="thumbnail">
        <img defer :src="thumbnail.fields.file.url" :alt="thumbnail.fields.title">
      </div>
      <div class="infoContainer">
        <ul class="dialog__tags">
          <li v-for="tag in tags" :key="tag">{{tag}}</li>
        </ul>
        <h1 class="dialog__title">{{title}}</h1>
        <div class="project__action">
          <a
            v-if="liveUrl"
            class="dialog__action"
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
          >Live</a>
          <a
            v-if="codeUrl"
            class="dialog__action"
            :href="codeUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'code']"/>
          </a>
        </div>
        <p class="dialog__description" v-html="HTMLDescription"></p>

        <button class="dialog__action" @click="$emit('closeDialog')">Close</button>
      </div>
    </div>
  </dialog>
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
    HTMLDescription: function() {
      return documentToHtmlString(this.description);
    }
  },
  mounted() {
    // if (process.client) {
    const dialogEl = document.getElementById("projectDialog");
    this.$registerDialog(dialogEl);
    // }
  }
};
</script>

<style lang="scss" scoped>
dialog {
  display: none;
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  border: none;
  max-width: 80vw;
  /* width: 450px; // TODO: MOBILE? 300px; */
  color: $primary;
  /* background-color: $primary-l; */
  overflow: hidden;
  max-height: 80vh;
  padding: 0;
  background-color: $white;

  &[open] {
    display: block;
  }
  .scrollContainer {
    height: 80vh;
    overflow: auto;
    padding: 0;
    margin: 0;
     &::-webkit-scrollbar {
    width: .4em;
}
&::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: transparent;
}
&::-webkit-scrollbar-thumb {
  background-color: rgba(mix($primary, $secondary, 70%),.4);
  // outline: 1px solid slategrey;
  outline: transparent;
}
  }
  .#{&}__thumbnail {
    width: 100%;
    img {
      width: inherit;
      object-fit: contain;
      max-height: 600px;
    }
  }
  .infoContainer {
    margin: 0 1em 1em;
    display: flex;
    flex-direction: column;
  }
  .#{&}__title {
    font-family: "Jomolhari", serif;
  }
  .#{&}__tags {
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
  .#{&}__action {
    background: none;
    background-color: $white;
    text-decoration: none;
    color: black;
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
  &::backdrop, & + .backdrop {
    background-color: rgba(black, 0.4);
  }
}
</style>
