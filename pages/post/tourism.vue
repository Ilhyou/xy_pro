<template>
  <div class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 左部详情页 -->
      <div class="main">
        <TravelDetails />
      </div>
      <div class="aside">
        <Correlative/>
      </div>
    </el-row>
  </div>
</template>

<script>
import Correlative from '@/components/post/Correlative.vue'
import TravelDetails from '@/components/post/travelDetails.vue'
export default {
  components: {
    TravelDetails,
    Correlative
  }

}
</script>

<style scoped lang="less">
    .contianer{
        width: 1000px;
        margin: 0 auto;
        padding-top: 20px;

       .aside{
            width: 280px;
       }
    }

</style>
