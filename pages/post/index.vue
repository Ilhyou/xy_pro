<template>
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
</style>
