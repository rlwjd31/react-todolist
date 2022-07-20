import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 5em;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 80%;
  color: #c452e9;
`;

const DateContainerColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  & > span:nth-child(1) {
    font-size: 1.3rem;
  }

  & > span:last-child {
    font-size: 0.9rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 30%;
  height: 80%;
  color: #c452e9;
  font-size: 1.2rem;
`;
// #root > div > div > header > div > div.sc-haJGGt.bKmcYE > div:nth-child(2) > span:nth-child(1)

function SubHeader({ numOfTodo, numOfDoneTodo }) {
  const today = new Date();

  const [weekday, month, day, year] = today
    .toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })
    .replace(/[,]/g, '')
    .split(' ');

  return (
    <Container>
      <DateContainer>
        {/* {year}년 {month}월 {day}일 {weekday}요일 */}
        <DateContainerColumn style={{ fontSize: '3.5rem', marginRight: '1rem' }}>
          {day}
        </DateContainerColumn>
        <DateContainerColumn style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
          <span>{month}</span>
          <span>{year}</span>
        </DateContainerColumn>
      </DateContainer>
      <InfoContainer>
        <p>will todo {numOfTodo}</p>
        <p>done todo {numOfDoneTodo}</p>
      </InfoContainer>
    </Container>
  );
}

SubHeader.propTypes = {
  numOfTodo: PropTypes.number.isRequired,
  numOfDoneTodo: PropTypes.number.isRequired,
};

export default SubHeader;
