<template>
    <div>
        <el-table
                :data="this.$props.lists"
                style="width: 100%">
            <el-table-column
                    prop="isFinished"
                    width="50">
                <template slot-scope="scope">
                    <el-checkbox :checked="scope.row.isFinished" @change="$emit('changeStatus', scope.row.id)"/>
                </template>
            </el-table-column>
            <el-table-column
                    label="Content"
                    prop="content">
            </el-table-column>
            <el-table-column
                    label="Status"
                    prop="status"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="Tag"
                    width="180"
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
        <!--        <el-pagination-->
        <!--                layout="prev, pager, next"-->
        <!--                :total="1000">-->
        <!--        </el-pagination>-->
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            lists: Array
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
