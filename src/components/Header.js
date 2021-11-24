import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './Header.module.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(e => !e)
    }
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <h2 className={classes.logo} >navbar</h2>

                <nav className={`${classes.nav} ${menuOpen ? classes.isMenu : " "}`}>
                    <ul>
                        <li>
                            <Link to='/page-one'>page one</Link>
                        </li>
                        <li>
                            <Link to='/page-two'>page two</Link>
                        </li>
                        <li>
                            <Link to='/page-three'>page three</Link>
                        </li>
                    </ul>
                    <Link to='/page-cta'><button>CTA page</button></Link>
                </nav>
                <div className={classes.toggle}>
                    {menuOpen ? <AiOutlineClose onClick={handleToggleMenu} /> : <BiMenuAltRight onClick={handleToggleMenu} />}

                </div>
            </div>

        </header>
    )
}

export default Header
