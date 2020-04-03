<template>
  <section>
    <Navbar/>
    <Hero/>
    <main>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
    </main>
    <footer>&copy; Copyright 2020, Moustapha Isaac Diaby</footer>
  </section>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Hero from "../components/hero.vue";
import AboutMe from "../components/about-me.vue";
import MyProjects from "../components/my-projects.vue";
import ContactMe from "../components/contact-me.vue";

export default {
  head: {},
  components: {
    Navbar,
    Hero,
    AboutMe,
    MyProjects,
    ContactMe
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat|Jomolhari&display=swap");

footer {
  width: fit-content;
  margin: 0 auto;
}
</style>
