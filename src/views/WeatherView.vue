<script>
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export default {
  data() {
    return {
      buscando: false,
      search: "",
      localizacoes: [],
      resultados: [],
      atual_clima: [],
      nova_hora: [],
      nova_previsão: [],
      novo_dia: [],
      location_info: [],
    };
  },

  methods: {
    async buscarDados() {
      console.log(this.buscando);
      for (const local of this.localizacoes) {
        await this.atualizarDados(local.id);
      }
    },

    async buscar() {
      this.$forceUpdate();
      this.resultados = [];
      this.localizacoes = [];
      if (this.search.trim() !== "") {
        this.localizacoes = await forecaApi.LocationSearch(this.search);
        await this.buscarDados();
      }
    },

    async atualizarDados(local) {
      const location_info = await forecaApi.LocationInfo(local);
      const dados_clima = await forecaApi.CurrentWeather(local);
      const atual_clima = dados_clima.current;
      this.resultados.push({ location_info, atual_clima });
    },

    getImgUrl(symbol) {
      return `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
    },
  },
};

</script>

<template>
  <article>
    <p class="inputs">
      <span> </span>
      <input @keyup.enter="buscar" type="text" v-model="search" placeholder="Buscar clima de cidades" />
      <button class="button-19" @click="buscar">Buscar</button>
    </p>

    <div v-if="localizacoes.length > 0">
      <h2>Cidades encontradas:</h2>
      <p v-for="local of localizacoes" :key="local.id" @click="atualizarDados(local.id)"></p>
    </div>
    <div v-else>
      <h2>Nenhuma busca realizada!</h2>
    </div>
  </article>
  <main class="p">
    <h1>
      Pesquise o nome da cidade que deseja procurar e aguarde por resultados...
    </h1>
    <div class="box">
      <div class="content">
        <div class="card" v-for="(item, i) of resultados" :key="i">
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
                <li>País:</li>
                <li>Hora:</li>

                <li>Umidade:</li>
                <li>Velocidade do Vento:</li>
                <li>Pressão:</li>
                <li>Probabilidade de trovões:</li>
              </div>
              <div class="card-info2">
                <li>{{ item.location_info.country }}</li>
                <li>{{ item.atual_clima.time }}</li>

                <li>{{ item.atual_clima.relHumidity }}%</li>
                <li>{{ item.atual_clima.windSpeed }} m/s</li>
                <li>{{ item.atual_clima.pressure }} Pa</li>
                <li>{{ item.atual_clima.thunderProb }} %</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div>
    </div>
  </main>
</template>

<style>

</style>
