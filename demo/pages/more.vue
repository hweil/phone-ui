<template>
  <div class="page-more">
    <h1 class="page-title">More</h1>
    <div>
      <h6>采用组件默认按钮</h6>
      <ph-more  ref="moreDemo" :text="text" :line="2">
      </ph-more>
    </div>
    <div>
      <h6>自定义按钮文字</h6>
      <ph-more ref="noButton" expand-text='哈哈'   :text="text" :line="2">
      </ph-more>
    </div>
    <div>
      <h6>在组件外部定义按钮</h6>
      <ph-more ref="noButton"   :show-button="false" :text="text" :line="2">
      </ph-more>
      <button class="outer-button" @click="expand">{{btnTxt}}</button>
    </div>
    <div>
      <h6>自定义省略符</h6>
      <ph-more  ref="moreDemo" :ellipsis="'。。。'" :text="text" :line="2">
      </ph-more>
    </div>
    <div>
      <h6>不带省略符</h6>
      <ph-more  ref="moreDemo" :ellipsis="''" :text="text" :line="2">
      </ph-more>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'more',
    data() {
      return {
        text: '哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦哈哈才而是一下啦啦啦啦啦',
        btnTxt: '',
        btnTxtExpand: '收起',
        btnTxtCollapse: '展开全部'
      }
    },
    created() {
      this.btnTxt = this.btnTxtCollapse
    },
    methods: {
      expand() {
        this.$refs.noButton.handleClick()
        this.btnTxt = this.$refs.noButton.show ? this.btnTxtExpand : this.btnTxtCollapse
      }
    }
  }
</script>

<style>
.page-more{
  padding: 15px;
  width: 375px;
  margin: 0 auto;
  font-family:Helvetica Neue,Microsoft Yahei,sans-serif

}
.page-more >div {
  margin-bottom: 15px;
  border:1px solid #26a2ff;
  padding:15px;
  border-radius: 4px;
  box-shadow:0 0 5px #aaa
}
h6{
  margin:0;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.phone-more {
  font-size: 8px;
  color: #222
}
.outer-button{
  margin-top: 10px;
}
</style>
