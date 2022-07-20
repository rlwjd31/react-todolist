import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';
import PropTypes from 'prop-types';

const lineThroughAnimation = keyframes`
	from{
		width: 0;
	}
	to{
		width: 90%
	}
`;

const spreadDownAnimation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to{
    height: 200px;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

const Text = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.2%;
  padding-left: 4%;
  width: 100%;
  height: 46px;
  color: white;
  font-size: 23px;
  background-color: ${(props) =>
    props.done ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'};
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.8);
  border-radius: 7px;
  transition: all 0.3 ease-out;
  word-break: break-word;
  line-height: 1.2rem;
  cursor: pointer;

  /* 
  https://stackoverflow.com/questions/12196885/text-flowing-out-of-div
  -> prevent text that in div element to don't overflow 
*/

  /* 
offset-x | offset-y | blur-radius | spread-radius | color
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
*/
`;

const Setting = styled(ThreeDotsVertical)`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

const SubContenet = styled.div`
  /* background-color: rgba(255, 255, 255, 0.7); */
  padding: 20px;
  color: white;
  margin-top: 10px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  width: 100%;
  height: 200px;
  animation: ${spreadDownAnimation} 0.5s ease-out;
`;

const LineThrough = styled.div`
  position: absolute;
  border-bottom: 2px solid white;
  width: 90%;
  height: 50%;
  top: 0;
  left: 3%;
  transition: all 0.3s ease-out;
  animation: ${lineThroughAnimation} 0.3s linear;
`;

function TodoContent({ text, todoKey, done }) {
  const [isContentClicked, setIsContentClicked] = useState(false);
  const inputClickHandler = () => {
    setIsContentClicked(!isContentClicked);
  };

  const detailClickHandler = () => {
    alert('setting icon is clicked!!');
  };

  return (
    <Container>
      <Text done={done} onClick={inputClickHandler}>
        {text}
        <Setting onClick={detailClickHandler} />
        {done && <LineThrough />}
      </Text>
      {isContentClicked && <SubContenet>something</SubContenet>}
    </Container>
  );
}

TodoContent.propTypes = {
  text: PropTypes.string.isRequired,
  todoKey: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoContent;
