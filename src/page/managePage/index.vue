<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <!-- 左边侧边栏部分 -->
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="activeName" theme="dark" width="auto" @on-select="onMenuSelect" >
                    <div class="layout-logo-left">
                        <h2>
                            {{ systemName }}
                        </h2>
                    </div>
                    <!-- <MenuItem name="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text" >首页</span>
                    </MenuItem> -->
                    <MenuItem name="2">
                        <!-- <Icon type="ios-keypad" :size="iconSize"></Icon> -->
                        <Icon type="alert-circled" :size="iconSize"></Icon>
                    <span class="layout-text" >系统错误</span>
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">调用链路</span>
                    </MenuItem>
                </Menu>
            </Col>
            <!-- 右边头部和内容部分 -->
            <Col :span="spanRight" class="right-content">
                <div class="layout-header">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                    <div class="admin-button-container">
                        <div class="admin-name">admin</div>
                        <Button type="text" @click="logOut">
                            <Icon type="log-out" size="28"></Icon>
                        </Button>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem v-for="(breadcrumb, index) in BreadcrumbArr" :key="index">{{breadcrumb.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <!-- <div class="layout-content-main">Content</div> -->
                    <transition :name="animation">
                        <router-view class="layout-content-main"></router-view>
                    </transition>
                </div>
                <!-- <div class="layout-copy">
                    © 2017 Logan
                </div> -->
            </Col>
        </Row>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
