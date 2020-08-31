<template>
    <div>
        <el-table
                :data="this.$props.lists"
                style="width: 100%">
            <el-table-column
                    prop="isFinished"
                    width="80">
                <template slot-scope="scope">
                    <el-switch
                            :value="scope.row.isFinished"
                            active-color="#13ce66"
                            @change="$emit('changeStatus', scope.row.id)">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                    label="Content"
                    prop="content">
            </el-table-column>
            <el-table-column
                    label="Status"
                    prop="status"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="Tag"
                    width="220"
                    :filters="tagType"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="btnTypeByTag(scope.row.tag)"
                            disable-transitions>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="Delete" width="120" prop="status">
                <template slot-scope="scope">
                    <el-button
                            prop="id"
                            size="mini"
                            type="danger"
                            @click="$emit('handleDelete', scope.row.id)">Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            lists: Array,
            page: Object,
        },
        data() {
            return {
                tagType: [
                    {text: 'work', value: 'work'},
                    {text: 'family', value: 'family'},
                    {text: 'study', value: 'study'},
                    {text: 'other', value: 'other'}
                ]
            }
        },
        methods: {
            btnTypeByTag(tag) {
                switch (tag) {
                    case 'work':
                        return 'primary';
                    case 'family':
                        return 'success';
                    case 'study':
                        return 'warning';
                    case 'other':
                        return 'info'
                }
            },
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            filterTag(value, row) {
                return row.tag === value;
            },
        }
    }
</script>

<style scoped>

</style>
