<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();
  const placemarkService = getContext("PlacemarkService");

  let title = "";

  let placemarkList = [];
  let selectedCandidate = "";

  let paymentMethods = ["Paypal", "Cash"];
  let selectedMethod = "";

  let lat = 52.160858;
  let lng = -7.152420;

  let message = "Please donate";

  onMount(async () => {
    candidateList = await placemarkService.getCandidates()
  });

  async function addPointOfInterest() {
    if (selectedCandidate && amount && selectedMethod) {
      const candidateNames = selectedCandidate.split(',')
      const candidate = candidateList.find(candidate => candidate.lastName == candidateNames[0] && candidate.firstName == candidateNames[1]);
      const placemark = {
        amount: amount,
        method: selectedMethod,
        candidate: candidate._id,
        lat: lat,
        lng: lng
      };
      const success = await placemarkService.donate(placemark);
      if (!success) {
        message = "Placemark not completed - some error occurred";
        return;
      }
      message = `Thanks! You donated ${amount} to ${candidate.firstName} ${candidate.lastName}`;
      dispatch("message", {
        placemark: placemark,
      });
    } else {
      message = "Please select amount, method and candidate";
    }
  }
</script>







<form on:submit|preventDefault={donate}>
  <div class="field">
    <label class="label" for="amount">Enter Category</label> <input bind:value={category} class="input" id="category"
                                                                  name="category" placeholder="Enter Category" type="text">
  </div>
  <div class="field">
    <label class="label" for="amount">Enter Category</label> <input bind:value={category} class="input" id="category"
                                                                  name="category" placeholder="Enter Category" type="text">
  </div>


  <!-- <div class="field">
    <div class="control">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="radio" type="radio" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedCandidate}>
        {#each candidateList as candidate}
          <option>{candidate.lastName},{candidate.firstName}</option>
        {/each}
      </select>
    </div>
  </div> -->
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Add Placemark</button>
    </div>
  </div>
  <div class="section">
  </div>
</form>