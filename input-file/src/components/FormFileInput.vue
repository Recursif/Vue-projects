
<template>
    <div class="container">
        <Message/>

        <div class="container mt-4 text-center">

             <form class="form-box mx-auto mt-4 mb-4" @submit.prevent="upload({ attachment })">
                <h2 class="form-text m-3">Upload</h2>

                <h5 class="form-legend-input">Votre pièce jointe</h5>

                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>


                <button class="form-btn btn white-leto mx-auto mb-4" type="submit">Upload</button>
            </form>
                
        </div>
    </div>
</template>

<script>



export default {
    name: 'FormFileInput',
    data() {
        return {
            attachement: "",
        }
    },
    components: {

    },
    methods: {
        addCharge () {
            $("#btnSubmit").attr("disabled", true)
            
            this.$store.dispatch("addCharge", {
                attachement: this;attachement
            }).then((response) => {
                if (response) {
                    this.$router.push("/success/charge/create")
                } else {
                    $("#btnSubmit").attr("disabled", false)
                }
            })
        }
    },
    mounted() {
        console.log(constant)
    }
}

</script>

<style scoped>

</style>
