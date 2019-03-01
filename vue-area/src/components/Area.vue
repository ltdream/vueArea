<template>
  <div>
    <div class="area-item">
        <div class="area-item-title">所在地区</div>
        <div class="area-item-content area-item-content-more" @click="handleArea">
            <div class="area-item-content-text" v-if="region!=''">{{region}}</div>
            <div class="area-item-content-text" v-else>选择地址</div>
            <img src="../assets/image/arrow__right.png" alt="" >
        </div>
    </div>
    <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
        <div class="m-area-container">
            <div class="area-ok-cancle">
            <a class="area-ok-cancle" @click="handleHideShowPop(0)">取消</a>
            <a class="area-ok-btn" @click="handleHideShowPop(1)">确定</a>
            </div>
            <mt-picker :slots="addressSlots" valueKey="name" :visibleItemCount="5" @change="addressChange" :itemHeight="40"></mt-picker>
        </div>
    </mt-popup>
  </div>
</template>

<script>
import area from '../assets/utils/area'
export default {
  name: 'Area',
  data () {
    return {
      region:'',//三级地址
      province:'',//省
      city:'',//市
      county:'',//县
      regionVisible:false,//弹出框是否可见
      regionInit:false,
      addressSlots: [
        {
            flex: 1,
            values: this.getProvinceArr(),
            className: 'slot1',
            textAlign: 'center'
        }, {
            divider: true,
            content: '-',
            className: 'slot2'
        }, {
            flex: 1,
            values: this.getCityArr("北京市"),
            className: 'slot3',
            textAlign: 'center'
        },{
            divider: true,
            content: '-',
            className: 'slot4'
        },
        {
            flex: 1,
            values: this.getCountyArr("北京市","北京市"),
            className: 'slot5',
            textAlign: 'center'
        }
      ],
    }
  },
  methods:{
    handleArea(){          // 选择地区
      this.regionVisible  = true
    },
    handleHideShowPop(){
      this.regionVisible = false
    },
    addressChange(picker, values){
      if (this.regionInit){
          //取值并赋值
          this.region = values[0]["name"] + ' ' + values[1]["name"] + ' ' + values[2]["name"];
          this.province = values[0]["name"];
          this.city = values[1]["name"];
          this.county = values[2]["name"];
          //给市、县赋值
          picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
          picker.setSlotValues(2, this.getCountyArr(values[0]["name"], values[1]["name"]));
      }else {
          this.regionInit = true;
      }
    },
    getProvinceArr() {
      let provinceArr = [];
      area.forEach(function (item) {
      let obj = {};
          obj.name = item.label;
          obj.code = item.value;
          provinceArr.push(obj);
      });
      return provinceArr;
    },
    getCityArr(province) {
      let cityArr = [];
      area.forEach(function (item) {
      if (item.label === province) {
          item.children.forEach(function (args) {
          let obj = {};
              obj.name = args.label;
              obj.code = args.value;
          cityArr.push(obj);
          });
      }
      });
      return cityArr;
    },
    getCountyArr(province,city){
      let countyArr = [];
      area.forEach(function(item){
      if (item.label === province){
          item.children.forEach(function (args) {
              if (args.label === city){
                  args.children.forEach(function (param) {
                      let obj = {};
                      obj.name=param.label;
                      obj.code=param.value;
                      countyArr.push(obj);
                      })
                  }
              });
          }
      });
      return countyArr;
    },
  }
}
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
.area-item{
    display: flex;
    align-items: center;
    padding:0 14px;
    height:50px;
    box-sizing: border-box;
    &-title{
        width:70px;
        flex: 0 0 1;
        line-height: 22px;
        color:#A3A3A5;
        font-size:16;
        font-weight: 400;
    }
    &-content{
        display: flex;
        flex:1;
        align-items: center;
        margin-left: 16px;
        line-height: 22px;
        color:#333;
        font-size:16;
        &.area-item-content-more{
            justify-content: space-between;
            flex:1;
            .area-item-content-text{
                flex:1;
                width:calc(100% - 15px);
                height:22px;
            }
            &>img{
                width:8px;
                height:15px;
                display: block;
                flex:0 0 1;
            }
        }
        .inputBox{
            flex:1;
            border:none;
        }
        .selectBox{
            width:18px;
            height:28px;
            border-radius:4px;
        }
    }
}
  .region-popup{
        width:100%;
    }
    .m-area-container{
      width: 100%;
      .area-ok-cancle{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        padding: 10px 10px 0  10px;
        a{

          color: #fff;
          padding: 6px 10px;
          border-radius: 4px;
        }
        .area-ok-btn{
          background: #DDC390;
        }
        .area-ok-cancle{
          background: #ccc;
        }
      }
    }
</style>
