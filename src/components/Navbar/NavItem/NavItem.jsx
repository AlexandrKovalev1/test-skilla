import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';


const NavItem = (props) => {
    return (
        <li className={classes.list__item}>
            <NavLink to={props.path}
                className={({ isActive }) =>
                    isActive ? classes.active : undefined}
            >
                <div className={classes.item__wrapper}>
                    <div className={classes.current_regtangle}></div>
                    <div className={classes.item__icon}>
                        {props.icon}
                    </div>
                    <span className={classes.heading}>{props.title}</span>
                    <div className={classes.circle}></div>
                </div>
            </NavLink>
        </li>
    )
}

export default NavItem;