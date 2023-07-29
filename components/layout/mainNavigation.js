import classes from './mainNav.module.css'
import Link from "next/link"

function MainNavigation() {
    return ( 
    <div className={classes.links}>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/users'>Users Dashboard</Link></li>
            <li><Link href='/admin/adminDashboard'>Admin Dashboard</Link></li>
            <li><Link href='/UserLogins'>User Login</Link></li>
        </ul>
    </div>
    )
}
export default MainNavigation