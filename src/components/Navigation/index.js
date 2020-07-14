import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { MainNavBar, NavDiv, NavBarItem } from '../../constants/styles';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <NavDiv>
    <MainNavBar>
      <NavBarItem>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </NavBarItem>
      <NavBarItem>
        <SignOutButton />
      </NavBarItem>
    </MainNavBar>
  </NavDiv>
);

const NavigationNonAuth = () => (
  <NavDiv>
    <MainNavBar>
      <NavBarItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </NavBarItem>
    </MainNavBar>
  </NavDiv>
);

export default Navigation;
