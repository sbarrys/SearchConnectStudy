<template>
    <form method="post" @submit.stop.prevent="postLecture">
        <h2 class="text-center mt-3">공지사항 생성</h2>
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
                                v-model="lecture.writer"
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
                                v-model="lecture.title"
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
                    v-model="lecture.content"
                    placeholder="내용"
            ></textarea>
                    </td>
                </tr>
                <tr>
                    <th>File</th>
                    <td>
                        <input
                                class="form-control"
                                type="file"
                                name="userfile"
                                v-model="lecture.file"
                        />
                    </td>
                </tr>
            <button>업로드</button>
            </table>
            <button type="submit" class="mybtn btn bg-custom4">작성</button>
        </div>
    </form>
</template>
<script>
    // import temp from '../../../backend/data/notice'
    export default {
        data() {
            return {
                lecture: {
                    writer: "",
                    title: "",
                    content: "",
                    file: '',
                    date:this.$moment(new Date()).format('YYYYMMDD')
                },
                selected: ""
            };
        },
        methods: {
            async postLecture() {
                const res = await this.$store.dispatch("appendLecture", this.lecture);
                if (res.success === false) alert(res.message);
                else this.$router.push(`/study/${id}/lecturenote`);
            }
        }
    };
</script>
<style scoped>
    .outer {
        display: table;
        width: 100%;
        height: 100%;
    }
    .inner {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .notice {
        width: 60%;
        /* height: 100px; */
        margin: auto;
        text-align: center;
    }
</style>
