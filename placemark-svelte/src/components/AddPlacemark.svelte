<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";

  const dispatch = createEventDispatcher();
  const placemarkService = getContext("PlacemarkService");

  let title = "";
  let message = "Add a Placemark";

  async function addPlacemark() {
    const placemark = {
        title: title,
      };
    if (placemark.title) {   
      const success = await placemarkService.addPlacemark(placemark);
      if (!success) {
        message = "Placemark not created - some error occurred";
        return;
      }
      message = `Success!`;
      dispatch("message", {
        placemark: placemark,
      });
    } else {
      message = "Failed to Create a Placemark";
    }
  }
</script>

<form on:submit|preventDefault={addPlacemark}>
  <div class="field">
    <label class="label" for="title">Enter Title</label> <input bind:value={title} class="input" id="title"
                                                                  name="title" placeholder="Enter Title" type="text">
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link is-dark">Add Placemark</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>