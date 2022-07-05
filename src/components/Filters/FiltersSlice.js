//Phần UI có 2 component chính là: Filter,và Todolist 
//Cho nên cần có 2 state lưu trong store nên cần có 2 state trong initState

const initState = {
    //Trong component Filter có 3 thành phần con: 
    //1. filter theo Search
    //2. Filter theo status (all, compeleted, todo)
    //3. filter by Priority
    //nên filter gồm 3 trường
    search: '',
    status: 'All',
    priority: []
}
//Reducer luôn nhận vào 2 tham số là state và action
const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payLoad
            }
        default:
            return state;
    }
}

export default filtersReducer