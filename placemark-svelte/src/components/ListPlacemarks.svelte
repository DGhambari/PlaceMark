<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";

  const dispatch = createEventDispatcher();
  const placemarkService = getContext("PlacemarkService");

  let placemarkList = [];

  onMount(async () => {
    placemarkList = await placemarkService.getPlacemarks()
  });

</script>

{#each placemarkList as placemark}
<tr>
  <td>
    {placemark.title}
  </td>
</tr>
{/each}
