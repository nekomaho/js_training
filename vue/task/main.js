// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const app = new Vue({
  el: '#app',
  data: {
    todos: []
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos)
      }
    },
    // ネストしているデータも監視出来る
    deep: true
  },
  methods: {
    doAdd: function(event, value){
      let comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }

      // ｛新しいID,コメント,作業状態}を登録
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })

      comment.value=''
    },
    doChangeState: function(item) {
      item.state = item.state ? 0 : 1
    },
    doRemove: function(item) {
      let index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
  // インスタンス作成時に保存されたリストを取得する
  created() {
    this.todos = todoStorage.fetch()
  }
})
