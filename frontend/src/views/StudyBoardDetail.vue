<template>
    <div class="outer">
        <div class="inner">
            <div class="notice">
                <div class="notice_">
                    <br>
                    <br>
                    <br>
                    <div class="com1">
                        <br/>
                        <a>작성자: {{notice.writer}}</a><a>제목: {{notice.title}}</a>
                    </div><br/>
                    <a>content</a>
                    <div class="com2">{{notice.content}}</div>
                </div>
                <button @click="editNotice" class="mybtn">수정</button>&nbsp;
                <button @click="deleteNotice" class="mybtn">삭제</button>&nbsp;
            </div>
        </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        data:function () {
            return {

                notice: {
                    noticeID:""
                },
                comment:""
            };

        },
        computed:{
            comments(){
                return this.$store.state.boardComments //해당 board의 댓글 전체
            },

        },
        methods:{
            editNotice(){
                var id = this.$route.params.id
                this.$router.push({
                    name:'StudyBoardEdit',
                    params:{
                        id: id,
                        temp:this.$route.params.temp,
                        nowIndex:this.$route.params.nowIndex
                    }
                })
            },
            async deleteNotice() {
                const res = await this.$store.dispatch('deleteStudyBoard', { id: this.$route.params.id,idx:this.$route.params.temp})
                if(res.success === false) alert(res.message)
                else this.$router.push(`/study/${this.$route.params.id}/board`)
            },
            async deleteComment(value){ //value = 댓글 v-for 돌릴때 받는 삭제할 comment
                const res = await this.$store.dispatch('deleteBoardComment', { id: this.$route.params.id,idx:this.$route.params.temp,index:this.$route.params.nowIndex,cid:value._id})
                if(res.success === false) alert(res.message)
            },
            async postComment() {
                const res = await this.$store.dispatch('appendBoardComment', {id:this.$route.params.id,data:this.comment,idx:this.$route.params.temp,index:this.$route.params.nowIndex})
                if(res.success === false) alert(res.message)

            }

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchStudyBoard', {id : this.$route.params.id,idx:this.$route.params.temp })
            if(res.success === false) alert(res.message)
            else {
                this.notice = res.result
                this.notice.noticeID =this.$route.params.temp
            }

            await this.$store.dispatch('fetchBoardComments', {id : this.$route.params.id,idx:this.$route.params.temp,index:this.$route.params.nowIndex })

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
