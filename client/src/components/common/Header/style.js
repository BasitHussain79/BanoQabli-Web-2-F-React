import styled from 'styled-components';
import bg from '../../../assets/img/bg.jpg';

export const MainHeader = styled.header`
  height: 30vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url(${bg}) no-repeat center center/cover;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;
