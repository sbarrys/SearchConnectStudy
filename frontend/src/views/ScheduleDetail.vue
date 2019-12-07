<template>

<div>
    <hr />
    <img v-bind:src="schedule.data" class="detailImg" >
    <br>
    <hr />
    <button type="submit" class="mybtn btn" @click="deleteImage">삭제</button>

</div>
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
<style>
    .mybtn {
        border: 2px solid #e5ccc8;
        border-radius: 10px;
        background-color: #ecd7d2 !important;
    }

</style>