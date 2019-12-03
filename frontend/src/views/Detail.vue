<template>
<div class="outer">
    <div class="inner">
    <div class="notice">
        <div>{{notice.writer}}</div>
        <hr />
        <div>{{notice.title}}</div>
        <hr />
        <div>{{notice.content}}</div>
        <hr />
        <button @click="editNotice" class="mybtn">수정</button>
        <button @click="deleteNotice" class="mybtn">삭제</button>
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
    .notice{
        width: 60%;
        height: 100px;
        margin: auto;
        text-align: center;

    }
    .mybtn{
        border-radius:10px;
        background-color: #ecd7d2 !important;
    }

</style>