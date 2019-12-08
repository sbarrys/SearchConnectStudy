<template>
  <div>
    <section class="row">
      <div class="col-sm popular-course pad-horizontal">
        <h3 class="title">
          <strong>당신을 위한</strong>스터디
        </h3>
        <section class="pad-vertical container">
          <!-- 코스 리스트 -->
          <div class="row justify-content-center">
            <div class="course-card polaroid col-sm-10 col-md-8 col-lg-6">
              <a class="content" href="#">
                <div class="cover">
                  <i class="far fa-comments"></i>
                  <img
                    alt="course image"
                    src="https://source.unsplash.com/random"
                    class="img-fluid"
                  />
                </div>
                <div class="info">
                  <h5 class="name">공지사항</h5>
                  <p class="description"></p>
                </div>
                <b-table striped hover :items="items"></b-table>
              </a>
            </div>

            <div class="course-card col-sm-6 col-md-4 col-lg-3">
              <a class="content">
                <div class="cover">
                  <span class="badge">특별할인</span>

                  <img
                    class="top loaded"
                    data-src="/ko/public/course/english_correction_trend/cover"
                    alt="course image"
                    loading="lazy"
                    src="/ko/public/course/english_correction_trend/cover"
                    data-was-processed="true"
                  />
                </div>
                <div class="info">
                  <h4 class="name">첨삭으로 배우는 실전영어 - 자기계발 &amp; 트렌드 편</h4>
                  <p class="description">4년간 1만 명 이상을 첨삭 지도한 텔라의 CEO와 원어민 튜터가 함께 진행하는 스터디입니다.</p>
                </div>
                <div class="price">
                  <span class="discount-price">13만5000원</span>

                  <span class="tag-price">16만5000원</span>

                  <span class="deposit-amount">5만원</span>
                </div>
                <hr />
                <div class="schedule">
                  <span class="duration">4주</span>

                  <time data-timestamp="1577977200" class="start-date">01월 03일</time>
                </div>
              </a>
            </div>
          </div>

          <!-- end -->
        </section>
      </div>
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
      ]
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