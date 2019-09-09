import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../_actions/registrationActions';
import '../../../assets/css/loginRegisterForm.css';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

import {
    SUCCESSFULL,
    FAILED,
    DUPLICATE
} from '../../../_constants/registrationResult'
import RegisterForm from '../RegisterForm';

class Register extends React.Component {

    onSubmit = (formValues) => {
        document.getElementById('spinner-register').style.display = 'flex';
        this.props.registerUser(formValues);
    }

    handleRegistrationResult() {
        switch (this.props.registrationResult) {
            case DUPLICATE:
                toast.warn("This user name is already taken!");
                document.getElementById('spinner-register').style.display = 'none';
                break;
            case FAILED:
                toast.error("Errors occured! Registration failed!");
                document.getElementById('spinner-register').style.display = 'none';
                break;
            case SUCCESSFULL:
                toast.success("Registration is successfull!");
                document.getElementById('spinner-register').style.display = 'none';
                break;
            default:
                break;
        }
    }

    render() {
        this.handleRegistrationResult();
        return (
            <div>
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Sign Up
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="close-icon" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <RegisterForm onSubmit={this.onSubmit} >
                                    <div id="spinner-register" style={{ display: 'none', marginTop: '30px', justifyContent: 'center' }}>
                                        <ClipLoader
                                            sizeUnit={"px"}
                                            size={40}
                                            color={'#123abc'}
                                            loading={true}
                                        />
                                    </div>
                                </RegisterForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registrationResult: state.registrationResult
    }
}

export default connect(mapStateToProps, { registerUser })(Register);