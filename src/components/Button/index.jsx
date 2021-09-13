import Type from 'prop-types';

import './styles.css';

export const Button = ({ text, onCLick, disabled = false }) => (
  <button className="button" onClick={onCLick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Type.string.isRequired,
  onCLick: Type.func.isRequired,
  disabled: Type.bool,
};
