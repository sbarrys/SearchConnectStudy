<template>
    <div class="outer text-center">
        <h2 class="bg-custom6 my-3 py-3">{{notice.title}}</h2>
        <div class="container">
            <table class="notice table table-borderless">
                <tr>
                    <td>작성자</td>
                    <td>{{notice.writer}}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{{notice.content}}</td>
                </tr>
            </table>
            <button v-if="chkwriter" @click="editNotice" class="mybtn btn">수정</button>
            <button v-if="chkwriter" @click="deleteNotice" class="mybtn btn">삭제</button>
        </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        data:function () {
            return {

                notice: {
                    noticeID:"",
                    nowIndex:this.$route.params.nowIndex,
                    chkwriter: false
                }
            };

        },
        methods:{
            editNotice(){
                var id = this.$route.params.id
                var temp = this.$route.params.temp
                var index = this.$route.params.nowIndex
                this.$router.push({
                    name:'StudyNoticeEdit',
                    params:{
                        id: id,
                        temp:temp,
                        nowIndex:index

                    }
                })
            },
            async deleteNotice() {
                const res = await this.$store.dispatch('deleteStudyNotice', { id:this.$route.params.id , idx:this.$route.params.temp})
                if(res.success === false) alert(res.message)
                else this.$router.push(`study/${this.$route.params.id}/notice`) //고쳐
            },

        },
        async beforeCreate() {
            const res = await this.$store.dispatch("fetchStudyNotice", {id: this.$route.params.id,idx:this.$route.params.temp});
            if (res.success === false) alert(res.message);
            else {
                this.notice = res.result;
                this.notice.noticeID = this.$route.params.temp
                if (this.notice.writer == this.$store.getters.id) this.chkwriter = true;
            }
        }
        /*
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchStudyNotice', {id :this.$route.params.id ,idx: this.$route.params.temp}) //
            if(res.success === false) alert(res.message)
            else {
                this.notice = res.result
                this.notice.noticeID = this.$route.params.temp
            }
        }
        */

    };
</script>
<style>
    .mybtn {
        border: 2px solid #e5ccc8;
        border-radius: 10px;
        background-color: #ecd7d2 !important;
    }

</style>
