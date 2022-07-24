// Gọi API
//Các bước để tạo giao diện có dạng list
//B1: Tạo giao diện mẫu + copy thử xem giao diện
//B2: Chuẩn bị API( dữ liệu đã cho sẵn)
const POKEMONAPI = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONNAME = [
  "abra",
  "absol",
  "basculegion",
  "bellsprout",
  "blaziken",
  "landorus",
  "pupitar",
  "overqwil",
  "noivern",
];

const container = document.getElementById("container");

for (let i = 0; i < POKEMONNAME.length; i++) {
  const url = POKEMONAPI + POKEMONNAME[i];
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      const abilityurl = data.abilities[0].ability.url;
      const imgUrl = data.sprites.front_shiny;
      let effect;
      fetch(abilityurl)
        .then((result1) => result1.json())
        .then((ability) => {
          effect = ability.effect_entries[0].effect;
          // console.log(effect);
        });
      console.log(effect);
      const type = data.types[0].type.name;
      const type_img = "./image/" + type + ".webp";
      container.innerHTML += `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src=${imgUrl} alt="Avatar" style="width:330px;height:330px;">
        </div>
        <div class="flip-card-back" style="color:black;padding: 0px 24px;">
          <div style="display:flex;justify-content: space-between;align-items: center;">
            <h3>${POKEMONNAME[i]}</h3>
            <div style="display:flex;align-items: center;">
              <img src=${type_img} width="30px" height="30px" style="border-radius:50%">
              <span>${type}</span>
            </div>
          </div>
          <p>${effect} </p>
          <p></p>
        </div>
      </div>
    </div>`;
    })
    .catch((error) => {});
}
