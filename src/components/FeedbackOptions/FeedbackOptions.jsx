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
