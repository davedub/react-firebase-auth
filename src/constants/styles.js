import styled from 'styled-components';

export const HomeButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export const Heading = styled.div({
  background: 'palevioletred',
  height: '10vh',
  width: '100%',
  padding: 0,
  margin: 0,
  display: 'inline-block',
});

export const AppTitle = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'papayawhip',
});

export const PageTitle = styled.h1({
  fontSize: '2.5em',
  textAlign: 'center',
  color: 'darkblue',
});

export const NavDiv = styled.div({
  background: 'lightgreen',
  display: 'flex',
  height: '14vh',
  width: '100%',
});

export const MainNavBar = styled.ul({
  display: 'flex',
  margin: '0 auto',
  width: '80%',
  justifyContent: 'space-between',
  color: '#fff',
  alignItems: 'center',
  padding: '10px',
  textDecoration: 'none',
  fontSize: '1.8em',
});

export const NavBarItem = styled.li({
  display: 'flex',
  padding: '10px',
  margin: '0 30px',
});
