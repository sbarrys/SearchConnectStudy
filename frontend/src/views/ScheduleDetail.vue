<template>



</template>

<script>

    export default{
        data(){

            return{
                schedule:{}
            }
        },
        methods:{
            async deleteImage() {
                const res = await this.$store.dispatch('deleteStudySchedule', { id: this.$route.params.id,idx:this.$route.params.temp})
                if(res.success === false) alert(res.message)
                else this.$router.push(`/study/${this.$route.params.id}/schedule`)
            },

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchStudySchedule', {id : this.$route.params.id,idx:this.$route.params.temp })
            if(res.success === false) alert(res.message)
            else {
                this.schedule = res.result
            }

        }


    }

</script>