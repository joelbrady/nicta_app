function getAustraliaOutline () {
  //Set up Australia region
  var regionAustraliaCoords = [
    new google.maps.LatLng(-10.746969,142.119141),
    new google.maps.LatLng(-10.660608,142.734375),
    new google.maps.LatLng(-14.264383,143.964844),
    new google.maps.LatLng(-14.944785,145.371094),
    new google.maps.LatLng(-18.979026,146.425781),
    new google.maps.LatLng(-20.303418,148.886719),
    new google.maps.LatLng(-22.105999,149.589844),
    new google.maps.LatLng(-22.350076,150.556641),
    new google.maps.LatLng(-25.720735,153.193359),
    new google.maps.LatLng(-27.877928,153.720703),
    new google.maps.LatLng(-28.72913,153.720703),
    new google.maps.LatLng(-30.562261,153.017578),
    new google.maps.LatLng(-30.98,153.106), // Back to Australia
    new google.maps.LatLng(-32.472695,152.490234), 
    new google.maps.LatLng(-33.504759,151.347656),
    new google.maps.LatLng(-37.509726,149.941406),
    new google.maps.LatLng(-37.996163,147.568359),
    new google.maps.LatLng(-38.61687,147.304688),
    new google.maps.LatLng(-39.061849,146.293945),
    new google.maps.LatLng(-38.513788,145.239258),
    new google.maps.LatLng(-38.376115,144.360352),
    new google.maps.LatLng(-38.85682,143.569336),
    new google.maps.LatLng(-38.307181,141.767578),
    new google.maps.LatLng(-38.479395,141.547852),
    new google.maps.LatLng(-38.030786,140.449219),
    new google.maps.LatLng(-37.335224,139.702148),
    new google.maps.LatLng(-35.639441,138.911133),
    new google.maps.LatLng(-35.88905,138.076172),
    new google.maps.LatLng(-36.173357,137.416992),
    new google.maps.LatLng(-36.031332,136.362305),
    new google.maps.LatLng(-34.957995,135.483398),
    new google.maps.LatLng(-32.361403,133.637695),
    new google.maps.LatLng(-32.138409,132.1875),
    new google.maps.LatLng(-31.54109,131.132813),
    new google.maps.LatLng(-31.728167,129.067383),
    new google.maps.LatLng(-32.361403,127.22168),
    new google.maps.LatLng(-32.287133,126.035156),
    new google.maps.LatLng(-33.027088,124.365234),
    new google.maps.LatLng(-33.906896,123.75),
    new google.maps.LatLng(-34.016242,120.102539),
    new google.maps.LatLng(-34.161818,119.663086),
    new google.maps.LatLng(-34.415973,119.53125),
    new google.maps.LatLng(-35.137879,117.993164),
    new google.maps.LatLng(-35.029996,116.499023),
    new google.maps.LatLng(-34.343436,115.048828),
    new google.maps.LatLng(-33.504759,114.916992),
    new google.maps.LatLng(-33.541395,115.400391),
    new google.maps.LatLng(-33.137551,115.620117),
    new google.maps.LatLng(-31.578535,115.400391),
    new google.maps.LatLng(-30.713504,114.916992),
    new google.maps.LatLng(-29.267233,114.873047),
    new google.maps.LatLng(-27.955591,113.994141),
    new google.maps.LatLng(-27.410786,113.994141),
    new google.maps.LatLng(-26.273714,113.15918),
    new google.maps.LatLng(-24.44715,113.334961),
    new google.maps.LatLng(-22.512557,113.554688),
    new google.maps.LatLng(-21.739091,113.994141),
    new google.maps.LatLng(-21.493964,115.356445),
    new google.maps.LatLng(-20.550509,116.542969),
    new google.maps.LatLng(-19.849394,119.047852),
    new google.maps.LatLng(-19.932041,119.663086),
    new google.maps.LatLng(-19.352611,121.289063),
    new google.maps.LatLng(-18.479609,121.640625),
    new google.maps.LatLng(-16.930705,122.255859),
    new google.maps.LatLng(-16.088042,123.574219),
    new google.maps.LatLng(-16.214675,124.189453),
    new google.maps.LatLng(-15.199386,124.233398),
    new google.maps.LatLng(-14.43468,125.068359),
    new google.maps.LatLng(-13.624633,126.958008),

    new google.maps.LatLng(-13.923404,127.485352),
    new google.maps.LatLng(-14.817371,129.067383),
    new google.maps.LatLng(-11.135287,130.341797),
    new google.maps.LatLng(-11.135287,131.352539),
    new google.maps.LatLng(-10.919618,132.539063),
    new google.maps.LatLng(-11.695273,133.374023),
    new google.maps.LatLng(-12.039321,135.307617),
    new google.maps.LatLng(-11.523088,135.966797),
    new google.maps.LatLng(-12.254128,137.109375),
    new google.maps.LatLng(-14.774883,135.439453),
    new google.maps.LatLng(-16.88866,139.042969),
    new google.maps.LatLng(-17.308688,139.21875),
    new google.maps.LatLng(-17.644022,140.053711),
    new google.maps.LatLng(-17.392579,140.668945),
    new google.maps.LatLng(-16.425548,141.196289),
    new google.maps.LatLng(-15.072124,141.503906),
    new google.maps.LatLng(-13.496473,141.328125),
    new google.maps.LatLng(-12.254128,141.503906),
    new google.maps.LatLng(-11.695273,141.899414)
  ];
  return regionAustraliaCoords;
}

function getNSWOutline() {
  var regionCoords = [
    new google.maps.LatLng(-29.036961,141.104965),
    new google.maps.LatLng(-28.22697,153.519516),
    new google.maps.LatLng(-37.370157,149.894028),
    new google.maps.LatLng(-34.034453,141.039047)
  ];
  return regionCoords;
}

function getWAOutline() {
  var regionCoords = [
    new google.maps.LatLng(-14.944785,128.84079),
    new google.maps.LatLng(-22.105999,113.987274),
    new google.maps.LatLng(-34.415973,115.393524),
    new google.maps.LatLng(-31.765537,128.92868)
  ];
  return regionCoords;
}

function getQLOutline() {
  var regionCoords = [
    new google.maps.LatLng(-16.509833,138.006591),
    new google.maps.LatLng(-25.99755,138.006591),
    new google.maps.LatLng(-25.99755,140.906982),
    new google.maps.LatLng(-28.979312,140.994873),
    new google.maps.LatLng(-28.825425,153.431396),
    new google.maps.LatLng(-23.019076,150.838623),
    new google.maps.LatLng(-18.771115,146.246337),
    new google.maps.LatLng(-10.725381,142.401123)
  ];
  return regionCoords;
}


function getNTOutline() {
  var regionCoords = [
    new google.maps.LatLng(-14.944785,129.016112),
    new google.maps.LatLng(-26.076521,129.060058),
    new google.maps.LatLng(-25.878994,137.980956),
    new google.maps.LatLng(-16.636192,137.937011),
    new google.maps.LatLng(-11.307708,132.839355)
    
  ];
  return regionCoords;
}
