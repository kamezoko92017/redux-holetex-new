import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


//Cài đặt npm i redux-devtools-extension
//để sử dụng Enhancer
const composedEnhancers = composeWithDevTools()

//Store se nhan vao 3 tham so: reducer, initvalue
// const store = createStore(rootReducer, initValue, enhancers);
const store = createStore(rootReducer, composedEnhancers);

export default store;