import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 70%;
  height: 3rem;
  margin-bottom: 5rem;
`;

const Input = styled.input`
  /* width: 90%; */
  width: 85%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 1.2rem;
  transition: all 0.5s ease-out;
  padding: 0.2em 0.8em;

  &:focus {
    outline: none;
    width: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 25px #719ece;

    & + button {
      width: 0%;
      opacity: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      z-index: 1;
    }
  }
`;

const Button = styled.button`
  background-color: #c452e9;
  color: white;
  height: 100%;
  width: 15%;
  border: none;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transition: all 0.3s ease-out;
  font-size: 1rem;

  &:hover {
    color: #7e7e99;
    background-color: #eaeaf2;
    /* 
      offset-x | offset-y | blur-radius | spread-radius | color
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
    */
  }
`;

const TodoForm = forwardRef(({ onSubmit }, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocusHandler = () => {
    setIsFocus((prevFocues) => !prevFocues);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input onFocus={onFocusHandler} ref={ref} placeholder="할 일 입력..." />
      <Button type="submit">확인</Button>
    </Form>
  );
});

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
