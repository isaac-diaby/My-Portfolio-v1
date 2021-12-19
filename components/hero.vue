<template>
  <section class="hero">
    <div class="hero__left">
      <h1 class="hero__header">
        Hello, I'm
        <span class="hero__name">Moustapha</span>
        <span class="hero__name">Isaac Diaby</span>
        <!--    TODO: add animation of other things i do        -->
        <span class="hero__title">Software Developer | Ethical Hacker | Investor | Creator</span>
      </h1>
      <button
        class="hero__action"
        @click="downloadResume"
        aria-label="Download My Resume"
      >Download My Resume</button>
    </div>
    <!-- Replace with an image of myself -->
    <!-- <img defer src="~static/myPicture.png" alt="Image of Moustapha Isaac Diaby"> -->
  </section>
</template>

<script>
export default {
  methods: {
    downloadResume: function() {
      return this.$store.dispatch("portfolio/downloadResume");
    }
  }
};
</script>

<style scope lang="scss">
.hero {
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  /* position: relative; */
  width: 100%;
  @include respond-below("tablet") {
    font-size: 9px;
  }
  @include respond-below("mobile") {
    font-size: 7px;
  }
  &:after {
    position: absolute;
    content: "";
    height: 100vh;
    width: 100%;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #020613 100%);
  }
  &__left {
    z-index: 1;
  }
  &__header {
    display: block;
    color: $secondary;
    font-size: 2.5em;
    text-align: left;
  }
  &__name {
    display: block;
    /* margin: 0.8em; */
    color: $white;
    font-size: 1.5em;
    // inline-size: max-content;
    font-family: "Jomolhari", serif;
    font-size: 2.2em;
    letter-spacing: 0.3rem;
  }
  &__title {
    display: block;
    color: $white;
    font-size: 0.4em;
    font-weight: normal;
  }
  &__action {
    border: 2px solid rgba($secondary, 0.5);
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    color: $white;
    margin-top: 10vh;
    /* margin-top: 9rem; */
    padding: 1em;
    background-color: transparent;
    &:hover {
      background-color: $secondary;
      box-shadow: 0 0 1rem $secondary, 0 0 2rem $secondary;
      cursor: grab;
    }
    &:active {
      transform: scale(0.98);
      cursor: grabbing;
    }

    &:focus {
      outline: none;
    }
  }
  img {
    height: inherit;
    overflow: hidden;
    object-fit: cover;
    @include respond-below("desktop") {
      opacity: 0.3;
      height: 80;
      position: absolute;
      margin: auto;
      z-index: -1;
    }
    @include respond-below("tablet") {
      display: none;
    }
    /* 
    overflow: hidden;
    width: inherit;
    position: absolute;
    filter: opacity(0.6); */
  }
}
</style>
