import { useState } from "react";
import classes from './InputDate.module.css'


const InputDate = (props) => {
    let [inputValues, setInputValues] = useState({
        dayFrom: '',
        monthFrom: '',
        yearFrom: '',
        dayTo: '',
        monthTo: '',
        yearTo: ''
    });

    const formatInput = (value) => {
        if (isNaN(value) && +value !== 0) {
            return '';
        }
        return value;
    }

    function nextJumpImput(x) {
        let ml = ~~x.maxLength;
        if (ml && x.value.length >= ml) {
            do {
                x = x.nextSibling;
            }
            while (x && !(/text/.test(x.type)));
            if (x && /text/.test(x.type)) {
                x.focus();
            }
        }
    }

    function onChangeHandler(e) {
        setInputValues({
            ...inputValues, [e.target.name]: formatInput(e.target.value)
        })
    }


    function onSubmitHandler(e) {
        e.preventDefault();
        let dateFrom = `${inputValues.yearFrom}-${inputValues.monthFrom}-${inputValues.dayFrom}`;
        let dateTo = `${inputValues.yearTo}-${inputValues.monthTo}-${inputValues.dayTo}`;
        props.setFromAndToData(dateFrom, dateTo);
        props.toggleData();
        setTimeout(props.onShowCallsFromData, 1);
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <input
                    className={classes.input__twoSimbol}
                    placeholder="__"
                    type="text"
                    maxLength={2}
                    size={2}
                    name="dayTo"
                    value={inputValues.dayTo}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />

                <input
                    className={classes.input__twoSimbol}
                    placeholder="__"
                    type="text"
                    maxLength={2}
                    size={2}
                    name="monthTo"
                    value={inputValues.monthTo}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />

                <input
                    className={classes.input__fourSimbol}
                    placeholder="____"
                    type="text"
                    maxLength={4}
                    size={4}
                    name="yearTo"
                    value={inputValues.yearTo}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />
                <small>-</small>

                <input

                    className={classes.input__twoSimbol}
                    placeholder="__"
                    type="text"
                    name="dayFrom"
                    maxLength={2}
                    size={2}
                    value={inputValues.dayFrom}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />

                <input
                    className={classes.input__twoSimbol}
                    placeholder="__"
                    type="text"
                    name="monthFrom"
                    maxLength={2}
                    size={2}
                    value={inputValues.monthFrom}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />

                <input
                    className={classes.input__fourSimbol}
                    placeholder="____"
                    type="text"
                    maxLength={4}
                    size={4}
                    name="yearFrom"
                    value={inputValues.yearFrom}
                    onChange={onChangeHandler}
                    onKeyUp={(e) => { nextJumpImput(e.target) }}
                />

                <button className={classes.calendar__icon} >
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#ADBFDF" />
                    </svg>
                </button>

            </form>

        </div>
    )
}



export default InputDate;