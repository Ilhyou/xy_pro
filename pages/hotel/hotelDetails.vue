<template>
  <div class="hotel">
    <div class="hotel-main">
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
          <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 酒店标题 -->
      <div class="hotel-title">
        <h4>
          {{hotetitle.name}}
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h4>
        <p>{{hotetitle.alias}}</p>
        <div class="hotel_address">
          <i class="iconfont iconlocation"></i>
          {{hotetitle.address}}
        </div>
      </div>
      <!-- 酒店图片 -->
      <HotelImg />
      <!-- table栏 -->
      <HotelTable :data='products' />
      <!-- 酒店地图 -->
      <HotelMap :data="hotetitle" />
      <!-- 酒店评论 -->
      <h4>10条真实用户评论</h4>

      <div class="comment_info">
        <div class="comment_count">
          <div class="item">总评数:{{hotetitle.all_remarks}}</div>
          <div class="item">好评数:{{hotetitle.good_remarks}}</div>
          <div class="item">差评数:{{hotetitle.bad_remarks}}</div>
        </div>
        <div class="comment_nav">
          <div class="start_box">
            <div class="start-box">
              <div
                class="start el-rate__icon el-icon-star-on"
                :class="{active:hotetitle.stars>=1}"
              >
                <div
                  class="start-new el-rate__icon el-icon-star-on"
                  v-if="hotetitle.stars>=0.5"
                ></div>
              </div>
            </div>
            <div class="start-box">
              <div
                class="start el-rate__icon el-icon-star-on"
                :class="{active:hotetitle.stars>=2}"
              >
                <div
                  class="start-new el-rate__icon el-icon-star-on"
                  v-if="hotetitle.stars>=1.5"
                ></div>
              </div>
            </div>
            <div class="start-box">
              <div
                class="start el-rate__icon el-icon-star-on"
                :class="{active:hotetitle.stars>=3}"
              >
                <div
                  class="start-new el-rate__icon el-icon-star-on"
                  v-if="hotetitle.stars>=2.5"
                ></div>
              </div>
            </div>
            <div class="start-box">
              <div
                class="start el-rate__icon el-icon-star-on"
                :class="{active:hotetitle.stars>=4}"
              >
                <div
                  class="start-new el-rate__icon el-icon-star-on"
                  v-if="hotetitle.stars>=3.5"
                ></div>
              </div>
            </div>
            <div class="start-box">
              <div
                class="start el-rate__icon el-icon-star-on"
                :class="{active:hotetitle.stars>=5}"
              >
                <div
                  class="start-new el-rate__icon el-icon-star-on"
                  v-if="hotetitle.stars>=4.5"
                ></div>
              </div>
            </div>
            <div class="circle">推荐</div>
          </div>
          <div class="count">{{hotetitle.stars}}分</div>
          <div class="nav">
            <div class="item">
              <el-progress
                type="circle"
                v-show="hotetitle.scores.environment"
                :percentage="hotetitle.scores.environment*10"
                status="warning"
                :width="80"
                :stroke-width="2"
                :text-inside="true"
              ></el-progress>
              <div class="item_title">
                <span class="title_main">环境</span>
                <span
                  class="title_number"
                  v-if="hotetitle.scores.environment"
                >{{hotetitle.scores.environment}}</span>
              </div>
            </div>

            <div class="item">
              <el-progress
                type="circle"
                v-show="hotetitle.scores.product"
                :percentage="hotetitle.scores.product*10"
                status="warning"
                :width="80"
                :stroke-width="2"
                :text-inside="true"
              ></el-progress>
              <div class="item_title">
                <span class="title_main">产品</span>
                <span
                  class="title_number"
                  v-if="hotetitle.scores.product"
                >{{hotetitle.scores.product}}</span>
              </div>
            </div>
            <div class="item">
              <el-progress
                type="circle"
                v-show="hotetitle.scores.service"
                :percentage="hotetitle.scores.service*10"
                status="warning"
                :width="80"
                :stroke-width="2"
                :text-inside="true"
              ></el-progress>
              <div class="item_title">
                <span class="title_main">服务</span>
                <span
                  class="title_number"
                  v-if="hotetitle.scores.service"
                >{{hotetitle.scores.service}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HotelComment
      :comment="item"
      v-for="(item,index) in commentsArr"
      :key="index"
    />
  </div>

  </div>
</template>


<script>
import HotelImg from "@/components/hotel/hotelImg.vue";
import HotelTable from "@/components/hotel/hotelTable.vue";
import HotelMap from "@/components/hotel/hotelMap.vue";
import HotelComment from "@/components/hotel/hotelComment.vue";
export default {
  components: {
    HotelImg,
    HotelTable,
    HotelMap,
    HotelComment
  },
  data() {
    return {
      hotetitle: {
        scores: {
          product: 0,
          service: 0,
          environment: 0
        }
      },
      products: [],
      commentsArr: [],
    };
  },
  mounted() {
    this.$axios({
      url: `/hotels?id=${this.$route.query.id}`
    }).then(res => {
      console.log(res.data.data[0]);
      this.hotetitle = res.data.data[0]
      this.products = res.data.data[0].products
      // this.hotelLocation.location = res.data.data[0].location
      // this.hotelLocation.city = res.data.data[0].real_city
    });
    this.$axios({
      url: "/hotels/comments"
    }).then(res => {
      this.commentsArr = res.data.data;
    });
  }
};
</script>


<style lang="less" scoped>
h4 {
  margin-bottom: 20px;
}
.comment_info {
  display: flex;
  padding-bottom: 30px;
  margin-bottom: 10px;
  .comment_count {
    margin-right: 100px;
  }
  .comment_nav {
    display: flex;
    height: 60px;
    line-height: 60px;
    .start_box {
      margin-right: 20px;
      position: relative;
      .start-box {
        position: relative;
        display: inline-block;
        .start {
          color: rgb(239, 242, 247);
          .start-new {
            position: absolute;
            left: 0px;
            top: 0px;
            display: inline-block;
            overflow: hidden;
            width: 50%;
            color: rgb(247, 186, 42);
          }
        }
        .active {
          color: rgb(247, 186, 42) !important;
        }
      }
      .circle {
        border: 1px solid red;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        text-align: center;
        line-height: 70px;
        position: absolute;
        top: 0px;
        left: 28px;
        font-size: 20px;
        color: #f90;
        opacity: 0.25;
        transform: rotate(-45deg);
      }
    }
    .count {
      margin-right: 100px;
      color: #f90;
    }
    .nav {
      display: flex;
      .item {
        position: relative;
        margin-right: 74px;
        color: #f90;
        margin: 0px 20px;
        width: 120px;
        height: 120px;
        .item_title {
          position: absolute;
          left: 25px;
          top: 20px;
          line-height: 20px;
          .title_main {
            width: 40px;
          }
          .title_number {
            padding-left: 8px;
          }
          span {
            display: block;
          }
        }
      }
    }
  }
}
.hotel {
  min-width: 1000px;
}
.hotel-main {
  width: 1000px;
  margin: 0 auto;
  .breadcrumb {
    margin: 20px 0px;
  }
  .hotel-title {
    h4 {
      font-size: 28px;
      font-weight: normal;
      i {
        color: orange;
      }
    }
  }
}
</style>
