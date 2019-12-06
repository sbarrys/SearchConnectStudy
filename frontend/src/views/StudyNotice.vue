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
                id:"",  //스터디 초기화면에서 넘어오는 스터디 id
            }
        },
        computed:{
            notices(){
                const start = this.pageNumber * this.size,
                    end = start + this.size
                var temp =this.$store.state.studyNotices
                temp = temp.sort((a,b)=>{return b._id - a._id}) //정렬 ..?
                return temp.slice(start,end)
            },

        },
        methods:{
            write(){
                this.$router.push({
                    name: 'StudyNoticeCreate',

                })
            },
            detail(value,index){
                this.$router.push({
                    name :'StudyNoticeDetail',
                    params:{
                        temp:value._id,
                        id:this.id, //스터디 아이디
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
            await this.$store.dispatch('fetchStudyNotices',{id:this.$route.params.id}) //
            this.id =this.$route.params.id
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

