import NavItem from './NavItem/NavItem';
import classes from './Navbar.module.css';


const Navbar = (props) => {

    let navEl = props.navItems.map(element =>
        <NavItem
            key={element.id}
            path={element.path}
            icon={element.icon}
            title={element.header}
        />)

    return (
        <nav className={classes.nav__wrapper}>
            <div className={classes.container}>
                <ul className={classes.nav__list}>
                    {navEl}
                </ul>
                <div className={classes.button__block}>
                    <div className={classes.button}>
                        <span className={classes.button__heading}>Добавить заказ</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z" fill="#D8E4FB" fillOpacity="0.56" />
                        </svg>
                    </div>
                    <div className={classes.button}>
                        <span className={classes.button__heading}>Оплата</span>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM14.25 19.25H11.75V16.75H14.25V19.25ZM14.25 14.25H11.75V6.75H14.25V14.25Z" fill="#D8E4FB" fillOpacity="0.56" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;