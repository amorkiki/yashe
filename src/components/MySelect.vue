<template>
  <div class="select">
    <span>{{title}}</span><i @click="clickSelect"></i>
      <ul v-if="show">
        <li @click="chooseOption(i)" v-for="(item,i) in options" :key="i">{{item.label}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{
    options:{
      type:Array
    },
    title:{
      type:String
    }
  },
  data(){
    return{
      show:false,
    }
  },
  methods:{
    clickSelect(){
      this.show=!this.show
    },
    chooseOption(i){
      console.log(this.options[i].label)
      this.show=!this.show
      const selected =this.options[i].label
      this.$emit('selected',selected)
    }
  },
  
}
</script>
<style lang="less" scoped>
.select{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  position: relative;
  span{
    // display: block;
  }
  i{
    // display: inline-block;
    float: right;
    margin-top: 3px;
    width: 10px;
    height: 10px;
    border: 1px solid #9A7A53;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;
    margin-right: 0;
    }
  ul{
    position: absolute;
    left: 0;
    top: 90%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 6px;
    margin-top: 10px;
    li{
      cursor: pointer;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      text-align: center;
      list-style: none;
      line-height: 40px;
      border-bottom: 1px solid #fff;
      &:hover{
        background:rgba(0, 0, 0, .5);
      }
    }
    :last-child{
      border-bottom: none;
    }
    
  }
  
  
}
</style>