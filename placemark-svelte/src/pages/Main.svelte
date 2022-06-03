<script>
  import earth from "/src/assets/earth.jpg";
  //import Menu from "../components/Menu.svelte";
  import WeatherWidget from "../components/WeatherWidget.svelte";
  import WelcomeMenu from "../components/WelcomeMenu.svelte";
  import Analytics from "../components/Analytics.svelte";
  import {getContext} from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();

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
    <br>
  </div>
</div>

<!-- <div class="columns is-mobile is-centered">
  <WeatherWidget/>
  <br>
</div> -->

<div class="columns is-mobile is-centered">
  <Analytics/>

</div>
