let Dong_ho = () => {
  let gio = document.getElementById("gio");
  let phut = document.getElementById("phut");
  let giay = document.getElementById("giay");
  let hours = String(new Date().getHours());
  let minutes = String(new Date().getMinutes());
  let sec = String(new Date().getSeconds());
  if (sec.length == 1) sec = "0" + sec;
  if (minutes.length == 1) minutes = "0" + minutes;
  if (hours.length == 1) hours = "0" + hours;
  gio.innerHTML = hours;
  phut.innerHTML = minutes;
  giay.innerHTML = sec;
};
let Dem_gio = setInterval(Dong_ho, 1000);
let indiv = () => {
  document.getElementById("dongho").style.background = "green";
};
document.getElementById("dongho").addEventListener("mouseover", indiv);

let outdiv = () => {
  document.getElementById("dongho").style.background = "blue";
};
document.getElementById("dongho").addEventListener("mouseout", outdiv);
