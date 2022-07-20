import PropTypes from 'prop-types';

function Button(props) {
  const { color, backgroundColor } = props;

  return (
    <button
      style={{
        color,
        backgroundColor,
        border: '3px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        width: '100px',
        height: '40px',
      }}
      type="button"
    >
      {color}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
