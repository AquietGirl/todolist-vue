<template>
    <div>
        <p>All Todo List</p>
        <el-button icon="el-icon-plus" circle @click="isShowModal"/>
        <list-item :lists="this.todoList" @handleDelete="deleteItem" @changeStatus="changeStatus"/>
        <modal ref="dialog" :dialogFormVisible="this.dialogFormVisible" @isShowModal="isShowModal" @addTodoItem="addTodoItem"/>
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
                todoList:[]
            }
        },
        methods: {
            isShowModal() {
                this.dialogFormVisible = !this.dialogFormVisible
            },
            getTodoList() {
                todoApi.get('').then((res) => {
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
                    tag:form.tag
                }
                console.log(data);
                todoApi.post('', data).then((res) => {
                    this.getTodoList()
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
                    })
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
                    this.getTodoList()
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            }
        },
        mounted: function () {
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
