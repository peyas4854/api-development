import axios from "axios";
export default {

    data() {
        return {
            isActive: false,
            inputField: 'input',
            preLoader: false,
            message: '',
            selectedItemId: '',
        }
    },
    computed: {
        setMessage() {
            return this.message;
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
        axiosPost(url, postData, onSuccess, onError) {
            this.preLoader = true;
            axios.post(url, postData)
                .then(function (response) {
                    if (onSuccess) onSuccess(response);
                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                })
        },
        postDataMethod(route, fields) {
            //console.log("df");
            let instance = this;
            instance.axiosPost(route, fields,
                function (response) {
                    instance.preLoader = false;
                    console.log("paici response ", response.data);
                    instance.postDataSuccess(response);

                },
                function (error) {
                    instance.preLoader = false;

                    console.log("paici 2", error.response.data);
                    instance.postDataError(error.response.data)

                }
            )
        },
        modalCloseAction(modalID) {
            console.log('modalCloseAction', modalID)
            let instance = this;
           // instance.isActive = false;
            $(modalID).on("hidden.bs.modal", function () {
                instance.isActive = false;
                console.log("modal  close");
            });
        },
        addEdit(id) {
           
            this.selectedItemId = id;
            this.isActive = true;
        }



    }

}
