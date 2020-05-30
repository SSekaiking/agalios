import React from 'react';
import router from 'next/router';
import { auth } from '../firebase';
const withAuth = (Component, reverse = false) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if (authUser && !reverse) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                } else if (!authUser && reverse) {
                    this.setState({
                        status: 'NOT_SIGNED_IN'
                    });
                }
                else {
                    router.push('/');
                }
            });
        }
        renderContent() {
            const { status } = this.state;
            if (status == 'LOADING') {
                return <h1>Loading ......</h1>;
            } else if (status == 'SIGNED_IN') {
                return <Component {...this.props} />
            } else if (status == 'NOT_SIGNED_IN' && reverse) {
                return <Component {...this.props} />
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}
export default withAuth;