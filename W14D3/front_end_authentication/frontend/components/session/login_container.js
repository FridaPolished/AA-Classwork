import {login} from '../../actions/session';
import LogIn from './login';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDispatchToProps)(LogIn);