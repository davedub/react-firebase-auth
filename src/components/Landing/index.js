import React from 'react';
import { withAuthorization } from '../Session';
import { PageTitle } from '../../constants/styles';

const Landing = () => (
  <div>
    <PageTitle>Landing</PageTitle>
    <p>The Landing Page is accessible by signed in users only.</p>
  </div>
);

const condition = (authUser) => !authUser;

export default withAuthorization(condition)(Landing);
