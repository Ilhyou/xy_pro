<template>
  <div class="hotel_map">
    <div class="map_main">
      <el-row class="map">
        <el-col
          class="map_box"
          id="container"
        ></el-col>
        <el-col class="list">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane
              label="风景"
              name="first"
            >
              <div class="tab_main">
                <div class="tab_list">
                  <ol class="list_ol">
                    <li
                      class="list_main"
                      v-for="(item,index) in scenery"
                      :key='index'
                    >
                      <span class="name">{{item.name}}</span>
                      <span class="distance">{{item.distance[index]}}公里</span>
                    </li>
                  </ol>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane
              label="交通"
              name="second"
            >
              <div class="tab_main">
                <div class="tab_list">
                  <ol class="list_ol">
                    <li
                      class="list_main"
                      v-for="(item,index) in traffic"
                      :key='index'
                    >
                      <span class="name">{{item.name}}</span>
                      <span class="distance">{{item.distance[index]}}公里</span>
                    </li>
                  </ol>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <div class="hotel_info">
      <el-row class="info_row">
        <el-col
          :span="4"
          class="info_rol_title"
        >基本信息</el-col>
        <el-col
          :span="20"
          class="info_rol_main"
        >
          <el-row
            class="rol_main_text"
            type="flex"
          >
            <el-col>入住时间: 14:00之后</el-col>
            <el-col>离店时间: 12:00之前</el-col>
            <el-col>{{data.creation_time}}: {{data.renovat_time}}</el-col>
            <el-col>酒店规模: {{data.roomCount}}间客房</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col
          :span="4"
          class="info_rol_title"
        >主要设施</el-col>
        <el-col
          :span="20"
          class="info_rol_main"
        >
          <el-row
            class="rol_main_text"
            type="flex"
          >
            <el-tag
              type="info"
              plain
            >外币兑换服务</el-tag>
            <el-tag
              type="info"
              plain
            >电梯</el-tag>
            <el-tag
              type="info"
              plain
            >洗衣服务</el-tag>
            <el-tag
              type="info"
              plain
            >热水壶</el-tag>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col
          :span="4"
          class="info_rol_title"
        >停车服务</el-col>
        <el-col
          :span="20"
          class="info_rol_main"
        >
          <el-row
            class="rol_main_text"
            type="flex"
          >
            -
          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col
          :span="4"
          class="info_rol_title"
        >品牌信息</el-col>
        <el-col
          :span="20"
          class="info_rol_main"
        >
          <el-row
            class="rol_main_text"
            type="flex"
          >
            -
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scenery: [],
      traffic: [],
      sclocation: [],
      trlocation: [],
      activeName: 'first',
      dis: '',
      current:0
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClick(value) { 
      // console.log(value.index);
      this.current = value.index
      this.init()
    },
    init() {
      console.log(this.data);
      var map = new AMap.Map("container", {
        zoom: 14, //放大级别
        center: [this.data.location.longitude, this.data.location.latitude], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
        position: new AMap.LngLat(this.data.location.longitude, this.data.location.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: this.data.city
      });

      // map.add(marker);
      console.log(this.current);
      if (this.current == 0) {
        this.$axios({
            url: 'https://restapi.amap.com/v3/place/text',
            params: {
              keywords: '',
              city: this.data.real_city,
              location: this.data.location.longitude + "," + this.data.location.latitude,
              types: '风景名胜',
              output: 'json',
              page: '1',
              offset: '10',
              key: 'ef2eef81c091c62fbf99782220053ec0'
            }
          }).then(res => {
            console.log(res);
            this.scenery = res.data.pois

            var sceneryLocation = res.data.pois.map((v, i) => {
              // console.log(v.location);
              var obj = {
                location:v.location.split(',').map(Number),
                name:v.name
              }
              // var arr = v.location.split(',').map(Number)
              // console.log(arr);
              console.log(obj);
              this.sclocation.push(obj)
              if (this.sclocation.length>10) {
                this.sclocation.length=10
              }
              var dis = AMap.GeometryUtil.distance(obj.location, [this.data.location.longitude, this.data.location.latitude]);

              return (dis / 1000).toFixed(2)
        })
        // console.log(sceneryLocation);
        this.scenery.map((v, i) => {
          return v.distance[i] = sceneryLocation[i]
        })

        console.log(this.sclocation);

        map.clearMap();

        // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
        this.sclocation.forEach((v, i) => {
          new AMap.Marker({
            map: map,
            title:v.name,
            content:  `<span class="markerpoint">${i + 1}</span>`,
            position: [v.location[0], v.location[1]],

            offset: new AMap.Pixel(-13, -30),
          })

        });  
      })
      }
      if(this.current == 1){
        // console.log(123);
        this.$axios({
          url: 'https://restapi.amap.com/v3/place/text',
          params: {
            keywords: '',
            city: this.data.real_city,
            location: this.data.location.longitude + "," + this.data.location.latitude,
            types: '交通设施服务',
            output: 'json',
            page: '1',
            offset: '10',
            key: 'ef2eef81c091c62fbf99782220053ec0'
          }
        }).then(res => {
          this.traffic = res.data.pois

          var trafficLocation = res.data.pois.map((v, i) => {

            var obj = {
                location:v.location.split(',').map(Number),
                name:v.name
              }
            this.trlocation.push(obj)
            if (this.trlocation.length>10) {
                this.trlocation.length=10
              }
            var dis = AMap.GeometryUtil.distance(obj.location, [this.data.location.longitude, this.data.location.latitude]);
            return (dis / 1000).toFixed(2)
          })
          // console.log(sceneryLocation);
          this.traffic.map((v, i) => {
            return v.distance[i] = trafficLocation[i]
          })

          map.clearMap();
        // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
        this.trlocation.forEach((v, i) => {
          new AMap.Marker({
            map: map,
            // icon: marker.icon,
            title:v.name,
            content: ` <span class="markerpoint">${i + 1}</span>`,
            position: [v.location[0], v.location[1]],
            offset: new AMap.Pixel(-13, -30)
            });
          });
        })
      }
    }
  },
  mounted() {
    // 页面加加载之后执行
    window.init = this.init

    // 地图的链接
    var key = "ef2eef81c091c62fbf99782220053ec0";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=init`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);

    this.$axios({
      url: '/hotels/options'
    }).then(res => {
      console.log(res);
    })
  }
};
</script>

<style lang="less" scoped>
/deep/ .markerpoint {
  display: inline-block;
  width: 22px;
  height: 36px;
  background: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);
  background-size: 22px 36px;
  text-align: center;
  line-height: 24px;
  color: #fff;
}
/deep/ .markText{
  position: absolute;
  top: -20px;
  left: 0px;
}
.hotel_map {
  .map_main {
    margin: 30px 0px;
    .map {
      width: 1000px;
      height: 360px;
      display: flex;
      .map_box {
        width: 650px;
        height: 100%;
      }
    }
    .list {
      flex: 1;
      margin-left: 20px;
      .tab_main {
        overflow: hidden;
        position: relative;
        .tab_list {
          height: 300px;
          overflow: auto;
          font-size: 14px;
          color: #666;
          .list_ol {
            .list_main {
              display: flex;
              margin: 0 20px 20px 10px;
              cursor: pointer;
              .name {
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
  .hotel_info {
    margin: 40px 0px;
    // border: 1px solid #000;
    .info_row {
      padding-left: 20px;
      border-bottom: 1px solid #eee;
      .info_rol_title {
        padding: 20px 0px;
        font-size: 16px;
      }
      .info_rol_main {
        padding: 20px 0px;
        font-size: 14px;
        .rol_main_text {
          font-size: 12px;
          color: #666;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
