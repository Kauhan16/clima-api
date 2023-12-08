<script>
// import ForecaAPI from "@/api/weatherapi.js";
// const forecaApi = new ForecaAPI();
import { mapStores, mapActions, mapState } from "pinia";
import { useClimaStore } from "@/stores/clima";

export default {
  data() {
    return {
      search: "",
    };
  },

  async created() {
    if (this.localizacoes_info.length === 0) {
      this.saveInfos();
    }
    console.log(this.localizacoes_info);
  },

  computed: {
    ...mapStores(useClimaStore),
    ...mapState(useClimaStore, ["localizacoes_info"]),
  },
  methods: {
    ...mapActions(useClimaStore, ["saveInfos", "deleteInfos"]),
    getImgUrl(symbol) {
      return `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
    },
  },
};
</script>

<template>
  <main class="p">
    <h1 class="titulo">Clima das Capitais Brasileiras</h1>
    <button @click="deleteInfos()">Limpar</button>
    <div class="box">
      <div class="content">
        <div class="card" v-for="(item, i) of localizacoes_info" :key="i">
          <h1 class="climah1">
            Clima {{ item.location_info.name }} -
            {{ item.location_info.adminArea }}
          </h1>
          <ul class="climaul">
            <div class="card-header">
              <img class="icon" :src="getImgUrl(item.atual_clima.symbol)" />
              <div>
                <li class="temperatura">
                  {{ item.atual_clima.temperature }} °C
                </li>
                <li class="sensacao-termica">
                  Sensação Térmica: {{ item.atual_clima.feelsLikeTemp }} °C
                </li>
              </div>
            </div>
            <div class="card-info-container">
              <div class="card-info1">
                <li>Umidade:</li>
                <li>Velocidade do Vento:</li>
                <li>Probabilidade de trovões:</li>
              </div>
              <div class="card-info2">
                <li>{{ item.atual_clima.relHumidity }}%</li>
                <li>{{ item.atual_clima.windSpeed }} m/s</li>
                <li>{{ item.atual_clima.thunderProb }} %</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
