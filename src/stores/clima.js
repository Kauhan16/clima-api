// import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import ForecaAPI from "@/api/weatherapi.js";
const forecaApi = new ForecaAPI();

export const useClimaStore = defineStore("clima", () => {
  const localizacoes_info = useStorage("localizacoes_info", []);
  const localizacoes_id = [
    103474574, 103395981, 103396016, 103663517, 103450554, 103399415, 103469058,
    103444924, 103462377, 103388368, 103465038, 103467747, 103470127, 103405870,
    103397277, 103464975, 103390760, 103386496, 103451190, 103394023, 103452925,
    103662762, 103664980, 103463237, 103448439, 103471872, 103474574,
  ];

  async function saveInfos() {
    for (const local of localizacoes_id) {
      const location_info = await forecaApi.LocationInfo(local);
      const dados_clima = await forecaApi.CurrentWeather(local);
      const atual_clima = dados_clima.current;
      localizacoes_info.value.push({ location_info, atual_clima });
    }
  }

  function deleteInfos() {
    localizacoes_info.value = [];
  }

  return {
    localizacoes_info,
    saveInfos,
    deleteInfos,
  };
});
