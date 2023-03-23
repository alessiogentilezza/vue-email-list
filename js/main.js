const { createApp } = Vue

createApp({
    data() {
        return {
            arrayMail: [],
        }

    },

    methods: {


    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.arrayMail.push(response.data.response);
                }
                );
        }
        console.log(this.arrayMail);

    }

}).mount('#app')


