<script>
  import Menu from "../components/Menu.svelte";
  import ListPlacemarks from "../components/ListPlacemarks.svelte";
  import AddPlacemark from "../components/AddPlacemark.svelte";
  import Analytics from "../components/Analytics.svelte";
  import {getContext} from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();
</script>

<Menu/>

<section class="section">
  <ListPlacemarks/>
  <AddPlacemark/>
</section>
