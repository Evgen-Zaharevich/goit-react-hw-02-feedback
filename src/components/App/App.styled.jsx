import styled from 'styled-components';
import { SiCoffeescript as TitleIcon } from 'react-icons/si';

export const SiCoffeescript = styled(TitleIcon)`
  text-shadow: 10px 10px 5px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 34px 30px rgba(0, 0, 0, 0.1);
`;

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  letter-spacing: 0.03em;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;

  margin: 50px 0px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  color: white;
  font-size: 100px;

  margin-bottom: 50px;

  text-shadow: 10px 10px 5px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 34px 30px rgba(0, 0, 0, 0.1);
`;
