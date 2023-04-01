import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #root-wrapper{
    overflow-x:hidden;
  }
  body {
    background: ${({ theme }) => theme.colors.primary};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.secondary} !important;
    font-family:  'Inter', sans-serif;
    & button{
      font-family:  'Inter', sans-serif;
    }
    margin:0;
    &::-webkit-scrollbar-track
    {
      background-color: ${({ theme }) => {
        if (theme.name === 'dark') {
          return '#F5F5F5';
        } else {
          return '#2e2e2e';
        }
      }};
      
    }

    &::-webkit-scrollbar
    {
      width: 15px;
      background-color: ${({ theme }) => {
        if (theme.name === 'dark') {
          return '#F5F5F5';
        } else {
          return '#2e2e2e';
        }
      }};
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: ${({ theme }) => theme.colors.tertiary};;
          border-radius:10px;
          border: 3px solid ${({ theme }) => {
            if (theme.name === 'dark') {
              return '#F5F5F5';
            } else {
              return '#2e2e2e';
            }
          }};
      }
  }
  button {
    font-family: 'Inter', sans-serif;
    text-transform: capitalize;
  }
`;
