<form class="box" action="/placemark/{{placemark._id}}/addpointOfInterest" method="POST">
  <label><b>Enter Point of Interest Details:</b></label><br></br>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label>Enter Category</label>
        <input class="input" type="text" placeholder="Enter Category" name="category">
      </div>
      <div class="field">
        <label>Enter Title</label>
        <input class="input" type="text" placeholder="Enter Title" name="title">
      </div>
      <div class="field">
        <label>Enter Latitude</label>
        <input class="input" type="text" placeholder="Enter Latitude" name="latitude">
      </div>
      <div class="field">
        <label>Enter Longitude</label>
        <input class="input" type="text" placeholder="Enter Longitude" name="longitude">
      </div>
    </div>
  </div>
  <button class="button is-primary">Add Point of Interest</button>
</form>
