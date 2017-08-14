<template>
  <table id="example" class=" display" width="100%" v-cc-dataTable></table>
</template>
<script>
  import Vue from 'vue'
  import store from '../.././store'

  Vue.directive('cc-dataTable', {
    inserted: function (el, binding, vnode, oldVnode) {
      $(el).DataTable({
        data: store.state.datatableModel.queryResult,
        columns: store.state.datatableModel.columnName
      })
    },
    update: function (el, binding, vnode, oldVnode) {
    },
    unbind: function (el, binding, vnode, oldVnode) {
    }
  })
  export default {
    name: 'ccDataTable'

  }
</script>

