<template>
    <form method="post" @submit.stop.prevent="postNotice">
        <h2 class="text-center mt-3">글쓰기</h2>
        <div class="container">
            <table class="table mt-3 table-striped">
                <tr>
                    <th>Writer :</th>
                    <td>
                        <input
                                class="form-control"
                                type="text"
                                name="writer"
                                required
                                v-model="notice.writer"
                                placeholder="글쓴이"
                        />
                    </td>
                </tr>
                <tr>
                    <th>Title :</th>
                    <td>
                        <input
                                class="form-control"
                                type="text"
                                name="title"
                                required
                                v-model="notice.title"
                                placeholder="제목"
                        />
                    </td>
                </tr>
                <tr>
                    <th>Content</th>
                    <td>
            <textarea
                    class="form-control"
                    name="content"
                    required
                    v-model="notice.content"
                    placeholder="내용"
            ></textarea>
                    </td>
                </tr>
            </table>
            <button type="submit" class="mybtn btn bg-custom4">작성</button>
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
                const res = await this.$store.dispatch('appendStudyBoard', {id:this.$route.params.id,data:this.notice})
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