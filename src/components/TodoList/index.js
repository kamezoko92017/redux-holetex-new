import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
//Thêm hook useSeletor để lấy dữ liệu trong store chung
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  //Tạo state để lưu input user nhập vào
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  //sử dụng useSelector(), có thể viết trực tiếp:
  //const todoList = useSelector((state) => state.todoList)
  //nhưng viết như vậy sau này mỗi lần sử dụng state.todoList lại phải viết lại
  //nên để tối ưu, nên viết thành function seletor-creator như action-cretor
  //Lấy state todoList trong store
  const todoList = useSelector(todosRemainingSelector)

  //Lấy searchText trong filters của store
  // const searchText = useSelector(searchTextSelector)

  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    //Dùng dispatch() để bắn đi action
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      prioriry: priority,
      completed: false
    }))
    //Sau khi nhấn Add thì set các input về giá trị rỗng hoặc mặc định
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {/* Không hardcode, cần load dữ liệu từ store */}
        {todoList.map(todo =>
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
