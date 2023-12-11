new Vue({
    el: '#app',
    data: {
        temperature: 30
    },
    computed: {
        temperatureClass() {
            if (this.temperature < 10) {
                return 'cold';
            } else if (this.temperature >= 10 && this.temperature <= 25) {
                return 'moderate';
            } else {
                return 'hot';
            }
        }
    }
});
