
import avatar from '../../assets/avatar.png';
import worker from '../../assets/worker.png';
import classes from './Selectlist.module.css';
import { useState } from "react";


const menu = [
    {
        avatar: avatar,
        fullName: 'Упоров Кирилл',
        prof: 'Директор',
        from: 'Санкт-Петербург',
        phone: '8 (800) 333-17-21',
        email: 'hi@skilla.ru',
        departament: [
            {
                header: 'Операторы', users: [
                    { avatar: worker, fulname: 'Мирон Батонов', id: 1 },
                    { avatar: worker, fulname: 'Алексей Ильин', id: 2 },
                    { avatar: worker, fulname: 'Милана Константинопольская', id: 3 },
                ]
            },
            {
                header: 'Логисты', users: [
                    { avatar: worker, fulname: 'Александра Сизых', id: 4 },
                    { avatar: worker, fulname: 'Илья Алексеев', id: 5 },
                    { avatar: worker, fulname: 'Владимир Петров', id: 6 },
                ]
            },
            {
                header: 'Бухгалтеры', users: [
                    { avatar: worker, fulname: 'Полина Калинина', id: 7 },
                    { avatar: worker, fulname: 'Наталья Натальева', id: 8 },
                    { avatar: worker, fulname: 'Константин Константинопольский', id: 9 },
                ]
            },
        ]
    }
]


const UserInfo = (props) => {
    return (
        <li className={classes.user__info__wrapper}>
            <span className={classes.fullname}>
                <div>{props.fullName}</div>
                <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="#ADBFDF" />
                </svg></div>
            </span>
            <span>
                <div>{props.prof}</div>
                <div></div>
                <div>{props.from}</div>
            </span>
            <span>
                <div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.36 1.33333C2.4 1.92667 2.5 2.50667 2.66 3.06L1.86 3.86C1.58667 3.06 1.41333 2.21333 1.35333 1.33333H2.36ZM8.93333 9.34667C9.5 9.50667 10.08 9.60667 10.6667 9.64667V10.64C9.78667 10.58 8.94 10.4067 8.13333 10.14L8.93333 9.34667ZM3 0H0.666667C0.3 0 0 0.3 0 0.666667C0 6.92667 5.07333 12 11.3333 12C11.7 12 12 11.7 12 11.3333V9.00667C12 8.64 11.7 8.34 11.3333 8.34C10.5067 8.34 9.7 8.20667 8.95333 7.96C8.88667 7.93333 8.81333 7.92667 8.74667 7.92667C8.57333 7.92667 8.40667 7.99333 8.27333 8.12L6.80667 9.58667C4.92 8.62 3.37333 7.08 2.41333 5.19333L3.88 3.72667C4.06667 3.54 4.12 3.28 4.04667 3.04667C3.8 2.3 3.66667 1.5 3.66667 0.666667C3.66667 0.3 3.36667 0 3 0Z" fill="#ADBFDF" />
                </svg></div>
                <a href={`tel:+${props.phone}`}>{props.phone}</a>
            </span>
            <span>
                <div><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 0.666656H1.66659C0.933252 0.666656 0.339919 1.26666 0.339919 1.99999L0.333252 9.99999C0.333252 10.7333 0.933252 11.3333 1.66659 11.3333H12.3333C13.0666 11.3333 13.6666 10.7333 13.6666 9.99999V1.99999C13.6666 1.26666 13.0666 0.666656 12.3333 0.666656ZM12.3333 9.99999H1.66659V3.33332L6.99992 6.66666L12.3333 3.33332V9.99999ZM6.99992 5.33332L1.66659 1.99999H12.3333L6.99992 5.33332Z" fill="#ADBFDF" />
                </svg></div>
                <a href={`mailto:${props.email}`}>{props.email}</a>
            </span>
        </li>
    )
}

const Worker = (props) => {
    return (
        <li>
            <div>
                <img src={props.avatar} alt="" />
            </div>
            <div>{props.fullname}</div>
            <div>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z" fill="#0024CB" />
                </svg>
            </div>
        </li>
    )
}

const Department = (props) => {
    let workerEl = menu.map(item => item.departament.map(item => item.users.map(user =>
        <Worker
            avatar={user.avatar}
            fullname={user.fulname}
        />)))
    return (
        <li>
            <span className={classes.header}>{props.header}</span>
            <ul>
                {workerEl}
            </ul>
        </li>
    )
}



const SelectList = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

    let userSection = menu.map(item => <UserInfo
        fullname={item.fullName}
        prof={item.prof}
        from={item.from}
        phone={item.phone}
        email={item.email}

    />)
    return (
        <div className={classes.button__select}>
            <div onClick={toggleMenu} className={classes.user__tools}>
                <div>
                    <img src={avatar} className={classes.user__avatar} />
                </div>
                <div className={classes.row}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" />
                    </svg></div>
            </div>
            {isMenuOpen && (
                <ul className={classes.select__wrapper}>
                    {userSection}
                    <Department />
                </ul>
            )}
        </div>
    )
}

export default SelectList;

