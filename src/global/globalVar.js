import Vue from 'vue'
const EventHub = new Vue()

// functions defined inside 'methods' property are accessable across crm-common
Vue.mixin({
  methods: {
    getMyQueryList (uid) {
      console.log(uid)
      let temp = {
        'count': 8,
        'rows': [
          {'name': 'key customers', 'id': '001'},
          {'name': 'potential customers', 'id': '002'},
          {'name': 'overseas', 'id': '003'},
          {'name': 'local customer', 'id': '004'},
          {'name': 'key customers_1', 'id': '005'},
          {'name': 'potential customers_1', 'id': '006'},
          {'name': 'overseas_1', 'id': '007'},
          {'name': 'local customer_1', 'id': '008'}
        ]
      }
      this.$store.commit('SET_QUERY_LIST', temp)
      return this.$store.state.queryList
    }
  }
})
export {
  EventHub
}
