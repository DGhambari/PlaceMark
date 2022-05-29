<script>
  import earth from "/src/assets/earth.jpg";
  import Menu from "../components/Menu.svelte";
  import WelcomeMenu from "../components/WelcomeMenu.svelte";
</script>

<div class="columns is-mobile is-centered">
  <div class="column">
    <WelcomeMenu/>

  </div>
</div>

<br>
<div class="columns is-mobile is-centered">
  <div class="rows is-centered has-text-centered">
    <h1 class="title">Welcome to PlaceMark</h1>
    <p>Log in or Sign up</p>
    <br>
    <img width="1080" src="{earth}" alt="earth">
  </div>
</div>

