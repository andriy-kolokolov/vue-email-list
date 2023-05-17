const APP = Vue.createApp({
    data() {
        return {
            arrMails: []
        }
    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(serverResponse => this.arrMails.push(serverResponse.data.response));
        }
    }
});

APP.mount('#app')