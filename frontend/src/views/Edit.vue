<template>
    <div class="outer">
        <div class="inner">
            <div class="notice">
                Title : <input type="text" name="title" required v-model="notice.title" placeholder="제목">
                <br>
                <br>
                Content
                <br>
                <textarea name="content" required v-model="notice.content" placeholder="내용"></textarea>
                <br>
                <button  @click="editNotice" class="mybtn">수정</button>
            </div>
        </div>
    </div>
</template>
<script>
    // import temp from '../../../backend/data/notice.json'

    export default {

        data(){
            return{

                notice:{
                    title: "",
                    content: ""
                },

            }
        },
        methods:{
            async editNotice() {
                const res = await this.$store.dispatch('updateNotice', { id: this.$route.params.id, data: this.notice })
                if(res.success === false) alert(res.message)
                else this.$router.push("/notice")
            }

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchNotice', {id : this.$route.params.id })
            if(res.success === false) alert(res.message)
            else this.notice = res.result
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