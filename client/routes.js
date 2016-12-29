import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Admin from './components/Admin';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NoMatch from './components/NoMatch';
import GoogleMap from './components/GoogleMap';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import UserEvents from './components/UserEvents';
import UserEventCard from './components/UserEventCard';
import UserEvent from './components/UserEvent';
import AddEvent from './components/AddEvent';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path='contact' component={Contact} />
      <Route path="signup" component={SignUp} />
      <Route path="signin" component={SignIn} />
      <Route component={AuthenticatedRoutes}>
        <Route path='userEvents' component={UserEvents} />
        <Route path='userEvents/:id' component={UserEvent} />
        <Route path='addEvent' component={AddEvent} />
        <Route component={AdminRoutes}>
          <Route path="/admin" component={Admin} />
          {/* PROTECTED BY ADMIN ACCESS */}
        </Route>
      </Route>
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
