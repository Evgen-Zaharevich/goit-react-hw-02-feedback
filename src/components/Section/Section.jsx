import { Title } from 'components/Section/Section.styled';

export function Section({ title, children }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
}
