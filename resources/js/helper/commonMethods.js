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
    methods: {

        axiosGet(url, onSuccess, onError) {
            //let instance = this;
            this.setPreloader(true);
            axios.get(url)
                .then(function (response) {
                    if (onSuccess) onSuccess(response);
                    this.setPreloader(false);
                    //this.toastonSuccess(response.data.message)
                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                    this.setPreloader(false);

                })
        },
        axiosPost(url, postData, onSuccess, onError) {
            this.setPreloader(true);
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
                    instance.setPreloader(false);

                    // console.log("post success ",response.data);

                    instance.postDataSuccess(response);
                    instance.toastonSuccess(response.data.message)
                },
                function (error) {
                    instance.setPreloader(false);

                    console.log("post error", error.response.status);
                    if (error.response.status === 404) {
                        instance.toastonErrors(error.response.data.message)
                    }
                    if (error.response.status === 422) {
                        instance.toastonErrors(error.response.data.message)
                        instance.postDataError(error.response.data)
                    }

                    //instance.toastonErrors(error.response.data.message)

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
                    instance.toastonSuccess(response.data.message)
                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                    // console.log('update error', response)
                    instance.postDataError(error.response.data)
                    this.toastonErrors(response.data.message)
                })

        },
        axiosDelete(url, onSuccess, onError) {
            console.log('hello');
            let instance = this;
            instance.setPreloader(true);
            console.log('url', url);
            axios.delete(url)
                .then(function (response) {
                    if (onSuccess) onSuccess(response);
                    instance.setPreloader(false);
                    instance.$hub.$emit("reloadDataTable");
                    instance.toastonSuccess(response.data.message)
                }.bind(this))
                .catch(function (error) {
                    if (onError) onError(error);
                    instance.setPreloader(false);
                    instance.toastonErrors(response.data.message)
                })
        },
        dataDelete(id) {

            this.$hub.$emit("deleteMethod", id);
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
        },
        // toast success
        toastonSuccess(message) {
            this.$toasted.global.Success({
                message: message
            });
        },
        //toast error
        toastonErrors(message) {
            this.$toasted.global.errors({
                message: message
            });
        },
        authenticate($user) {
            console.log('user', $user);
            this.user = $user;
            // this.isLoggedIn = true;
            this.isLoggedIn = true;

        }



    }

}
