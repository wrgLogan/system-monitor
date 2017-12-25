<template>
  <div class="page">
      <div class="action-container">
        <Button class="refresh-btn" type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">刷新</span>
            <span v-else>Loading...</span>
        </Button>
      </div>
      <Table :loading="loading" border :columns="columns" :data="traceList"></Table>
      <div class="action-container">
        <Page
          @on-change="onPageChange"
          :page-size="pagination.pageSize" 
          :total="pagination.totalCount">
        </Page>
      </div>
      <!-- 日志详情对话框 -->
      <Modal
        v-model="modal"
        width="1000"
        :styles="{top: '20px'}"
        title="错误详情"
        ok-text="确认"
        cancel-text="取消">
        
      </Modal>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
