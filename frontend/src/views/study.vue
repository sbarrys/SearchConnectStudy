<template>
  <div>
    <h3 class="title ml-4">
      <strong>스터디 제목</strong>
    </h3>
    <section class="container-fluid">
      <!-- 코스 리스트 -->
      <div class="row justify-content-center">
        <div class="course-card polaroid col-sm-12 col-md-6 my-2">
          <router-link :to="link+'/notice'" class="content">
            <div class="info">
              <h5 class="name">공지사항</h5>
              <p class="description"></p>
            </div>
            <b-table striped hover :items="items"></b-table>
          </router-link>
        </div>
        <div class="course-card polaroid col-sm-12 col-md-6 my-2">
          <router-link :to="link+'/board'" class="content" href="#">
            <div class="info">
              <h5 class="name">게시판</h5>
              <p class="description"></p>
            </div>
            <b-table striped hover :items="items"></b-table>
          </router-link>
        </div>
        <div class="course-card polaroid col-12">
          <router-link :to="link+'/schedule'" class="content" href="#">
            <div class="info">
              <h5 class="name">시간표</h5>
              <p class="description"></p>
            </div>
            <b-table striped hover :items="items"></b-table>
          </router-link>
        </div>
      </div>
      <!-- end -->
    </section>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  name: "test",
  components: {
    Login
  },
  data: function() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ],
      link:'/study/'+this.$route.params.id
    };
  }
};
</script>
<style scoped>
.course-card > .content {
  -ms-flex-direction: column;
  flex-direction: column;
  box-shadow: 0 17px 30px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  text-decoration: none;
  color: #444;
  border-radius: 4px;
  transition: all 0.1s ease-in;
  top: 0;
  display: flex;
  height: 100%;
  min-width: 140px;
  margin-right: 15px;
  margin-left: 15px;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.content:hover {
  box-shadow: 0px 0px 1px 1px #444;
}
.course-card .info {
  /* -ms-flex: 1 1 auto; */
  flex: 1 1 auto;
  padding: 20px 20px 0;
}

.course-card .info .name {
  font-size: 18px;
  color: #455dff;
  font-weight: 500;
  padding-bottom: 15px;
}

.course-card .info * {
  margin: 0;
  padding-bottom: 5px;
  font-size: 13px;
  font-weight: 300;
  line-height: 120%;
}
p {
  display: block;
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  margin: 0 0 5px;
  white-space: normal;
  font-weight: 300;
}
.course-card .price {
  padding: 10px 20px 20px;
  color: #777;
  font-size: 13px;
  line-height: 17px;
  font-weight: 500;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
.course-card .price .discount-price + .tag-price {
  width: 100%;
  font-size: 10px;
  text-decoration: line-through;
}
.course-card .price .tag-price {
  -ms-flex-order: -1;
  order: -1;
}
.course-card .price .discount-price {
  color: #ff5c75;
}
.course-card .price > * {
  font-size: 13px;
  padding-right: 5px;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.course-card .schedule {
  padding: 14px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 11px;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  overflow-x: hidden;
}
hr {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  overflow: visible;
}

hr {
  line-height: 1.25em;
  margin: 0.5rem;
  height: 0.0625rem;
  background: linear-gradient(
    90deg,
    transparent,
    #aaa 20%,
    #aaa 80%,
    transparent
  );
}
</style>