import { useEffect, useState } from 'react';

import Button from './Button';
import '../styles/Buttons.css';

function Buttons() {
  const [buttons, setButton] = useState([]);
  const [buttonId, setButtonId] = useState(1);

  const createButtonHandler = (event) => {
    const textColor = event.target.querySelector('#text-color').value;
    const backgroundColor = event.target.querySelector('#background-color').value;

    // buttons 갱신한다.
    setButton((previousButton) => [
      ...previousButton,
      <Button key={buttonId} color={textColor} backgroundColor={backgroundColor} />,
    ]);

    setButtonId(buttonId + 1);

    /* eslint-disable-next-line no-alert */
    alert('button created!!');
    event.preventDefault(); // prevent refresh
  };

  // refresh

  return (
    <>
      <div className="add-button">
        <form onSubmit={createButtonHandler}>
          <input id="text-color" type="text" placeholder="color" />
          <input id="background-color" type="text" placeholder="backgroundColor" />
          <button type="submit">Add more button</button>
        </form>
      </div>
      <div className="buttonContainer">
        {/* <Button backgroundColor="white" color="red" />
        <Button backgroundColor="white" color="blue" />
        <Button backgroundColor="white" color="green" /> */}
        {buttons}
      </div>
    </>
  );
}

export default Buttons;
