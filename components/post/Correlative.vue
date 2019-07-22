<template>
  <el-row class="aside">
    <h4 class="aside-title">
      相关攻略
    </h4>
    <el-row class="recommend-list">
      <nuxt-link to="*" class="recommend-item">
        <el-row type="flex" class="post-imgText">
          <el-row type="flex" class="post-img" style="align-items: center;">
            <img data-v-741ea8d8="" src="http://157.122.54.189:9095/uploads/10c5c60bcb4648e5aaeb09c9db60248c.gif">
          </el-row>
          <div class="post-text">
            <div>test</div>
            <p>2019-07-21 2:12 阅读 32</p>
          </div>
        </el-row>
      </nuxt-link>
    </el-row>
  </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.aside{
      width: 280px;

      .aside-title{
        font-weight: 400;
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
      }
      .recommend-list{
         .recommend-item{
               display: block;
               padding: 20px 0;
               border-bottom: 1px solid #ddd;

               .post-img{
                    width: 100px;
                    height: 80px;
                    flex-shrink: 0;
                    background: #ddd;
                    overflow: hidden;
                    margin-right: 10px;

                    img{
                         width: 100%;
                         height: 100%;
                         object-fit: cover;
                    }
               }
               .post-text{
                    flex: 1;
                    position: relative;

                    >div{
                         line-height: 1.4em;
                         height: 2.8em;
                         overflow: hidden;
                         position: absolute;
                         left: 0;
                         top: 0;
                         width: 100%;
                    }
                    >p{
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          font-size: 12px;
                          color: #999;
                    }
               }
            }
      }
    }
</style>
