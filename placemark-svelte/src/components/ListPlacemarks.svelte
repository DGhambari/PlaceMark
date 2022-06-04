<!-- {{#each placemarks}}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {{title}}
    </h2>
    <a href="/placemark/{{_id}}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <a href="/dashboard/deleteplacemark/{{_id}}" class="button">
      <i class="fas fa-trash"></i>
    </a>
  </div>
{{/each}} -->

<script>
  import {getContext, onMount} from 'svelte'

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];

  onMount(async () => {
    placemarkList = await placemarkService.getPlacemarks();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Category</th>
    <th>Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
  </thead>
  <tbody>
    {#each placemarkList as placemark}
      <tr>
        <td>
          {placemark.category}
        </td>
        <td>
          {placemark.place}
        </td>
        <td>
          {placemark.lat},
        </td>
        <td>
          {placemark.lng},
        </td>
      </tr>
    {/each}
  </tbody>
</table>