import styled from 'styled-components';
import { datalimentaire } from '../../styles';
import { device } from '../../styles/breakpoints';
import px2vw from '../../utils/px2vw';

// get theme from env var or default to datalimentaire
// const theme = industries ;

// const theme = instance.conf?.theme?.name === 'Industries' ? industries : datalimentaire;

export const Panel = styled.div`
  display: none;

  display: flex;
  flex-flow: column nowrap;
  padding-top: ${px2vw(40)};

  @media ${device.lg} {
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: ${datalimentaire.colors.secondary};
    top: 0;
    bottom: 0;
    width: 33vw;
    height: 100%;
  }
`;
