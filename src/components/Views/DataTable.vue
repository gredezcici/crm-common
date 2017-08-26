<template>
  <table id="queryResultGrid" class=" display" width="100%" v-cc-dataTable="queryResult" ></table>
</template>
<script>
  import Vue from 'vue'
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
          data: this.$store.state.datatableModel.queryResult,
          columns: this.$store.state.datatableModel.columnName
        }
      }
    },
    methods: {
      refreshGrid () {
        let vm = this
        let dataTable = $('#queryResultGrid').DataTable()
        dataTable.destroy()
        $('#queryResultGrid').empty()
        $('#queryResultGrid').DataTable({
          data: vm.$store.state.datatableModel.queryResult,
          columns: vm.$store.state.datatableModel.columnName
        })
      }
    },
    mounted: function () {
      EventHub.$on('refreshQueryGrid', this.refreshGrid)
    }
  }
</script>

