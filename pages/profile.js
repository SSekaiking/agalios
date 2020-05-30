import React from 'react'
import withAuth from '../helpers/withAuth';

function Profile() {
    return (
        <div>
            me
        </div>
    )
}

export default withAuth(Profile);
