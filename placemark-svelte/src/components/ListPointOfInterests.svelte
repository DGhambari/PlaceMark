<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();

  const donationService = getContext("DonationService");

  let amount = 0;

  let candidateList = [];
  let selectedCandidate = "";

  let paymentMethods = ["Paypal", "Cash"];
  let selectedMethod = "";

  let lat = 52.160858;
  let lng = -7.152420;

  let message = "Please donate";

  onMount(async () => {
    candidateList = await donationService.getCandidates()
  });

  async function donate() {
    if (selectedCandidate && amount && selectedMethod) {
      const candidateNames = selectedCandidate.split(',')
      const candidate = candidateList.find(candidate => candidate.lastName == candidateNames[0] && candidate.firstName == candidateNames[1]);
      const donation = {
        amount: amount,
        method: selectedMethod,
        candidate: candidate._id,
        lat: lat,
        lng: lng
      };
      const success = await donationService.donate(donation);
      if (!success) {
        message = "Donation not completed - some error occurred";
        return;
      }
      message = `Thanks! You donated ${amount} to ${candidate.firstName} ${candidate.lastName}`;
      dispatch("message", {
        donation: donation,
      });
    } else {
      message = "Please select amount, method and candidate";
    }
  }
</script>

<form on:submit|preventDefault={donate}>
  <div class="field">
    <label class="label" for="amount">Enter Amount</label> <input bind:value={amount} class="input" id="amount"
                                                                  name="amount" placeholder="Euros" type="number">
  </div>
  <div class="field">
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
  </div>
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Donate</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

