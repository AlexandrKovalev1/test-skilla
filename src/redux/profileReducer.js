import avatar from '../assets/avatar.png';
import worker from '../assets/worker.png';


let initialState = {
    avatar: avatar,
    fullname: 'Упоров Кирилл',
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
    ],
}


const profileReducer = (state = initialState, action) => {
    return state;
}


export default profileReducer;