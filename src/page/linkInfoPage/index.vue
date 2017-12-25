<template>
  <div class="page">
      <div class="action-container">
        <Button class="refresh-btn" type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">刷新</span>
            <span v-else>Loading...</span>
        </Button>
      </div>
      <Table :loading="loading" border :columns="columns" :data="spanList"></Table>
      <!-- <div class="action-container">
        <Page
          :page-size="10" 
          :total="100">
        </Page>
      </div> -->
      <!-- 日志详情对话框 -->
      <Modal
        v-model="modal"
        width="1000"
        :styles="{top: '20px'}"
        title="错误详情"
        ok-text="确认"
        cancel-text="取消">
        <Tabs value="1" >
          <TabPane label="信息" name="1" >
            <span v-show="!spanDetail.spanInfo.length">没有数据</span>
            <p v-for="(item, index) in spanDetail.spanInfo" :key="index">{{item}}</p>
          </TabPane>
          <TabPane label="错误" name="2">
            <span v-show="!spanDetail.spanError.length">没有数据</span>
            <p v-for="(item, index) in spanDetail.spanError" :key="index">{{item}}</p>
          </TabPane>
          <TabPane label="警告" name="3">
            <span v-show="!spanDetail.spanWarn.length">没有数据</span>
            <p v-for="(item, index) in spanDetail.spanWarn" :key="index">{{item}}</p>
          </TabPane>
        </Tabs>
      </Modal>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
