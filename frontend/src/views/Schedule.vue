<template>

    <input type="file" name="url" placeholder="Schedule Img" required v-model="newImage.path">
    <button type="submit" class="mybtn btn" @click="postSchedule">Upload</button>

    <div class="schedule" v-for="(value,index) in image" :key="value.id">

        <img v-bind:src="value.data" class="img" @click="detail(value, index)">

    </div>

</template>

<script>

    export default{

        data(){
            return{
               newImage:{
                   writer:"",
                   path:""
               },
                id:""
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
                this.newImage.path ="" //칸 비우기
            },
            detail(value,index){
                this.$router.push({
                    name :'ScheduleDetail',
                    params:{
                        id:this.id, //스터디 아이디
                        temp:value._id, //선택된 보드 _id
                        nowIndex:index //선택된 보드 인덱스
                    }
                })

            },
        },
        async beforeCreate() {
            await this.$store.dispatch('fetchStudySchedule',{id:this.$route.params.id}) //
            this.id =this.$route.params.id //스터디 아이디
        }
    }

</script>
<style>
    .mybtn {
        border: 2px solid #e5ccc8;
        border-radius: 10px;
        background-color: #ecd7d2 !important;
    }
    .schedule{


    }

</style>