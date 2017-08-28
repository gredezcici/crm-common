var mixins = {
  computed: {
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
}
export {
  mixins
}

