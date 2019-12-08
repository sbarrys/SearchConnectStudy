<template>
    <div class="outer">
        <div class="inner">
            <div class="notice">
                Title : <input type="text" name="title" required v-model="lecture.title" placeholder="제목">
                <br>
                <br>
                Content
                <br>
                <textarea name="content" required v-model="lecture.content" placeholder="내용"></textarea>
                <br>
                <button  @click="editLecture" class="mybtn">수정</button>
            </div>
        </div>
    </div>
</template>
<script>
    // file 추가필요
    // import temp from '../../../backend/data/notice.json'

    export default {

        data(){
            return{

                lecture:{
                    title: "",
                    content: ""
                },

            }
        },
        methods:{
            async editLecture() {
                const res = await this.$store.dispatch('updateLecture', { id: this.$route.params.id, data: this.lecture })
                if(res.success === false) alert(res.message)
                else this.$router.push(`/study/${this.$route.params.id}/lecturenote`)
            }

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchLecture', {id : this.$route.params.id, idd:this.$route.params.temp })
            if(res.success === false) alert(res.message)
            else this.lecture = res.result
        }

    }

</script>
<style>
    .outer{
        display: table;
        width: 100%;
        height: 100%;
    }
    .inner{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .notice{
        width: 60%;
        height: 100px;
        margin: auto;
        text-align: center;

    }
    .mybtn{
        border-radius:10px;
        background-color: #ecd7d2 !important;
        box-shadow: 3px 3px 3px 1px #e5ccb8;
    }

</style>
