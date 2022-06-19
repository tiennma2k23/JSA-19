function Dong_ho() {
  var gio = document.getElementById("gio");
  var phut = document.getElementById("phut");
  var giay = document.getElementById("giay");
  var hours = String(new Date().getHours());
  var minutes = String(new Date().getMinutes());
  var sec = String(new Date().getSeconds());
  if (sec.length == 1) sec = "0" + sec;
  if (minutes.length == 1) minutes = "0" + minutes;
  if (hours.length == 1) hours = "0" + hours;
  gio.innerHTML = hours;
  phut.innerHTML = minutes;
  giay.innerHTML = sec;
}
var Dem_gio = setInterval(Dong_ho, 1000);
document.getElementById("dongho").addEventListener("mouseover", indiv);
function indiv() {
  document.getElementById("dongho").style.background = "green";
}
document.getElementById("dongho").addEventListener("mouseout", outdiv);
function outdiv() {
  document.getElementById("dongho").style.background = "blue";
}
