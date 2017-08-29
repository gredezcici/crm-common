import Vue from 'vue'
const EventHub = new Vue()

// functions defined inside 'methods' property are accessable across crm-common
Vue.mixin({
  methods: {
    getMyQueryList (uid) {
      return {
        'count': 6,
        'rows': [
          {'name': 'key customers', 'id': '001'},
          {'name': 'potential customers', 'id': '002'},
          {'name': 'overseas', 'id': '003'},
          {'name': 'local customer', 'id': '004'}
        ]

      }
    }
  }
})
export {
  EventHub
}
