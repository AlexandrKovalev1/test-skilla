import { useState } from 'react';
import classes from './HeaderSelect.module.css';

const HeaderSelect = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

    return (
        <div className={classes.wrapper} onClick={toggleMenu} >
            <div className={classes.select__heading}>
                ИП Сидорова Александра Михайловна
            </div>
            <div >
                {isMenuOpen ?
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="#002CFB" />
                    </svg>

                    : <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" />
                    </svg>}
            </div>
        </div>
    )
}

export default HeaderSelect;