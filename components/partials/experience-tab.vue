<template>
  <div id="experience--tab">
    <h1 class="aboutme__title">Past Experience</h1>
    <p>Recent</p>
    <div class="aboutme__timeline">
      <ExperienceCard
        v-for="(experience,index) in experiences"
        :key="index"
        v-bind="experience.fields"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ExperienceCard from "./experience-card.vue";
export default {
  components: {
    ExperienceCard
  },
  computed: {
    ...mapState("portfolio", ["experiences"])
  },
  mounted() {
    this.$store.dispatch("portfolio/getAllExperiences");
  }
};
</script>

<style lang="scss">
.aboutme__title {
  font-family: "Jomolhari", serif;
  font-size: 2em;
  // text-decoration: overline;
  text-align: center;
  color: mix($secondary-d, $secondary, 75%);
  margin-bottom: 3rem;
}
.aboutme__timeline {
  list-style: none;
  padding: 0;
  > div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding: 1em;
    margin: 2rem 0;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
}
</style>
