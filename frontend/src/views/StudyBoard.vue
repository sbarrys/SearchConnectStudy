<template>
    <div class="container-fluid text-center" >
        <b-table-simple hover class="table small table-hover">
            <b-thead>
                <b-tr>
                    <b-th>Writer</b-th>
                    <b-th>Title</b-th>
                    <b-th>Date</b-th>
                </b-tr>
            </b-thead>

            <b-tbody>
                <b-tr v-for="(value,index )in notices" :key="value.id" @click="detail(value,index)">
                    <b-td>{{value.writer}}</b-td>
                    <b-td>{{value.title}}</b-td>
                    <b-td>{{value.date}}</b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <p><button class="btn mybtn2" @click="prevPage">Previous</button>
            <button class="btn mybtn2" @click="nextPage">Next</button></p>

        <button type="submit" class="mybtn btn" @click="write()">Study 생성</button>
    </div>
</template>
<script>
    export default {
        data:function (){
            return {
                pageNumber:0,
                size :10,
                id:""
            }
        },
        computed:{
            notices(){
                const start = this.pageNumber * this.size,
                    end = start + this.size
                var temp =this.$store.state.studyBoards
                return temp.slice(start,end)
            },

        },
        methods:{
            write(){
                this.$router.push({
                    name: 'Create'
                })
            },
            detail(value,index){

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
            await this.$store.dispatch('fetchStudyBoards') //
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped>
    .mybtn {
        border-radius: 10px;
        background-color: #ecd7d2 !important;
    }
    .mybtn2 {
        border-radius: 10px;
        background: rgba(230, 230, 230, 0.517);
    }

    table > td {
        word-break: break-all;
    }
    table {
        text-align: center;
    }
</style>