<template>
    <div>
        <p>Finished List</p>
        <list-item :lists="finishedList" @handleDelete="deleteItem" @changeStatus="changeStatus"/>
    </div>
</template>

<script>
    import ListItem from "@/components/common/ListItem";
    import todoApi from "@/request";
    export default {
        name: "Finished",
        data() {
          return {
              finishedList: []
          }
        },
        components: {ListItem},
        methods: {
            getTodoListFinished() {
                todoApi.get('/finished').then(res => {
                    this.finishedList = res.data.data;
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            deleteItem(id) {
                todoApi.delete(`/${id}`).then((res) => {
                    this.$message({
                        message: res.data.message,
                        type: 'success'
                    })
                    this.getTodoListFinished()
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            },
            changeStatus(id) {
                todoApi.put(`/${id}`).then(() => {
                    this.getTodoListFinished()
                }).catch(err => {
                    this.$message({
                        message: err.message,
                        type: 'error'
                    })
                })
            }
        },
        mounted: function () {
            this.getTodoListFinished()
        }
    }
</script>

<style scoped>
    p {
        font-size: 24px;
        margin-bottom: 30px;
    }
</style>
