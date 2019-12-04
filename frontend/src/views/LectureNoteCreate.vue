<template>
    <form method="post" @submit.stop.prevent="postNotice">
        <div class ="outer">
            <div class="inner">
                <br>
                <br>
                <div class ="notice">
                    Study Type  <select v-model ="selected">
                    <option disabled value=""> select one </option>
                    <option>멘토 멘티</option>
                    <option>자율 스터디</option>
                </select>
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
    // import temp from '../../../backend/data/notice'
    export default {
        data(){
            return{
                notice:{
                    maxMember:"",
                    writer: "",
                    title: "",
                    content: "",
                    date:this.$moment(new Date()).format('YYYYMMDD')
                },
                selected :""
            }
        },
        methods:{
            async postNotice() {
                if(this.selected===""){
                    alert("Study Type을 선택해주세요")
                    return
                }
                if(this.notice.maxMember<=0){
                    alert("모집 인원을 설정해주세요")
                    return
                }
                const res = await this.$store.dispatch('appendNotice', this.notice)
                if(res.success === false) alert(res.message)
                else this.$router.push("/notice")
            }

        },
        watch: {
            selected:function () {
                if(this.selected ==="멘토 멘티"){
                    this.notice.studyType = this.selected
                }
                else if(this.selected==="자율 스터디"){
                    this.notice.studyType = this.selected

                }

            }

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
