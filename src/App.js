import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4, parse as uuidParse } from 'uuid';
import GlobalStyle from './styles/GlobalStyle';
import './styles/App.css';

import TodoForm from './components/TodoForm';
import SubHeader from './components/SubHeader';
import Todos from './components/Todos';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding: 0 20vw;
  margin-top: 10rem;

  @media (min-width: 1500px) {
    width: 85vw;
  } ;
`;

// @media (min-width: 800px) {
// 	max-width: 800px;
// }

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 3.5rem;
  border-bottom: 1px solid white;
  margin-bottom: 4rem;
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const todoInputElement = useRef();
  const todoItem = useRef();

  const onSumbitHandler = (event) => {
    const newTodo = todoInputElement.current.value;
    const key = uuidv4();

    event.preventDefault();
    setTodoList((previousTodoList) => [
      ...previousTodoList,
      {
        text: newTodo,
        key,
        done: false,
        dropActive: false,
      },
    ]);
  };

  const todoDoneHandler = (key) => {
    setTodoList((previousTodo) =>
      previousTodo.map((item) =>
        item.key !== key
          ? item
          : {
              ...item,
              done: !item.done,
            },
      ),
    );
  };

  const setDetail = (key) => {
    alert(key);
    console.log(key);
  };

  console.log(todoList);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <AppContainer>
          <Header>
            <h1>Todo</h1>
            <SubHeader
              numOfTodo={todoList.filter((item) => !item.done).length}
              numOfDoneTodo={todoList.filter((item) => item.done).length}
            />
          </Header>
          <Main>
            <TodoForm ref={todoInputElement} onSubmit={onSumbitHandler} />
            <Todos todoList={todoList} todoDoneHandler={todoDoneHandler} setDetail={setDetail} />
          </Main>
        </AppContainer>
      </div>
    </>
  );
}

export default App;

// https://www.uuidgenerator.net/dev-corner/javascript -> UUID generator
// npm install uuid
// import {v4 as uuidv4} from "uuid";
// let myuuid = uudiv4()

// port번호 할당 조회하기
// $ sudo lsof -i :{port번호}
// 해당 포트번호 중단(삭제)하기
// $ sudo kill -9 {PID}

// ------------------------ 생긴 문제점들 ------------------------

// 1. todo를 삭제하는 과정에서 key가 겹치는 부분이 생김 -> UUID를 쓰기 로 결정함
// 2. ref를 children으로 전달할 수가 없었음 -> React.forwardRef를 써서 해결함
// 3. input type="checkbox"를 쓰면 styling을 할 수 없었음 -> custom checkbox를 만듬
// 4. icon에 관해서는 styled-icons library를 다운받는다. -> https://github.com/styled-icons/styled-icons
// ------------------------------------------------------------
