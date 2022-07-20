import styled from 'styled-components';
import { Check2 as CheckMark } from '@styled-icons/bootstrap/Check2';
import PropTypes from 'prop-types';

import TodoContent from './TodoContent';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const CheckBox = styled.div`
  width: 45px;
  height: 45px;
  background-color: none;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

function Todos({ todoList, todoDoneHandler, setDetail }) {
  return (
    <Container>
      {todoList.map((item) => {
        const { text, key, done } = item;
        return (
          <TodoItem key={key}>
            <CheckBox onClick={() => todoDoneHandler(key)}>
              {done && <CheckMark style={{ color: 'white' }} />}
            </CheckBox>
            <TodoContent text={text} todoKey={key} done={done} />
          </TodoItem>
        );
      })}
    </Container>
  );
}

Todos.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  todoDoneHandler: PropTypes.func.isRequired,
  setDetail: PropTypes.func.isRequired,
};

export default Todos;
