<template>
  <table id="queryResultGrid" class=" display" width="100%" v-cc-dataTable="queryResult"></table>
</template>
<script>
  import Vue from 'vue'
  import store from '../.././store'
  import { EventHub } from '../../global/globalVar'
  Vue.directive('cc-dataTable', {
    inserted: function (el, binding, vnode, oldVnode) {
      $(el).DataTable({
        data: binding.value.data,
        columns: binding.value.columns
      })
    }
  })
  export default {
    name: 'ccDataTable',
    props: ['updateTable'],
    data () {
      return {
        queryResult: {
          data: store.state.datatableModel.queryResult,
          columns: store.state.datatableModel.columnName
        }
      }
    },
    methods: {
      refreshGrid () {
        console.log('refreshGrid')
        let dataTable = $('#queryResultGrid').DataTable()
        dataTable.destroy()
        let latest = {
          data: store.state.datatableModel.queryResult,
          columns: store.state.datatableModel.columnName
        }
        dataTable.rows.add(latest)
        dataTable.draw()
      }
    },
    created: function () {
//      Vue.$on('refreshQueryGrid', this.refreshGrid)
      EventHub.$on('refreshQueryGrid', this.refreshGrid)
    }
  }
</script>

