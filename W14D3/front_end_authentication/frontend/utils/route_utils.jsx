import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';


const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
    path={path}
    render={props => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
    />
);

const Protected = ({loggedIn, path, component: Component}) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? <Component  {...props} /> : <Redirect to="/signup" />
        )}
    />
);
// Creating a Boolean Route 
//Options: 
//have a boolean value passed in as part of the props just as we
//do with LoggedIn ? instead of passing it into the a mapStateToProps
//use a strict path so that it will only go to that specific route?
//

// const Bool = () => {
//     <Route 
//         path
//     />
// }


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));