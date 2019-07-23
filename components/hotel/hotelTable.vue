<template>
      <div class="table">
        <el-row type="flex" class="table_title">
            <el-col :span="10">价格来源</el-col>
            <el-col :span="10">低价房型</el-col>
            <el-col :span="4">最低价格/每晚</el-col>
        </el-row>
        <el-row type="flex" class="table_main" v-for="(item,index) in data" :key='index' @click.native="handleClick">
        <a class='herf' href="https://hotels.ctrip.com/hotel/694679.html">
          <el-col :span="10">{{item.name}}</el-col>
            <el-col :span="10">{{item.bestType}}</el-col>
            <el-col :span="4">
              <span>￥{{item.price}}</span>起
              <i>></i>
            </el-col>
        </a>
          </el-row>

        
    </div>
</template>

<script>
export default {
      data() {
        return {
    
        }
      },
      props:{
        data:{
          type : Array,
          default:[]
        } 
      },
      methods: {
        handleClick(){
            
        }
      },
      mounted() {
        // console.log(this.data);
      },
}

</script>

<style lang="less" scope>
.herf{
  display: block;
  width: 100%
}
 .table{
    .table_title{
      font-size: 14px;
      padding:20px 0px;
      color: #666;
      font-weight: 700;
      border-bottom: 1px solid #eee;
      margin-left: 10px;
}
  .table_main{
      font-size: 12px;
      padding:15px 5px;
      border-bottom: 1px solid #eee;
      margin-left: 10px;
      &:hover{
        background-color: #ebeef5;
        cursor: pointer;
      }
     span{
       color: orange;
       font-size: 14px;
       padding: 0 5px;
       
     }
     i{
       color: orange;
     }
}
}
</style>
