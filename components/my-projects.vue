 <template>
  <section id="myProjects">
    <div class="project__header">
      <h1>My Projects</h1>
      <div class="project__navigator">
        <button>
          <font-awesome-icon :icon="['fas', 'angle-left']"/>
        </button>
        <button>
          <font-awesome-icon :icon="['fas', 'angle-right']"/>
        </button>
      </div>
    </div>

    <div class="projects">
      <ProjectCard
        v-for="(project,index) in projects"
        :key="index"
        v-bind="project.fields"
        v-on:openThisDialog="openDialog(project.fields)"
      />
    </div>

    <!-- dialog -->
    <ProjectDialog v-bind="dialogData" v-on:closeDialog="closeDialog"/>
    <!--  -->
  </section>
</template>

<script>
import ProjectCard from "./partials/project-card.vue";
import ProjectDialog from "./partials/project-dialog.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProjectCard,
    ProjectDialog
  },
  data: () => ({
    dialogData: null
  }),
  methods: {
    openDialog: function(projectData) {
      this.dialogData = projectData;
      const dialogEl = document.getElementById("projectDialog");
      dialogEl.showModal();
      dialogEl.focus();
    },
    closeDialog: () => document.getElementById("projectDialog").close()
  },
  computed: {
    ...mapState("portfolio", ["projects"])
  },
  mounted() {
    this.$store.dispatch("portfolio/getAllProjects");
  }
};
</script>

<style lang="scss" scoped>
#myProjects {
  background-color: $primary;
  color: $white;
  padding: 3em;
  height: auto;
  .project__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2em;
      font-family: "Jomolhari", serif;
    }
    .project__navigator {
      border: 2px solid rgba($secondary, 0.1);
      button {
        display: none; // NO NEED
        background-color: $white;
        border: none;
        background: none;
        height: 100%;
        color: $white;
        letter-spacing: 1px;
        font-size: inherit;
        transition: all 0.3s;
        outline: none;
        cursor: pointer;
        padding: 0.2em 1em;
        &:hover {
          background-color: $secondary;
        }
        &:focus {
          outline: none;
        }
      }
    }
  } //   END of header

  .projects {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    overflow: auto;
    height: 75vh;
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
}
</style>
