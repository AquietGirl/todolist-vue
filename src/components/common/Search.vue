<template>
    <div id="search">
        <el-input placeholder="Quick find" size="medium" :v-model="content">
            <el-button slot="prepend" icon="el-icon-search"
                       class="btn"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                content: ''
            }
        }
    }
</script>

<style>
    #search .el-input {
        width: 30%;
        height: 20px;
        position: relative;
        top: 10px;
        left: 197px;
    }

    #search .el-input .el-input__inner {
        background: #A83279;
        border: none;
        color: white;
        font-size: 16px;
        padding: 0;
    }

    #search .btn {
        background: #A83279;
        border: none;
        color: white;
        font-size: 18px;
    }
</style>
