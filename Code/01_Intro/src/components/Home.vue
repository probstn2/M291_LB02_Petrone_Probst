<template>
<div id="home">
  <div id="nika"><h1>Nika</h1>
    <p>
      Nika steht für filigrane Schmuckstücke in farblich dezenter Optik.
      Zu jedem Schmuckstück lässt sich das passende Gegenstück finden.
      So bietet nika die Möglichkeit Verbindungen auf symbolische Art und
      Weise sichtbar zu machen. Die verwendeten Edelsteine sind ein Zufallsprodukt
      der Natur und machen jedes Stück zu einem energiereichen Unikat. Lass dich
      inspirieren und finde wunderbare Schmuckstücke für dich und deine Liebsten.
    </p>
  </div>
  <h1>Angebot</h1>
  <h2>Ringe</h2>
  <div v-for="subject in $store.getters.ringe">
      <div>
        <img :src="subject.img" alt="picture" style="width:20%">
        <p v-show="true" v-text="subject.title">Loading...</p>
      </div>
  </div>
  <h2>Ketten</h2>
  <div v-for="subject in $store.getters.ketten">
    <div>
      <img :src="subject.img" alt="picture" style="width:20%">
      <p v-show="true" v-text="subject.title">Loading...</p>
      <p v-show="true" v-text="subject.size">Loading...</p>
    </div>
  </div>

  <div id="overlay" @click="overlayOff()">
    <div>
      <table id="material">
        <tr>
          <td>Gold</td><td>Schmuckstücke aus vergoldetem 925 Sterlingsilber</td>
        </tr>
        <tr>
          <td>Silber</td><td>Schmuckstücke aus Silber</td>
        </tr>
        <tr>
          <td>Rosegold</td><td>Schmuckstücke aus 75% Feingold, 20,5% Kupfer und 4,5% Silber.</td>
        </tr>
      </table>
    </div>
  </div>
  <a style="margin-top:20px;">Hier mehr Informationen zu den verwendeten Materalien</a>
  <div id="button" @click="overlayOn()"><a>Materialliste</a></div>

</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    overlayOn(n) {
      document.getElementById("overlay").style.display = "block";
      this.index = n;
    },
    overlayOff() {
      document.getElementById("overlay").style.display = "none";
    },
  },
}


</script>

<style scoped>
table {
  border-collapse: collapse;
  width:20%;
  margin: 20px;
}
td {
  border: 2px solid white;
  text-align: left;
  padding: 8px;
}
</style>