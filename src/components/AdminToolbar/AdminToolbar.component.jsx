import React from 'react';
import { Link } from 'react-router-dom';
import './AdminToolbar.style.scss';
import { useSelector } from 'react-redux'
import { checkUserIsAdmin } from '../../redux/admin/adminUtils';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})
const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) return null;

    return (
        <div className="adminToolbar">
            <ul>
                <li>
                    <Link to="/admin">
                        My Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default AdminToolbar;
