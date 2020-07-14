import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomeButton, Heading, AppTitle } from '../../constants/styles';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Heading>
            <AppTitle>My Cool App</AppTitle>
          </Heading>
          <Navigation authUser={this.state.authUser} />
          <br />
          <HomeButton>Home Button</HomeButton>

          <Route path={ROUTES.LANDING} component={LandingPage} exact="true" />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} exact="true" />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
            exact="true"
          />
          <Route path={ROUTES.HOME} component={HomePage} exact="true" />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} exact="true" />
          <Route path={ROUTES.ADMIN} component={AdminPage} exact="true" />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
