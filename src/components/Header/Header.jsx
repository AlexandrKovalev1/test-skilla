import ProfileToolsContainer from '../../components/ProfileTools/ProfileToolsContainer';
import classes from './Header.module.css';
import StatusBarItem from './StatusBarItem/StatusBarItem';


const Header = (props) => {

    let pre = Math.round(100 - ((20 / 30) * 100));

    return (
        <header className={classes.header__wrapper}>
            <div className={classes.container}>
                <div className={classes.inform}>
                    <div className={classes.current_day}>Среда , 13 окт
                    </div>
                    <div className={classes.statusbar__block}>
                        <StatusBarItem heading='Новые звонки'
                            status='20 из 30 шт'
                            bgcolor='#28A879'
                            completed={pre} />
                        <StatusBarItem heading='Качество разговоров '
                            status='40%'
                            bgcolor='#FFD500'
                            completed='40' />
                        <StatusBarItem heading='Конверсия в заказ '
                            status='67%'
                            bgcolor='#EA1A4F'
                            completed='67' />
                    </div>
                </div>
                <div className={classes.section__tools}>
                    <div className={classes.search}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#ADBFDF" />
                        </svg>
                    </div>
                    <div className={classes.select}>ИП Сидорова Александра Михайловна</div>

                </div>
                <div className={classes.user__tools}><ProfileToolsContainer /></div>
            </div>
        </header>
    )
}

export default Header;