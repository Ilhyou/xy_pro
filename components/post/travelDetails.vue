<template>
  <el-row class="main">
    <!-- 顶部链接 -->
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '*' }">
        <span class="top_link">旅游攻略</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 标题 -->
    <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
    <!-- 传值1 -->
    <div class="post-info">
      <span>攻略：2019-05-22 10:57</span>
      <span>阅读：2789</span>
    </div>
    <!-- 详情介绍 -->
    <div class="post-content">
      <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</p>
      <p>
        <span style="background-color: rgb(252, 242, 220);">
          <img src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"></span>
        <span style="color: rgb(153, 153, 153);">图：塞班岛。 by第5季旅游</span>
      </p>
      <h2>一、怎样用6000块玩转塞班？</h2>
      <p>大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。</p>
      <h3>
        1.怎样订机票+酒店性价比最高？
      </h3>
      <p>
        机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了
        <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png">
      </p>
      <p>
        <span style="background-color: rgb(252, 242, 220);">
          <img src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" style="margin: 10px 0;"></span>
      </p>
      <p>怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。</p>
      <p>在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。</p>
      <p>怎样在机票酒店上获得最高性价比的体验？&nbsp;直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
    </div>
    <!-- 图标 -->
    <div class="post-ctrl">
      <el-row justify="center " type="flex">
        <div class="ctrl-item">
          <i class="el-icon-edit-outline" />
          <p>评论(100)</p>
        </div>
        <div class="ctrl-item">
          <i class="el-icon-star-off" />
          <p>收藏</p>
        </div>
        <div class="ctrl-item">
          <i class="el-icon-share" />
          <p>分享</p>
        </div>
        <div class="ctrl-item">
          <i class="el-icon-thumb" />
          <p>点赞</p>
        </div>
      </el-row>
    </div>
    <!-- 评论 -->
    <div class="cmt-wrapper">
      <el-row type="flex" class="cmt-title">
        <h4>评论</h4>
      </el-row>
      <!-- 评论框 -->
      <el-form class="cmt-input">
        <el-form-item label="活动形式">
          <textarea autocomplete="off" placeholder="说点什么吧..." class="el-textarea__inner" style="resize: none;min-height: 33px;" />
        </el-form-item>
      </el-form>
      <!-- 图片上传及提交 -->
      <el-row justify="space-between" type="flex">
        <div class="cmt-input-ctrls">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div>
          <el-button type="primary" class="el-button--mini">
            提交
          </el-button>
        </div>
      </el-row>
      <!-- 评论展示区 -->
      <el-row type="flex" justify="space-between" class="cmt-list">
        <div class="cmt-item">
          <div class="cmt-info">
            <img data-v-741ea8d8="" src="http://157.122.54.189:9095/assets/images/avatar.jpg">
            地球发动机
            <i>2019-07-21 3:36</i>
            <span>9999</span>
          </div>
          <div class="cmt-content">
            <div class="cmt-new">
              <p class="cmt-message">
                22 3
              </p>
              <div class="el-row el-row--flex" />
            </div>
            <div class="cmt-ctrl">
              <a href="javascript:;">回复</a>
            </div>
          </div>
        </div>
      </el-row>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 700px;

  h1{
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    }

   .post-info{
     color: #999;
     padding: 20px;
     text-align: right;

     span{
       margin-left: 20px;
     }
   }

   .post-content{
     line-height: 1.5;

     p{
       display: block;
       margin-block-start: 1em;
       margin-block-end: 1em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;

       span{
         img{
           max-width: 700px!important;
         }
       }
     }

    h2{
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h3{
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
   }
   .post-ctrl{
     padding: 50px 0 30px;

     .ctrl-item{
        margin: 0 20px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;

        i{
           display: block;
           font-size: 28px;
           color: orange;
        }
        p{
          margin-top: 5px;
          font-size: 14px;
          color: #999;
        }
     }
   }
   .cmt-wrapper{
      margin-bottom: 20px;

      .cmt-title{
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 20px;

          h4{
             display: block;
             margin-block-start: 1.33em;
             margin-block-end: 1.33em;
             margin-inline-start: 0px;
             margin-inline-end: 0px;
             font-weight: bold;
             font-weight: 500;
          }
      }
      .cmt-input-ctrls{
          box-sizing: border-box;
          margin-bottom: 30px;

        }
      }
      .cmt-list{
        border: 1px solid #ddd;

        .cmt-item{
          border-bottom: 1px dashed #ddd;
          padding: 20px 20px 5px;
          width: 100%;

          .cmt-info{
              margin-bottom: 10px;
              font-size: 12px;
              color: #666;
              vertical-align: top;

              img{
                 width: 16px;
                 height: 16px;
                 border-radius: 50%;
              }
                 i{
                    color: #999;
                 }
              span{
                  float: right;
              }
          }
          .cmt-content{
            padding: 0 0 0 30px;
            .cmt-message{
              margin-top: 10px;
             }
             p{
               display: block;
               margin-block-start: 1em;
               margin-block-end: 1em;
               margin-inline-start: 0px;
               margin-inline-end: 0px;
             }
          }
          .cmt-ctrl{
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #1e50a2;
            text-align: right;
            a{
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }
}
.breadcrumb{
  .top_link{
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
  }
}
</style>
