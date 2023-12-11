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

<style>
  article {
    text-align: center;
    margin: 20px;
  }

  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  h2 {
    color: #333;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .climah1 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .climaul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .card-header {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
  }

  .temperatura {
    font-size: 18px;
    font-weight: bold;
  }

  .sensacao-termica {
    font-size: 16px;
  }

  .card-info-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .card-info1,
  .card-info2 {
    flex: 1;
  }

  .card-info1 li,
  .card-info2 li {
    margin-bottom: 5px;
  }

  .p {
    text-align: center;
  }

  .p h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
</style>
