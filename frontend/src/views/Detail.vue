<template>
<div class="outer">
    <div class="inner">
    <div class="notice">
<div class="notice_">
    <br>
    <br>
    <br>
    <div class="com1">
        <a>Study: {{notice.studyName}} </a><a> Type: {{notice.studyType}}</a>
        <br/>
        <a>작성자: {{notice.writer}}</a><a>제목: {{notice.title}}</a>
    </div><br/>
    <a>content</a>
        <div class="com2">{{notice.content}}</div>
</div>
        <button @click="editNotice" class="mybtn">수정</button>&nbsp;
        <button @click="deleteNotice" class="mybtn">삭제</button>&nbsp;
        <button class="mybtn">참가</button>
    </div>
    </div>
</div>
</template>
<script>
    /* eslint-disable */
    export default {
        data:function () {
            return {

                notice: {}
            };

        },
        methods:{
           editNotice(){
               var id = this.$route.params.id
               this.$router.push({
                   name:'Edit',
                   params:{
                       id: id
                   }
               })
           },
            async deleteNotice() {
                const res = await this.$store.dispatch('deleteNotice', { id: this.$route.params.id})
                if(res.success === false) alert(res.message)
                else this.$router.push("/notice")
            },

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchNotice', {id : this.$route.params.id })
            if(res.success === false) alert(res.message)
            else this.notice = res.result
        }
    };
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
    .notice_{
        width: 60%;
        height: 300px;
        margin: auto;
        text-align: center;
    }
    .notice{
        width: 60%;
        height: 400px;
        margin: auto;
        text-align: center;
    }
    .mybtn{
        border-radius:10px;
        background-color: #ecd7d2 !important;
        box-shadow: 3px 3px 3px 1px #e5ccb8;
        width: 50px;
        height: 30px;
    }
    .com1{
        width: 60%;
        height: 50px;
        margin: auto;
        text-align: center;
        border: 1px solid #e5ccc8 !important;
    }
    .com2{
        width: 60%;
        height: 180px;
        margin: auto;
        text-align: center;
        border: 1px solid #e5ccc8 !important;
        overflow-y: scroll;
    }

</style>
