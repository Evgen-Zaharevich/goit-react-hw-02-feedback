import PropTypes from 'prop-types';

import { Title } from 'components/Section/Section.styled';

export function Section({ title, children }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
