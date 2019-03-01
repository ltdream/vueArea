# vue-area

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 安装sass
cnpm i sass-loader node-sass vue-style-loader --save-dev    

# 安装mint-ui
cnpm i mint-ui -S

# main.js引入mint-ui
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/popup/style.css';
import 'mint-ui/lib/picker/style.css';
import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';
Vue.component(Popup.name,Popup)
Vue.component(Picker.name, Picker);

# 地区json文件
assets/utils/area.js

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
