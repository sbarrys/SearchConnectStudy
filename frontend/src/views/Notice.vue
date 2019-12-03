
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
                            <tr  v-for ="value in notices"  @click="detail(value)" style="border: 1px solid #e5ccc8 !important">
                                   <td>{{value.studyType}}</td>
                                   <td>{{value.maxMember}}</td>
                                   <td >{{value.writer}}</td>&nbsp;&nbsp;&nbsp;
                                   <td >{{value.title}}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                   <td >{{value.date}}</td>
                            </tr>
                            <br>
                     </table>
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
                            //notices:[]
                     }
              },
              computed:{
                     notices(){
                            return this.$store.state.notices
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
                     createStudy(){

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
              width: 100px;
              height: 30px;
       }
       .mybtn2{
              border-radius: 10px;
              background-color: #7abaff !important;
       }

</style>
