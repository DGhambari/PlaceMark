<script>
  import {push} from "svelte-spa-router";
  import {getContext} from "svelte";

  let email = ""
  let password = "";
  let errorMessage = "";

  const placemarkService = getContext("PlacemarkService");

  async function login() {
    let success = await placemarkService.login(email, password)
    if (success) {
      push("/dashboard");
      console.log("login successful!")
    } else {
      email = "";
      password = "";
      errorMessage = "Invalid Credentials";
      console.log("login was not successful")
    }
  }
</script>

<div class="is-mobile is-centered">
<form on:submit|preventDefault={login}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text">
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Log In</button>
  </div>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
</form>
</div>