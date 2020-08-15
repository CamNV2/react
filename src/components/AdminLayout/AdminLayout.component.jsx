import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import VerticalNav from './VerticalNav';


const AdminLayout = props => {

    return (
        <div className="adminLayout">

            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li>
                                <span className="signOut" onClick={() => auth.signOut()}>
                                    <center>Sign Out</center>
                                </span>
                            </li>
                        </ul>
                    </VerticalNav>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>

        </div>
    );
};

export default AdminLayout;