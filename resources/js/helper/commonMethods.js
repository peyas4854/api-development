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
                    console.log("paici success ", response.data);
                    instance.postDataSuccess(response);

                },
                function (error) {
                    instance.preLoader = false;

                    console.log("post error", error.response.data);
                    instance.postDataError(error.response.data)

                }
            )
        },
        axoisUpdate(url, id, fields, onSuccess, onError) {
            let instance = this;
            axios.patch(url, id, fields)
                .then(function (response) {
                    if (onSuccess) onSuccess(response);
                    //console.log('update response', response)
                    instance.postDataSuccess(response);

                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                    // console.log('update error', response)
                    instance.postDataError(error.response.data)
                })

        },
        modalCloseAction(modalID) {
            let instance = this;
            $(modalID).on("hidden.bs.modal", function () {
                instance.isActive = false;
                console.log("modal  close");
            });
        },
        addEdit(id) {

            this.selectedItemId = id;
            this.isActive = true;
        },
        setPreloader(val) {
            let instance = this;
            instance.preLoader = val;
        }



    }

}
