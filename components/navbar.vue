<template>
  <header>
    <nav>
      <h1>Portfolio</h1>
      <div class="nav__links">
        <nuxt-link to="#aboutMe" class="nav__link">About</nuxt-link>
        <a href="https://medium.com/@midiaby" class="nav__link" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
        <nuxt-link to="#myProjects" class="nav__link">Projects</nuxt-link>
        <nuxt-link to="#contachtMe" class="nav__link">Contact Me</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: rgba($primary, 0.13);
  @include respond-below("tablet") {
    font-size: 16px;
  }
  @include respond-below("mobile") {
    font-size: 11px;
  }
}
nav {
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0, 0em 0 1em #00000060, 0 0, 0 0;
  p {
    font-weight: bold;
  }
  .#{&}__links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    align-items: center;
    > a.nav__link {
      padding: 0.5em 0.6em;
      color: $white;
      text-decoration: none;
      &:hover {
        color: $secondary;
      }
      &:last-child {
        border: 2px solid rgba($secondary, 0.5);
        transition: background-color 0.3s ease-in-out,
          box-shadow 0.3s ease-in-out;
        text-align-last: center;
        &:hover {
          background-color: $secondary;
          box-shadow: 0 0 1rem $secondary, 0 0 2rem $secondary;
          color: $white;
        }
      }
    }
  }
}
</style>
