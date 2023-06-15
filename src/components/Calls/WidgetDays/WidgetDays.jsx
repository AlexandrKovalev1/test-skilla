import { useState } from 'react';
import classes from './WidgetDays.module.css'


const WidgetDays = (props) => {


    const getUsers = (days) => {

    }

    const daysOfCurrentMonth = () => {

        let currentMonth = new Date().getMonth();
        let daysOfFebriary = new Date(new Date().getFullYear(), 2, 0);

        switch (currentMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                return daysOfFebriary;
            default:
                return 30;


        }
    }

    const daysOfCurrentYear = () => {
        let daysOfCurrentFebriary = new Date(new Date().getFullYear(), 2, 0);
        if (daysOfCurrentFebriary === 29) {
            return 366;
        } else {
            return 365;
        }
    }


    const [isDataOpen, setIsDataOpen] = useState(false);
    const toggleData = () => setIsDataOpen((isOpen) => !isOpen);

    const [isNumPress, setIsDataPres] = useState(false);
    const toggleDays = () => setIsDataPres((isPress) => !isPress);

    const setDays = (event) => {
        let key = event.keyCode;
        let num = event.target.value;

        if (key === 13) {
            toggleData();
            toggleDays();
        }

        if (num !== '' && num > 0 && num < 366 && key === 13) {
            props.setDays(parseInt(num));
        }

        if (num > 365) {
            props.setDays(365);
        }

        if (num < 1) {
            props.setDays(1);
        }


    }

    function formatTitle(number) {
        if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'дней';
        let last_num = number % 10;
        if (last_num === 1) return 'день';
        if ([2, 3, 4].includes(last_num)) return 'дня';
        if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'дней';
    }

    return (
        <div className={classes.widget__wrapper}>
            <div className={classes.body__widget}>
                <div onClick={props.minusDay} className={classes.button}> {props.days !== 1 ?
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z" fill="#ADBFDF" />
                    </svg>
                    :
                    null}
                </div>
                <div className={classes.content} onClick={toggleData} >
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#ADBFDF" />
                    </svg>

                    <div className={classes.value}>{`${props.days} ${formatTitle(props.days)}`}</div>
                </div>
                <div onClick={props.plusDay} className={classes.button}>
                    {props.days !== 365 ? <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z" fill="#ADBFDF" />
                    </svg>
                        :
                        null}
                </div>
            </div>
            {isDataOpen && <div className={classes.select__data} onMouseLeave={() => {
                toggleData();
                if (isNumPress) toggleDays();
            }}>
                <ul className={classes.select__list}>
                    <li className={classes.select__item}>
                        <div className={classes.element__days}>
                            {!isNumPress ?
                                <div onClick={toggleDays}>
                                    {`${props.days} ${formatTitle(props.days)}`}
                                </div>
                                :
                                <div >
                                    <input type={'number'} autoFocus={true}
                                        tabIndex={0}
                                        onKeyDown={setDays}
                                        className={classes.element__days__input} />
                                    {formatTitle(props.days)}
                                </div>
                            }

                        </div>
                    </li>
                    <li className={classes.select__item} onClick={() => { props.setDays(7) }}>
                        Неделя
                    </li>
                    <li className={classes.select__item} onClick={() => {
                        props.setDays(daysOfCurrentMonth())
                    }}>
                        Месяц
                    </li>
                    <li className={classes.select__item} onClick={() => { props.setDays(daysOfCurrentYear()) }}>
                        Год
                    </li>
                    <li className={classes.select__item__inputs}>
                        <span>Указать даты</span>
                        <div className={classes.inputs__block}>
                            <div>
                                __.__.__-__.__.__
                            </div>
                            <div className={classes.calendar__icon}>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#ADBFDF" />
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>}
        </div>
    )
}


export default WidgetDays;