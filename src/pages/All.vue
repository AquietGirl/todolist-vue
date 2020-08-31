<template>
    <div>
        <p>All Todo List</p>
        <el-button icon="el-icon-plus" circle @click="isShowModal"/>
        <list-item
                :lists="this.todoList"
                :page="this.page"
                @handleCurrentChange="handleCurrentChange"
                @handleDelete="deleteItem"
                @changeStatus="changeStatus"/>
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page="this.page.currentPage"
                :page-size="this.page.pageSize"
                :total="this.page.totalCount"
                layout="prev, pager, next">
        </el-pagination>
        <modal ref="dialog" :dialogFormVisible="this.dialogFormVisible" @isShowModal="isShowModal"
               @addTodoItem="addTodoItem"/>
    </div>
</template>

<script>
    import ListItem from "@/components/common/ListItem";
    import Modal from "@/components/all/Modal";
    import todoApi from "@/request/index";

    export default {
        name: "All",
        data() {
            return {
                dialogFormVisible: false,
                todoList: [],
                page: {
                    currentPage: 1,
                    pageSizes: [],
                    pageSize: 6,
                    totalCount: 1
                }
            }
        },
        methods: {
            isShowModal() {
                this.dialogFormVisible = !this.dialogFormVisible
            },
            getTodoList() {
                todoApi.get('').then((res) => {
                    // this.todoList = res.data.data;
                    this.page.totalCount = res.data.data.length
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            getTodoListByPage(page, pagesize) {
                todoApi.get('', {
                    params: {
                        page,
                        pagesize
                    }
                }).then((res) => {
                    this.todoList = res.data.data
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            addTodoItem(form) {
                const data = {
                    content: form.content,
                    tag: form.tag
                };
                console.log(data);
                todoApi.post('', data).then((res) => {
                    this.getTodoListByPage(this.page.currentPage, this.page.pageSize);
                    this.getTodoList();
                    this.$message({
                        message: res.data.message,
                        type: 'success'
                    });
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                });
                this.isShowModal();
            },
            deleteItem(id) {
                todoApi.delete(`/${id}`).then((res) => {
                    this.$message({
                        message: res.data.message,
                        type: 'success'
                    });
                    this.getTodoListByPage(this.page.currentPage, this.page.pageSize);
                    this.getTodoList()
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            changeStatus(id) {
                todoApi.put(`/${id}`).then(() => {
                    this.getTodoListByPage(this.page.currentPage, this.page.pageSize)
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            handleCurrentChange(currentPage) {
                this.getTodoListByPage(currentPage, this.page.pageSize)
            },
        },
        mounted: function () {
            // this.getTodoListByPage(this.page.currentPage, this.page.pageSize);
        },
        created: function () {
            this.getTodoListByPage(this.page.currentPage, this.page.pageSize);
            this.getTodoList()
        },
        components: {Modal, ListItem}
    }
</script>

<style scoped>
    .el-button {
        background: #A83279;
        color: #ffffff;
    }

    p {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .el-button {
        margin-bottom: 30px;
    }
</style>
