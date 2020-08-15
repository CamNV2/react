
import { useAdminAuth } from './index';
const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;