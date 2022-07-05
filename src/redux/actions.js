//Tạo ra action để cập nhật state todoList trong store chung
export const addTodoAction = {
    type: 'todoList/addTodo',
    payLoad: {
        id: 5, name: 'Learn Footbal', completed: false, priority: 'Medium'
    }
}

//Trong thực tế nên dùng action creator thay vì dùng action
//Vì action-creator dùng để tạo ra các action, sau này cần thay đổi action
//thì chỉ cần thay đổi trong action-creator
//Ví dụ về action-creator
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payLoad: data
    }
}

//Tạo ra action để cập nhật state filter trong store chung
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payLoad: text
    }
}