<template>
  <div class="postright">
    <el-row type="flex" class="search">
      <el-input placeholder="请输入想去的地方,比如:'广州'" class="el_inp"></el-input>
      <el-button type="primary" icon="el-icon-search" class="el_btn"></el-button>
    </el-row>
    <div>
      <span class="search_recommend">
        推荐:
        <a href="JavaScript:;">广州</a>
        <a href="JavaScript:;">上海</a>
        <a href="JavaScript:;">北京</a>
      </span>
    </div>
    <el-row type="flex" justify="space-between" align="middle">
      <h2>推荐攻略</h2>
      <el-button type="primary" icon="el-icon-edit">写游记</el-button>
    </el-row>
    <div class="groom">
      <a href="JavaScript:;" v-for="(item, index) in data" :key="index">
        <div v-html="item.title"></div>
        <p>{{item.summary}}</p>
        <a href v-for="(items, index) in item.images" :key="index">
          <img :src="items" alt />
        </a>
        <el-row class="col" type="flex" justify="space-between">
          <el-col :span="22">
            <i class="el-icon-location-outline"></i>
            <span>{{item.cityName}}</span>
            <span>by</span>
            <span></span>
            <span>{{item.account.nickname}}</span>
            <i class="el-icon-view"></i>
            <span>3000</span>
          </el-col>
          <el-col :span="2">36赞</el-col>
        </el-row>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      images: []
    };
  },
  mounted() {
    this.$axios({
      url: "/posts",
      method: "GEt"
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      this.data = data;
    });
  }
};
</script>
<style lang="less" scoped>
.search {
  margin-top: 10px;
  .el_inp {
    width: 660px;
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
.groom {
  p {
    margin-top: 10px;
    font-size: 12px;
    height: 66px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  a {
    img {
      width: 220px;
      height: 150px;
      margin-bottom: 10px;
    }
  }
}
.col {
  i {
    width: 13px;
    height: 13px;
  }
}
</style>
