import React from 'react';
import './UserProfile.scss';
import userIMG from '../../assets/logo192.png';

const UserProfile = props => {
    const { currentUser } = props;
    const { displayName } = currentUser;

    return (
        <div className="userProfile">
            <ul>
                <li>
                    <div className="img">
                        <img src={userIMG} />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        hi, {displayName && displayName}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default UserProfile;