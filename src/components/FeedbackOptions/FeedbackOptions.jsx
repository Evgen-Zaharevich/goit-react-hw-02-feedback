import PropTypes from 'prop-types';

import {
  Button,
  ButtonContainer,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
