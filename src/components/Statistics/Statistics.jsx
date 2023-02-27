import PropTypes from 'prop-types';
import { Item, List } from 'components/Statistics/Statistics.styled';

export function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  FeedbackPercentage,
}) {
  console.log(`📌  totalFeedback:`, totalFeedback);

  return (
    <div>
      <List>
        <Item>Good : {good}</Item>
        <Item>Neutral : {neutral}</Item>
        <Item>Bad : {bad}</Item>
        <Item>Total : {totalFeedback}</Item>
        <Item>Positive feedback : {FeedbackPercentage}%</Item>
      </List>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  FeedbackPercentage: PropTypes.number.isRequired,
};
