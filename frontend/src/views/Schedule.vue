<template>
    <div>



    </div>

</template>

<script>

    export default{

        data(){
            return{
               newImage:{
                   writer:"",
                   path:""
               }
            }

        },
        computed:{
            image(){
                return this.$store.state.studySchedules
            }
        },
        methods:{
            async postSchedule() {
                const res = await this.$store.dispatch('appendStudySchedule', {id:this.$route.params.id,data:this.newImage})
                if(res.success === false) alert(res.message)
               // else this.$router.push(`/study/${this.$route.params.id}/schedule`)
            },
            detail(value,index){
                this.$router.push({
                    name :'StudySchedule',
                    params:{
                        id:this.id,
                        temp:value._id,
                        nowIndex:index
                    }
                })

            },
        },
        async beforeCreate() {
            await this.$store.dispatch('fetchStudySchedule',{id:this.$route.params.id}) //
            this.id =this.$route.params.id
        }
    }

</script>