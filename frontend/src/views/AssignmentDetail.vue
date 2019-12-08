<template>
    <div class="outer text-center">
        <h2 class="bg-custom6 my-3 py-3">{{assignment.title}}</h2>
        <div class="container">
            <table class="notice table table-borderless">
                <tr>
                    <td>작성자</td>
                    <td>{{assignment.writer}}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{{assignment.content}}</td>
                </tr>
            </table>
            <button v-if="chkwriter" @click="submitAssignment" class="mybtn btn">제출</button>
            <button v-if="chkwriter" @click="deleteAssignment" class="mybtn btn">삭제</button>
        </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        data: function() {
            return {
                assignment: {},
                chkwriter: false
            };
        },
        methods: {
            submitAssignment() {
                var id = this.$route.params.id;
                this.$router.push({
                    name: "AssignmentSubmit",
                    params: {
                        id: id,
                        temp:this.$route.params.temp,
                        nowIndex:this.$route.params.nowIndex
                    }
                });
            },
            async deleteAssignment() {
                const res = await this.$store.dispatch("deleteAssignment", {
                    id: this.$route.params.id,
                    idd:this.$route.params.temp
                });
                if (res.success === false) alert(res.message);
                else this.$router.push(`/study/${this.route.params.id}/assignment`);
            }
        },
        async beforeCreate() {
            const res = await this.$store.dispatch("fetchAssignment", {
                id: this.$route.params.id,
                idd: this.$route.params.temp
            });
            if (res.success === false) alert(res.message);
            else {
                this.lecture = res.result;
            }
        }
    };
</script>
<style>
    .mybtn {
        border: 2px solid #e5ccc8;
        border-radius: 10px;
        background-color: #ecd7d2 !important;
    }
</style>
