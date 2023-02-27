import PropTypes from 'prop-types';
import { Text } from 'components/Notification/Notification.styled';

export function Notification({ massage }) {
  return <Text>{massage}</Text>;
}

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
