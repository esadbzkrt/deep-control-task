import './Header.scss'
import {TbMapSearch} from "react-icons/tb";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';


function Header(user) {

    function logout() {

    }

    return (
        <div className="header">
            <div className="header-left">
                <TbMapSearch/>
                <h1>Map App</h1>
            </div>

            <div className="header-right">
                <h5>username</h5>
                <div className="header-right-logout" onClick={logout}>
                    <BiLogOut/>
                    <h4>Logout</h4>
                </div>
            </div>

        </div>
    )
}

export default Header