<template>
  <div id="app">
    <transition :name="animation">
      <router-view class="module-container"></router-view>
    </transition>
  </div>
</template>
<script>

export default {
  name: "app",
  data: function() {
    return {
      projName: 'iView 后台管理界面'
    };
  },
  computed: {
    animation: function() {
      return this.$root.animation;
    }
  },
  components:{
  },
  mounted(){
    
    
  },
  methods: {
    goTo(page) {
      this.$switchTo(page);
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f3f3f5;
}

.module-container{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.page-container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.el-table__header-wrapper {
  overflow-x: hidden;
}

.el-table__header-wrapper thead tr{
  background-color: #F4F3F3;
}

.el-table__body tbody tr{
  height: 40px;
}

.el-table__body tbody tr td .cell{
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 100px;
}

.avatar-uploader .el-upload .el-icon-plus{
  height: 100px;
    width: 100px;
    line-height: 100px;
}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }


/*
 下面是用户管理>所有用户/黑名单的tbody的样式
 * */
section .content table tbody {
	background: #fff;	
}
section .content table tbody tr td {
	width: auto;
	height: 36px;
	font-size: 14px;
	color: #333;
	text-align: center;
	border: 1px solid #F0F0F0;
}
section .content table tbody tr td:last-child {
	position: absolute;
	left: 300px;
	top: 300px;
	width: auto;
	height: 36px;
	font-size: 14px;
	/*color: red;*/  
	text-align: center;
	display: none;
	border: 1px solid transparent;
}

section .content table tbody tr .LatestDate {
	width: auto;
	height: 36px;
	font-size: 14px;
	color: #999;
	text-align: center;
	border: 1px solid #F0F0F0;
}
section .content table tbody tr .joinBlack,section .content table tbody tr .outBlack{
	width: auto;
	height: 36px;
	font-size: 14px;
	color: #007BFF;
	text-align: center;
  border: 1px solid #F0F0F0;
  cursor: pointer;
}

</style>