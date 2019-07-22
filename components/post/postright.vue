<template>
  <div class="postright">
    <!-- 搜索框 -->
    <el-row type="flex" class="search">
      <el-input placeholder="请输入想去的地方,比如:'广州'" class="el_inp"></el-input>
      <el-button type="primary" icon="el-icon-search" class="el_btn"></el-button>
    </el-row>
    <!-- 推荐 -->
    <div>
      <span class="search_recommend">
        推荐:
        <a href="JavaScript:;">广州</a>
        <a href="JavaScript:;">上海</a>
        <a href="JavaScript:;">北京</a>
      </span>
    </div>
    <!-- 推荐攻略-->
    <el-row type="flex" justify="space-between" align="middle" class="el_post_title">
      <h2 class="post_title">推荐攻略</h2>
      <el-button type="primary" icon="el-icon-edit">写游记</el-button>
    </el-row>
    <!--  -->
    <div>
      <div v-for="(item, index) in dataList" :key="index">
        <div>
          <a href>{{item.title}}</a>
          <span class="post_item">{{item.summary}}</span>
          <div>
            <el-row class="a_img" type="flex" justify="space-between">
              <a href v-for="(items, indexs) in item.images.slice(0,3)" :key="indexs">
                <img :src="items" alt />
              </a>
            </el-row>
          </div>
          <div>
            <el-row type="flex" justify="space-between">
              <el-row type="flex" justify="space-around" align="middle" class="el_row">
                <span>
                  <i class="el-icon-location-outline">{{item.cityName}}</i>
                </span>
                <div class="by_img_span">
                  <i>by</i>
                  <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                  <i>{{item.account.nickname}}</i>
                </div>
                <span>
                  <i class="el-icon-view">{{item.watch}}</i>
                </span>
              </el-row>
              <el-row>10赞</el-row>
            </el-row>
          </div>
        </div>
      </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[2, 3, 4, 5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      images: [],
      pageIndex: 1, // 当前页数
      pageSize: 2, // 当前页面的条数
      total: 0 // 总条数
    };
  },
  mounted() {
    this.$axios({
      url: "/posts"
    }).then(res => {
      // console.log(res);
      const { data } = res.data;
      this.data = data;
      this.total = res.data.total;
      console.log(this.total);
    });
  },
  methods: {
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
    },

    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
    }
  },
  computed: {
    dataList() {
      if (this.data.length > 0) {
        let postsData = this.data.slice(
          (this.pageIndex - 1) * this.pageSize,
          this.pageSize * this.pageIndex
        );
        return postsData;
      } else {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  margin: 10px 0;
  .el_inp {
    width: 600px;
  }
  .el_btn {
    width: 70px;
  }
}
.search_recommend {
  font-size: 12px;
  padding: 10px;
  a {
    padding-left: 10px;
  }
  :hover {
    color: aqua;
  }
}
.el_post_title {
  border-bottom: 1px solid #666;
  margin: 10px 0;
  .post_title {
    font-weight: 400;
    font-size: 18px;
    color: orange;
  }
}
.post_item {
  font-size: 12px;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 10px 0;
}
.a_img {
  margin-bottom: 10px;
  a {
    img {
      width: 220px;
      height: 150px;
      object-fit: cover;
    }
  }
}
.el_row {
  font-size: 12px;
  .by_img_span {
    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
