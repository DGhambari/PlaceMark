<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import About from "./pages/About.svelte"
  import Dashboard from "./pages/Dashboard.svelte"
  import Placemark from "./pages/Placemark.svelte"
  import Poi from "./pages/PointOfInterest.svelte"
  import ZLogin from "./pages/ZLogin.svelte"
  import ZSignup from "./pages/ZSignup.svelte"
  import Router from "svelte-spa-router";

  let routes = {
    "/": Main,
    "/main": Main,
    "/login": Login,
    "/signup": Signup,
    "/about": About,
    "/dashboard": Dashboard,
    "/placemark": Placemark,
    "/poi": Poi,
    "/zlogin": ZLogin,
    "/zsignup": ZSignup,
  }
</script>

<!-- <div class="container">
  <div class="tabs notification is-primary">
    <ul>
      <li><a href="/#/">Main</a></li>
      <li><a href="/#/login">Login</a></li>
      <li><a href="/#/signup">Signup</a></li>
      <li><a href="/#/about">About</a></li>
      <li><a href="/#/dashboard">Dashboard</a></li>
      <li><a href="/#/placemark">Placemark</a></li>
      <li><a href="/#/poi">Points of Interest</a></li>
      <li><a href="/#/zlogin">ZLogin</a></li>
      <li><a href="/#/zsignup">ZSignup</a></li>
    </ul>
  </div>
  <Router {routes}/>
</div> -->

<Router {routes}/>