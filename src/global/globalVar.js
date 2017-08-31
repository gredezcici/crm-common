import Vue from 'vue'
const EventHub = new Vue()

// functions defined inside 'methods' property are accessable across crm-common
Vue.mixin({
  methods: {
    getMyQueryList (uid) {
      console.log(uid)
      let temp = {
        'count': 4,
        'rows': [
          {'name': 'key customers_new', 'id': '001'},
          {'name': 'potential customers', 'id': '002'},
          {'name': 'overseas', 'id': '003'},
          {'name': 'local customer', 'id': '004'}
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
