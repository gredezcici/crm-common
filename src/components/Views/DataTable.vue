<template>
  <table id="example" class=" display" width="100%" v-cc-dataTable="queryResult"></table>
</template>
<script>
  import Vue from 'vue'
  import store from '../.././store'

  Vue.directive('cc-dataTable', {
    inserted: function (el, binding, vnode, oldVnode) {
      $(el).DataTable({
        data: binding.value.data,
        columns: binding.value.columns
      })
    },
    update: function (el, binding, vnode, oldVnode) {
      console.log('update')
      var datatable = $(el).dataTable().api()
      datatable.clear()
      datatable.rows.add(binding.value)
      datatable.draw()
    },
    unbind: function (el, binding, vnode, oldVnode) {
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
    }
  }
</script>

