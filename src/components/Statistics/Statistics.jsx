import { Item, List } from 'components/Statistics/Statistics.styled';

export function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  FeedbackPercentage,
}) {
  return (
    <div>
      <List>
        <Item>Good : {good}</Item>
        <Item>Neutral : {neutral}</Item>
        <Item>Bad : {bad}</Item>
        <Item>Total : {totalFeedback}</Item>
        <Item>Positive feedback : {FeedbackPercentage}</Item>
      </List>
    </div>
  );
}
