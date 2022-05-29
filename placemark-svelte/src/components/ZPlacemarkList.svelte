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
    <th>Amount</th>
    <th>Method</th>
    <th>Candidate</th>
    <th>Donor</th>
  </thead>
  <tbody>
    {#each placemarkList as placemark}
      <tr>
        <td>
          {placemark.amount}
        </td>
        <td>
          {placemark.method}
        </td>
        <td>
          {placemark.candidate.lastName}, {placemark.candidate.firstName}
        </td>
        <td>
          {placemark.donor.lastName},  {placemark.donor.firstName}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
