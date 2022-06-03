<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import About from "./pages/About.svelte"
  import Dashboard from "./pages/Dashboard.svelte"
  import Placemark from "./pages/Placemark.svelte"
  import Poi from "./pages/PointOfInterest.svelte"
  import Success from "./pages/Success.svelte"
  import Router from "svelte-spa-router";
  import { PlacemarkService } from "./services/PlacemarkService";
  import { setContext } from "svelte";

  let routes = {
    "/": Main,
    "/main": Main,
    "/login": Login,
    "/signup": Signup,
    "/about": About,
    "/dashboard": Dashboard,
    "/placemark": Placemark,
    "/success": Success,
    "/poi": Poi,
  }

setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));

</script>

<Router {routes}/>

