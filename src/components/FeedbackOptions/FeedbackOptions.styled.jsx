import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 60px;

  width: 170px;
  height: 50px;

  border-radius: 10px;
  border: 3px solid white;

  background-color: inherit;
  color: white;

  font-size: 25px;
  cursor: pointer;
  transition-duration: 100ms;

  text-shadow: 2px 2px 1px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 34px 30px rgba(0, 0, 0, 0.1);

  box-shadow: 4px 4px 5px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 34px 30px rgba(0, 0, 0, 0.1);

  transition-duration: 100ms;

  &:hover {
    box-shadow: 7px 7px 5px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
      0px 34px 30px rgba(0, 0, 0, 0.1);
    transform: translate(-4px, -4px);
    &:active {
      transform: translateY(0px);
      box-shadow: 4px 4px 5px black, 0px 14px 10px rgba(0, 0, 0, 0.15),
        0px 34px 30px rgba(0, 0, 0, 0.1);
      transition-duration: 100ms;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin: 40px 0px;
`;
