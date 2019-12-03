
<template>
       <div class ="outer">
              <div class="inner">
                     <table class="notice">
                            <tr>
                                   <td>Type</td>
                                   <td>Member</td>
                                   <td>Writer</td>&nbsp;&nbsp;&nbsp;
                                   <td>Title</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                   <td>Date</td>
                            </tr>

                            <tr v-for ="value in notices"  @click="detail(value)" >
                                   <td>{{value.studyType}}</td>
                                   <td>{{value.maxMember}}</td>
                                   <td >{{value.writer}}</td>&nbsp;&nbsp;&nbsp;
                                   <td >{{value.title}}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                   <td >{{value.create_date}}</td>
                            </tr>
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
                     <button type="submit" class = "mybtn" @click="write()"> Study 생성 </button>
              </div>
       </div>
</template>
<script>
       export default {
              data:function (){
                     return {
                            pageNumber:0,
                            size :5,
                     }
              },
              computed:{
                     notices(){
                            const start = this.pageNumber * this.size,
                                    end = start + this.size
                            var temp =this.$store.state.notices
                            return temp.slice(start,end)
                     },

              },
              methods:{
                     write(){
                            this.$router.push({
                                   name: 'Create',

                            })
                     },
                     detail(index){

                            this.$router.push({
                                   name :'Detail',
                                   params:{
                                          id:index._id
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
                     await this.$store.dispatch('fetchNotices')
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
       }
       .mybtn2{
              border-radius: 10px;
              background:rgba(230, 230, 230, 0.517);
       }

</style>