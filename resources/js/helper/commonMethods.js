import axios from "axios";
export default {

    data() {
        return {
            isActive: false,
            inputField: 'input',
            preLoader: false,


        }
    },
    mounted() {
        //console.log('mounted', this.isActive);
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    },
    created() {
        //console.log('mounted form created')
    },
    methods: {

        axiosGet(url, onSuccess, onError) {
            //let instance = this;
            axios.get(url)
                .then(function (response) {
                    if (onSuccess) onSuccess(response);

                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                })
        },


    }

}
