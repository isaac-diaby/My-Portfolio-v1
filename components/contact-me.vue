<template>
  <section id="contachtMe">
    <p>Social Media</p>
    <!-- <h1>How to contact me</h1> -->
    <div class="contactMe__social">
      <!-- FIXME: icons dont work -->
      
      <a
        href="https://calendly.com/midiaby"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <h2>Calendly</h2>
          <p>Book a call session with me</p>
        </div>
        <font-awesome-icon :icon="['fa', 'calendar']" class="fa-5x"/>
      </a>
      
      
      <a href="https://github.com/isaac-diaby" target="_blank" rel="noopener noreferrer">
        <div>
          <h2>GitHub</h2>
          <p>Check out my code base</p>
        </div>
        <font-awesome-icon :icon="['fab', 'github-square']" class="fa-5x"/>
      </a>
      <a
        href="https://www.linkedin.com/in/isaac-m-diaby-2a1b20174/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <h2>Linkedin</h2>
          <p>Professional Social Media</p>
        </div>
        <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-5x"/>
      </a>
      <a href="https://www.instagram.com/isaac_diaby/" target="_blank" rel="noopener noreferrer">
        <div>
          <h2>Instagram</h2>
          <p>Best way to get to know</p>
        </div>
        <font-awesome-icon :icon="['fab', 'instagram-square']" class="fa-5x"/>
      </a>
      
      <a href="https://twitter.com/IsaacDiaby4Real" target="_blank" rel="noopener noreferrer">
        <div>
          <h2>Twitter</h2>
          <p>Update on what im doing</p>
        </div>
        <font-awesome-icon :icon="['fab', 'twitter-square']" class="fa-5x"/>
      </a>
      <a href="https://www.youtube.com/channel/UCdXDvL_csGUnBGf1chA5ynA" target="_blank" rel="noopener noreferrer">
        <div>
          <h2>Youtube</h2>
          <p>Sharing my Knowledge</p>
        </div>
        <font-awesome-icon :icon="['fab', 'youtube']" class="fa-5x"/>
      </a>
      <a
        href="mailto:me@isaacdiaby.tech?subject=Sent%20from%20your%20website%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <h2>Email</h2>
          <p style="text-transform: none;">me@isaacdiaby.tech</p>
        </div>
        <font-awesome-icon :icon="['fas', 'envelope']" class="fa-5x"/>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contachtMe {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.2);
  @include respond-below("desktop") {
    height: auto;
  }
  p {
    color: $secondary;
    text-transform: capitalize;
  }
  > p {
    font-size: 1.5em;
    font-weight: bold;
    /* position: relative; */
  }
  /* > h1 {
    font-weight: bold;
    font-family: "Jomolhari", serif;
    font-size: 8em;
    text-transform: capitalize;
    margin-bottom: 0;
    color: #fafafa0a;
    z-index: -1;
    position: relative;
    top: 0;
    text-align: center;
  } */
  .contactMe__social {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      color: $white;
      margin: 1.5em 1em;
      padding: 0 1em;
      border: 1px solid $secondary;
      transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      display: flex;
      flex-flow: row;
      text-align: start;
      align-items: center;
      align-items: center;
      justify-content: space-between;
      flex-basis: 400px;
      h2 {
        font-family: "Jomolhari", serif;
        font-size: 1.5em;
        letter-spacing: 0.4rem;
      }
      &:hover {
        box-shadow: 0 14px 28px
          rgba($secondary, 0.35), 0 10px 10px rgba($secondary, 0.32);
      }

      svg {
        color: rgba($primary-l, 0.9);
      }
    }
  }
}
</style>
