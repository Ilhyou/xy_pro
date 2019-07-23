<template>
  <div class="comment">
    <div class="comment_list">
      <div class="item">
        <div class="left">
          <div class="dp">
            <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt />
          </div>
          <div class="level">lv{{comment.level}}</div>
          <div class="join_date">2019-6-26</div>
        </div>
        <div class="right">
          <div class="content">{{comment.content}}</div>
          <div class="reply">
            <textarea
              class="sendMsg"
              placeholder="添加回复"
              @focus="handelTextarea"
              @blur="handelTextareablur"
              :class="{active:count===1}"
            ></textarea>
            <div class="btn" v-if="count===1">
              <el-button type="primary" size="mini">回复</el-button>
            </div>
          </div>
          <NavsItem :comment="v" v-for="(v,i) in comment.followed" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavsItem",
  props: {
    comment: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handelTextarea() {
      this.count = 1;
    },
    handelTextareablur() {
      this.count = 0;
    }
  }
};
</script>


<style lang="less" scoped>
.comment {
  width: 1000px;
  margin: 0 auto;
  .comment_list {
    .item {
      display: flex;
      padding-top: 20px;
      border-top: 1px dashed #eee;
      .left {
        width: 110px;
        display: flex;
        position: relative;
        margin-right: 10px;
        .dp {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-sizing: border-box;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .level {
          flex: 1;
          color: orange;
        }
        .join_date {
          position: absolute;
          top: 50px;
        }
      }
      .right {
        width: 100%;
        .content {
          color: #666;
          margin-left: 20px;
        }
        .reply {
          margin: 10px;
          position: relative;
          .sendMsg {
            display: block;
            width: 100%;
            resize: none;
            padding: 5px 15px;
            box-sizing: border-box;
            color: #606266;
            background-color: #fff;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            margin-bottom: 50px;
            height: 40px;
            transition: height 0.25s;
          }
          .btn {
            margin-top: 50px;
            position: absolute;
            right: 0px;
            bottom: -40px;
          }
        }
        .comment_comment_list {
          padding-top: 20px;
        }
      }
    }
  }
  .active {
    height: 80px !important;
  }
}
</style>
