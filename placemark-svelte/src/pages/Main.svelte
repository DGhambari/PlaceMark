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

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin="" />

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
