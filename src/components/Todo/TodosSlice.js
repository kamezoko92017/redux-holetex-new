//Phần UI có 2 component chính là: Filter,và Todolist 
//Cho nên cần có 2 state lưu trong store nên cần có 2 state trong initState

const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
]

//Reducer luôn nhận vào 2 tham số là state và action
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payLoad
            ]
        default:
            return state;
    }
}

export default todoListReducer