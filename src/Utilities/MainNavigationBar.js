import classes from './MainNavigationBar.module.css'
import { Link } from 'react-router-dom'


function MainNavigationBar(){
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.logo}>
                <li><Link to='/' className={classes.logo}>Simple Notes</Link></li>
                </div>
            </div>
        </section>
    );
}

export default MainNavigationBar;