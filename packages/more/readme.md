# phone-more 组件
基于vue2.0的【展开、收起】组件
为了更好的实现多文本能够按指定行数显示，并通过配置两个按钮进行展开与折叠。
### 效果
![](https://lucefer.github.io/phone-ui/images/more.png)
### 安装
```
npm install -D phone-more
```
### 使用
```
import More from 'phone-more'
Vue.component(More.name, More)
```
### 参数说明
* text
> String ，待显示的文本
* line
> 显示的行数，默认为2
* showButton
> 是否显示组件内置按钮。默认为true
* expandText
> 展开按钮的文案
* collapseText
> 收起按钮的文案
* ellipsis
> 自定义省略符号，默认为...

```
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
```
