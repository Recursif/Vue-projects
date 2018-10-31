

<template>
    <div class="container">
        <Message/>

        <div class="container mt-4 text-center">

             <form class="form-box mx-auto mt-4 mb-4" @submit.prevent="upload({ email })">
                <h2 class="form-text m-3">Upload</h2>

                <h5 class="form-legend-input">Email</h5>
                <input class="form-input mx-auto" type="text" v-model="email">

                <h5 class="form-legend-input">Votre pièce jointe</h5>

                <input class="mx-auto" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>


                <button class="form-btn btn white-leto mx-auto mb-4" type="submit">Upload</button>
            </form>
                
        </div>
    </div>
</template>

<script>

// https://serversideup.net/uploading-files-vuejs-axios/


import axios from 'axios'


export default {
    name: 'FormInputFile',
    data() {
        return {
            email: "",
            attachement: "",
        }
    },
    components: {

    },
    methods: {
        handleFileUpload() {
            this.attachement = this.$refs.file.files[0];
        },
        upload () {
            $("#btnSubmit").attr("disabled", true)
            
            let formData = new FormData()

            console.log(this.attachement)
            console.log(this.email)

            // Add the form data we need to submit
            formData.append('file', this.attachement);

            for (var p of formData) {
                console.log(p);
            }
            // Make the request to the POST /single-file URL
            axios({
                url: '/upload',
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*',
                },
                data: formData
            }).then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        }
    }
}

</script>

<style scoped>

</style>
