<template>
    <div id="app">
        <el-container>
            <el-header class="nav-bar-header">
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            :default-active="this.$route.path"
                            router
                            class="el-menu-vertical-demo"
                            background-color="#fff"
                            text-color="#000"
                            active-text-color="#A83279">
                        <el-menu-item index="/all">
                            <i class="el-icon-menu"></i>
                            <span slot="title">
                                Todo
                            </span>
                        </el-menu-item>
                        <el-menu-item index="/finished">
                            <i class="el-icon-success"></i>
                            <span slot="title">
                                Finished
                            </span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        }
    }
</script>

<style>
    .nav-bar-header {
        background: #A83279;
    }
    html, body, #app, .el-container, .el-menu {
        height: 100%;
        overflow: hidden;
    }
</style>
