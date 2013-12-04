   var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();
function initialize() {
  var myLatLng = new google.maps.LatLng(62.323907, -150.109291);
  var mapOptions = {
    zoom: 11,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var swBound = new google.maps.LatLng(62.281819, -150.287132);
  var neBound = new google.maps.LatLng(62.300471, -150.005608);
  var bounds = new google.maps.LatLngBounds(swBound, neBound);

  // Photograph courtesy of the U.S. Geological Survey
  overlay = new USGSOverlay(bounds, map);
}

/** @constructor */
function USGSOverlay(bounds, map, text) {

  // Now initialize all properties.
  this.bounds_ = bounds;
  this.map_ = map;
  this.text_ = text;

  // We define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay
  this.setMap(map);
}

USGSOverlay.prototype.onAdd = function() {

  // Note: an overlay's receipt of onAdd() indicates that
  // the map's panes are now available for attaching
  // the overlay to the map via the DOM.

  // Create the DIV and set some basic attributes.
  var div = document.createElement('div');
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '0';
  div.style.borderColor = '#FFF';
  div.style.color = '#000000';
  div.style.position = 'absolute';

  // Create an IMG element and attach it to the DIV.
  div.innerHTML= this.text_;

  // Set the overlay's div_ property to this DIV
  this.div_ = div;

  // We add an overlay to a map via one of the map's panes.
  // We'll add this overlay to the overlayLayer pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
}

USGSOverlay.prototype.draw = function() {

  // Size and position the overlay. We use a southwest and northeast
  // position of the overlay to peg it to the correct position and size.
  // We need to retrieve the projection from this overlay to do this.
  var overlayProjection = this.getProjection();

  // Retrieve the southwest and northeast coordinates of this overlay
  // in latlngs and convert them to pixels coordinates.
  // We'll use these coordinates to resize the DIV.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's DIV to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
}

USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
}