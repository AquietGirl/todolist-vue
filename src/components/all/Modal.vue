<template>
    <div>
        <el-dialog title="Add Todo Item" :visible.sync="this.$props.dialogFormVisible" @close="closeDialog">
            <el-form :model="form" label-width="80px">
                <el-form-item label="Content">
                    <el-input v-model="form.content" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Tag">
                    <el-select v-model="form.tag" placeholder="Please select a tag">
                        <el-option label="work" value="work"></el-option>
                        <el-option label="family" value="family"></el-option>
                        <el-option label="study" value="study"></el-option>
                        <el-option label="other" value="other"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button
                        @click="$emit('addTodoItem', form)"
                        :disabled="form.content ==='' && form.tag ===''"
                        style="background: #A83279; color: white">Add
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            dialogFormVisible: Boolean
        },
        data() {
            return {
                form: {
                    content: '',
                    tag: ''
                },
            }
        },
        methods: {
            closeDialog() {
                if (this.$props.dialogFormVisible) {
                    this.$emit('isShowModal')
                }
            }
        }
    }
</script>

<style scoped>

</style>
