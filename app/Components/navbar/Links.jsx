'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
function Links() {
    const pathName = usePathname();
    const [openNav, setopenNav] = useState(false)
    const LinkArr = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "MyCodes",
            path: "/mycodes"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Problemset",
            path: "/problems"
        }
    ];
    const session = true;
    const isLogin = true;
    const handleToggle = () => {
        setopenNav(openNav => !openNav);
      }
    return (
        <div className="navigation">
            <div className="navgationtoggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} size='2x' />
            </div>

            <div className={`navigationResponsive ${ openNav ? "visible" : ""}`}>
                <div className="closeNav" onClick={handleToggle}>
                    <FontAwesomeIcon icon={faClose} size='2x' />
                </div>
            <ul>
                {LinkArr.map((link, index) => (
                    <li key={index} >
                        <Link className={pathName === link.path && 'active'}  href={link.path}>{link.title}</Link>
                    </li>
                ))}
                { session ? (
                    <>
                    {isLogin && <li><Link className={pathName === '/admin' && 'active'}  href="/admin">Admin</Link></li>}
                    <button>Logout</button>
                    </>
                ):(
                    <li> <Link className={pathName === '/login' && 'active'}  href="/login">Login</Link> </li>
                )}
            </ul>
            </div>
        </div>
    );
}

export default Links;
