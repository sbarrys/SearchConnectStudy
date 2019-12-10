<template>
  <div>
    <div class="col-sm popular-course pad-horizontal">
      <section class="row justify-content-center">
        <!-- 코스 리스트 -->

        <div
          class="course-card polaroid col-12 col-sm-10 col-md-6 col-lg-3 my-3"
          v-for="(value,index) in notices"
          :key="value.id"
          @click="detail(value)"
        >
          <a class="content" href="#">
            <div class="cover">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">{{value.studyType}}</span>
              <img v-bind:src="'/images/photo_'+index%4+'.jpg'" class="img-fluid" />
            </div>
            <div class="info">
              <h5 class="name">{{value.title}}</h5>
              <p class="description pre-wrap">{{value.content}}</p>
            </div>
            <div class="price">
              <span class="tag-price">{{value.studyName}}</span>

              <span class="deposit-amount"></span>
            </div>
            <hr />
            <div class="schedule">
              <span class="duration">by {{value.writer.name}}</span>

              <time data-timestamp="1575817200" class="start-date">{{value.date}}</time>
            </div>
          </a>
        </div>
        <!-- end -->
      </section>
      <a
      v-if="this.page < this.limit"
        href="#"
        @click="next"
        class="text-center mt-4 p-3 mb-5 bg-white text-dark rounded d-block hov container"
      >More...</a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: function() {
    return { page: 0 };
  },
  computed: {
    limit(){
      return this.$store.state.notices.length
    },
    notices() {
      var temp = this.$store.state.notices;
      for (var tmp of temp) {
        tmp.date = moment(String(tmp.date)).format("YYYY-MM-DD");
      }
      console.log(this.page)
            console.log(this.limit)

      return temp.slice(0, this.page + 4);
    }
  },
  methods: {
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          id: index._id
        }
      });
    },
    next() {
      if (this.page < this.limit) this.page += 4;
    }
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchNotices");
  }
};
</script>
<style scoped>
.hov {
  transition: all 0.1s ease-in;
  box-shadow: 0 17px 30px 0 rgba(0, 0, 0, 0.4);
  text-decoration: none !important;
}
.hov:hover {
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
}
.course-card > .content {
  -ms-flex-direction: column;
  flex-direction: column;
  box-shadow: 0 17px 30px 0 rgba(0, 0, 0, 0.4);
  background: #fff;
  text-decoration: none;
  color: #444;
  border-radius: 4px;
  transition: all 0.1s ease-in;
  top: 0;
  display: flex;
  /* -ms-flex: 1 1 auto; */
  /* flex: 1 1 auto; */
  height: 100%;
  min-width: 140px;
  margin-right: 15px;
  margin-left: 15px;
}
.content:hover {
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
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

.course-card .badge {
  background-color: #ff5c75;
  color: #fff;
  padding: 4px 10px;
  text-align: center;
  display: inline-block;
  position: absolute;
  border: 1px solid #fff;
  border-radius: 4px 0 0 0;
  font-size: 11px;
}

.pre-wrap {
  white-space: pre-wrap;
}
</style>