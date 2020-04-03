<template>
  <section id="aboutMe">
    <div class="tab">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :aria-label="tab + ' Tab'"
          :class="['tab__link',{'tab__link--active': tab === currentTab}]"
          @click="currentTab = tab"
        >
          <span>{{tab}}</span>
        </button>
      </div>
      <div class="tab__body">
        <component v-bind:is="currentTabComponent" class="tab__content"/>
      </div>
    </div>
  </section>
</template>
<script>
import AboutTab from "./partials/about-me-tab.vue";
import ExperienceTab from "./partials/experience-tab.vue";
export default {
  components: {
    "about--tab": AboutTab,
    "experience--tab": ExperienceTab
  },
  data: () => ({
    currentTab: "About",
    tabs: ["About", "Experience"]
  }),
  computed: {
    currentTabComponent: function() {
      return this.currentTab.toLowerCase() + "--tab";
    }
  }
};
</script>


<style lang="scss" scoped>
#aboutMe {
  position: relative;
  box-shadow: 0 14px 28px rgba(black, 0.25), 0 10px 10px rgba(black, 0.22);
  background: linear-gradient(180deg, rgba(2,6,19,1) 0%, $primary 100%);
  display: flex;
  align-items: center;
  .tab {
     display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 1700px;
    background-color: $white;
    width: 100%;
    margin: 0 auto;
    color: $primary;
    box-shadow: 0 14px 28px rgba($secondary-d, 0.25), 0 10px 10px rgba($secondary-d, 0.3);
    @include respond-below("tablet") {
    flex-direction: column;
  }

  .tabs {
    display: flex;
    justify-content: space-around;
    background-color: $primary;
        align-items: stretch;
    .tab__link {
      display: inline-block;
      border: none;
      padding: 0 0.5em;
      margin: 0;
      text-decoration: none;
      background: transparent;
      color: $white;
      text-align: center;
      cursor: pointer;
      font-size: 1.2em;
      width: fit-content;
      transition: background 250ms ease-in-out, transform 150ms ease,
        all 250ms ease-in-out;
            span {
              writing-mode: vertical-rl;
      
            }
        
      &:not(.tab__link--active):hover {
        background-color: $secondary-d;
        padding: 0 1em;
      }
      &:focus {
        outline: none;
      }

      @include respond-below("tablet") {
              padding: .5em;
              span {
                flex-direction: column;
                writing-mode: lr;
              }
  }
    }
    .tab__link--active {
      background-color: $secondary;
      padding: 0 1.5em;
      @include respond-below("tablet") {
        padding: .6em;
      }
    }
  }

  .tab__body {
    width: 100%;
    height: 80vh;
    overflow: auto;
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
                        @include respond-below("desktop") {
                          font-size: 12px;
                      }
  }

  .tab__content {
    padding: 1.5em;
  }
  }
}
</style>
