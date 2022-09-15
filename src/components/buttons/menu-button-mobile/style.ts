import styled from 'styled-components';

export const WarpperMobilebutton = styled.div`
  position: relative;
  height: max-content;
  display: flex;
  flex-direction: column;
  top: 450px;
  margin: auto;
`;
export const NavButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);

  p {
    display: none;
  }

  span {
    svg {
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.background};
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }
`;

export const ExtLink = styled.a`
  width: 70vw;
  margin: 10px auto;
  padding: 10px;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
}
`;

// export const ButtonWarpper = styled.div`
//   .dial-button {
//     --base-bg: #fff;
//     position: relative;
//
//     & > label:not(.dial-button__cloak) {
//       background: var(--base-bg);
//       border-radius: 50%;
//       display: block;
//       height: calc(var(--parent, 44) * 1px);
//       left: 50%;
//       position: absolute;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       width: calc(var(--parent, 44) * 1px);
//       z-index: 4;
//     }
//
//     & > input {
//       left: 50%;
//       position: absolute;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       z-index: 3;
//     }
//     & > :checked {
//       & ~ label:first-of-type {
//         --shadow-offset: 0;
//       }
//       & ~ button {
//         --opacity: 1;
//         --scale: 1;
//         --translation: calc((var(--parent) / 2) + (var(--child) / 2) + var(--radius));
//         z-index: 2;
//       }
//       & ~ .dial-button__cloak {
//         bottom: 0;
//         left: 0;
//         position: fixed;
//         right: 0;
//         top: 0;
//       }
//     }
//     button {
//       --opacity: 0;
//       --rotation: calc(var(--offset, 0) + ((var(--bounds) / var(--kids)) * var(--index))) --scale 0 --translation 0;
//       background: var(--base-bg);
//       border: 0;
//       border-radius: 100%;
//       height: calc(var(--child, 44) * 1px);
//       left: 50%;
//       position: absolute;
//       top: 50%;
//       opacity: var(--opacity);
//       transform: translate(-50%, -50%) rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation, 0) * 1px)) rotate(calc(var(--rotation) * -1deg)) scale((var(--scale, 1)));
//       transition: transform calc(var(--transition, 0.25) * 1s) calc((var(--delay, 0) * var(--index)) * 1s), opacity calc(var(--transition, 0.25) * 1s) calc((var(--delay, 0) * var(--index)) * 1s), box-shadow .1s;
//       width: calc(var(--child, 44) * 1px);
//     }
//   }
//
//   /**
//      * Theming
//      */
//
//   .dial-button button,
//   .dial-button label:first-of-type {
//     --shadow-offset: 4;
//     border: 2px solid black;
//     box-shadow: 0 calc(var(--shadow-offset, 0) * 1px) 0 0 #333;
//     cursor: pointer;
//     outline: transparent;
//   }
//   .dial-button button {
//     background: 'hsl(0, 0%, %s)'% (calc(var(--shade, 100) * 1%));
//     font-weight: bold;
//     &:hover {
//       --shade: 90;
//     }
//     &:active {
//       --shadow-offset: 0;
//     }
//   }
//   .dial-button :checked ~ label:first-of-type {
//     --rotation: -45;
//   }
//   .dial-button label:first-of-type {
//     background: 'hsl(%s, 100%, 50%)'% (var(--hue, 25));
//     svg {
//       height: 65%;
//       width: 65%;
//       fill: #fff;
//       top: 50%;
//       left: 50%;
//       position: absolute;
//       transform: translate(-50%, -50%) rotate(calc(var(--rotation, 0) * 1deg));
//       transition: transform 0.1s ease;
//     }
//   }
//   .dg.ac {
//     z-index: 9999 !important;
//   }
// `;
