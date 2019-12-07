
<template>
    <div class ="outer">
        <div class="inner">
            <br>
            <br>
            <br>
            <table class="notice">
                <tr>
                    <td>Writer</td>&nbsp;&nbsp;&nbsp;
                    <td>Title</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>Deadline</td>
                </tr>

                <tr v-for ="value in assignment"  @click="detail(value)" style="border: 1px solid #e5ccc8 !important" >
                    <td >{{value.writer}}</td>&nbsp;&nbsp;&nbsp;
                    <td >{{value.title}}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td >{{value.deadline}}</td>
                </tr>
                <br>
                <br>
            </table>
            <button class="mybtn2" @click="prevPage">
                Previous
            </button>&nbsp;&nbsp;&nbsp;
            <button class="mybtn2" @click="nextPage">
                Next
            </button>
            <br>
            <br>
            <br>
            <button type="submit" class = "mybtn" @click="write()"> 과제 생성 </button>
        </div>
    </div>
</template>
<script>
    export default {
        data:function (){
            return {
                pageNumber:0,
                size :10,
                id: ''
            }
        },
        computed:{
            assignment(){
                const start = this.pageNumber * this.size,
                    end = start + this.size
                var temp =this.$store.state.assignment
                return temp.slice(start,end)
            },

        },
        methods:{
            write(){
                this.$router.push({
                    name: 'Create',

                })
            },
            detail(value, index){

                this.$router.push({
                    name :'Detail',
                    params:{
                        id:this.id,
                        temp:value._id,
                        nowIndex:index
                    }
                })

            },
            nextPage(){
                this.pageNumber++;
            },
            prevPage(){
                this.pageNumber--;
            }
        },

        async beforeCreate() {
            await this.$store.dispatch('fetchAssignments')
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped>
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
        width: 100px;
        height: 30px;
    }
    .mybtn2{
        border-radius: 10px;
        background:rgba(230, 230, 230, 0.517);
        box-shadow: 3px 3px 3px 1px gray;
    }

</style>
