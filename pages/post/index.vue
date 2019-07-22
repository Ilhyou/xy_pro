<template>
<<<<<<< HEAD
    <div style="padding:50px;">
        <el-button type="primary" size="mini" @click="$router.push({path: '/post/create'})" >写游记</el-button>
       
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            list:{
            }
        };
    },
    mounted(){
        this.$axios({
            url:'/posts',
            method: "GET",
        }).then(res=>{
            console.log(res);
            this.list= res.data
        })
    }
};
</script>

<style>
=======
  <div>
    <div class="box">
      <Postleft :data="navs" />
      <Postright />
    </div>
  </div>
</template>

<script>
import Postleft from "@/components/post/postleft";
import Postright from "@/components/post/postright";

export default {
  components: {
    Postleft,
    Postright
  },
  data() {
    return {
      navs: []
    };
  },
  mounted() {
    // 把axios绑定到原型
    // Vue.prototype.$axios = axios
    this.$axios({
      url: "/posts/cities",
      method: "GET"
    }).then(res => {
      // console.log(res);
      const { data } = res.data;
      this.navs = data;
    });
  }
};
</script>

<style lang="less" scoped>
.box {
  margin: auto;
  width: 1000px;
  display: flex;
  Postleft {
    width: 270px;
  }
  Postright {
    width: 730px;
  }
}
>>>>>>> f7c5646a50790de95e0fe319c95ff1ba720ebae0
</style>

