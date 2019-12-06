<template>
    <form method="post" @submit.stop.prevent="postNotice">
        <div class ="outer">
            <div class="inner">
                <br>
                <br>
                <div class ="notice" >

                    <br>
                    <br>
                    Writer :  <input type="text" name="writer" required v-model="notice.writer" placeholder="글쓴이">
                    <br>
                    <br>
                    Title : <input type="text" name="title" required v-model="notice.title" placeholder="제목">
                    <br>
                    <br>
                    Content
                    <br>
                    <textarea name="content" required v-model="notice.content" placeholder="내용"></textarea>
                    <br>
                    <button type ="submit" class="mybtn">작성</button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>

    export default {

        data(){
            return{
                notice:{
                    writer: "",
                    title: "",
                    content: "",
                    date:this.$moment(new Date()).format('YYYYMMDD')
                },

            }
        },
        methods:{
            async postNotice() {
                //고치기
                const res = await this.$store.dispatch('appendStudyBoard', this.notice)
                if(res.success === false) alert(res.message)
                else this.$router.push(`/study/${this.$route.params.id}/board`)
            }
        },


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