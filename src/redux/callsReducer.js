const PLUS_DAY = 'PLUS-DAY';
const MINUS_DAY = 'MINUS-DAY';
const SET_DAYS = 'SET-DAYS';
const SET_VALUE_SELECT = 'SET-VALUE-SELECT';
const RESET_FILTERS = 'RESET-FILTERS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_CALLS_DATA = 'SET-CALLS-DATA';
const SET_FROM_AND_TO_DATA = 'SET-FROM-AND-TO-DATA';
const SET_PARAMS_TO_FILTER = 'SET_PARAMS_TO_FILTER';
const SET_VOISE = 'SET-VOISE';


let dataFrom = new Date();
let formatedDateFrom = [dataFrom.getFullYear(),
'0' + (dataFrom.getMonth() + 1),
'0' + dataFrom.getDate()].map((item, index) => index === 0 ? item : item.slice(-2)).join('-');

let dateTo = [dataFrom.getFullYear(),
'0' + (dataFrom.getMonth() + 1),
'0' + (dataFrom.getDate() - 1)].map((item, index) => index === 0 ? item : item.slice(-2)).join('-');





let initialState = {
    callsData: [
        {
            abuse: [],
            contact_company: "",
            contact_name: "жил был",
            date: "2023-02-03 17:00:50",
            date_notime: "2023-02-03",
            disconnect_reason: "",
            errors: [],
            from_extension: "671",
            from_number: "sip**r_**",
            from_site: 0,
            id: 5960366,
            in_out: 0,
            is_skilla: 0,
            line_number: "sip**se**",
            partner_data: {
                id: '578',
                name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
                phone: '74951205096'
            },
            partnership_id: "578",
            person_avatar: "https://lk.skilla.ru/img/noavatar.jpg",
            person_id: 4730,
            person_name: "**",
            person_surname: "**",
            record: "MToxMDA2NzYxNToxNDMwMDM3NzExNzow",
            results: [],
            source: "Rabota.ru",
            stages: [],
            status: "Дозвонился",
            time: 7,
            to_extension: "",
            to_number: "790**49**",
        },
        {
            abuse: [],
            contact_company: "Compani",
            contact_name: "",
            date: "2023-02-03 20:00:22",
            date_notime: "2023-02-03",
            disconnect_reason: "",
            errors: [],
            from_extension: "105",
            from_number: "795**16**",
            from_site: 1,
            id: 5960786,
            in_out: 0,
            is_skilla: 0,
            line_number: "sip**se**",
            partner_data: {
                id: "578",
                name: "ООО \"ГРУЗЧИКОВ-СЕРВИС СПБ\"",
                phone: "74951205096",
            },
            partnership_id: "578",
            person_avatar: '',
            person_id: 2731,
            person_name: "**",
            person_surname: "**",
            record: "MToxMDA2NzYxNToxNDMwMDM3NzExNzow",
            results: [],
            source: "",
            stages: [],
            status: "Не дозвонился",
            time: 16,
            to_extension: "",
            to_number: "",
        },
        {
            abuse: [],
            contact_company: "",
            contact_name: "",
            date: "2023-02-03 20:00:22",
            date_notime: "2023-02-03",
            disconnect_reason: "",
            errors: [],
            from_extension: "105",
            from_number: "sip**10**",
            from_site: 0,
            id: 5960780,
            in_out: 1,
            is_skilla: 0,
            line_number: "sip**se**",
            partner_data: {
                id: "578",
                name: "ООО \"ГРУЗЧИКОВ-СЕРВИС СПБ\"",
                phone: "74951205096",
            },
            partnership_id: "578",
            person_avatar: "https://lk.skilla.ru/img/noavatar.jpg",
            person_id: 2731,
            person_name: "**",
            person_surname: "**",
            record: "MToxMDA2NzYxNToxNDMwMDM3NzExNzow",
            results: [],
            source: "",
            stages: [],
            status: "Пропущенный",
            time: 16,
            to_extension: "",
            to_number: "795**16**",
        },
        {
            abuse: [],
            contact_company: "",
            contact_name: "",
            date: "2023-02-03 20:00:22",
            date_notime: "2023-02-03",
            disconnect_reason: "",
            errors: [],
            from_extension: "105",
            from_number: "sip**10**",
            from_site: 0,
            id: 5960784,
            in_out: 1,
            is_skilla: 0,
            line_number: "sip**se**",
            partner_data: {
                id: "578",
                name: "ООО \"ГРУЗЧИКОВ-СЕРВИС СПБ\"",
                phone: "74951205096",
            },
            partnership_id: "578",
            person_avatar: "https://lk.skilla.ru/img/noavatar.jpg",
            person_id: 2731,
            person_name: "**",
            person_surname: "**",
            record: "MToxMDA2NzYxNToxNDMwMDM3NzExNzow",
            results: [],
            source: "",
            stages: [],
            status: "Дозвонился",
            time: 16,
            to_extension: "",
            to_number: "795**16**",
        },
    ],
    widgetDays: {
        days: 3,
    },
    selects: [
        {
            id: 1,
            selectValue: '',
            placeholder: 'Все типы',
            params: [
                { value: '', label: 'Все звонки ' },
                { value: 1, label: ' Входящие ' },
                { value: 0, label: 'Исходящие' },
            ]
        },
        {
            id: 2,
            selectValue: null,
            placeholder: 'Все сотрудники',
            params: [
                {
                    abuse: [],
                    contact_company: "",
                    contact_name: "",
                    date: "2023-02-03 16:28:09",
                    date_notime: "2023-02-03",
                    disconnect_reason: "",
                    errors: [],
                    from_extension: "",
                    from_number: "sip**r_**",
                    from_site: 0,
                    id: 5960238,
                    in_out: 0,
                    is_skilla: 0,
                    line_number: "sip**se**",
                    partner_data: {
                        id: '578',
                        name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
                        phone: '74951205096'
                    },
                    partnership_id: "578",
                    person_avatar: "",
                    person_id: 4,
                    person_name: "Константин",
                    person_surname: "Крылов",
                    record: "",
                    results: [],
                    source: "",
                    stages: [],
                    status: "Не дозвонился",
                    time: 0,
                    to_extension: "",
                    to_number: "791**19**",
                }, {
                    abuse: [],
                    contact_company: "",
                    contact_name: "",
                    date: "2023-02-03 16:28:09",
                    date_notime: "2023-02-03",
                    disconnect_reason: "",
                    errors: [],
                    from_extension: "",
                    from_number: "sip**r_**",
                    from_site: 0,
                    id: 5960239,
                    in_out: 0,
                    is_skilla: 0,
                    line_number: "sip**se**",
                    partner_data: {
                        id: '578',
                        name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
                        phone: '74951205096'
                    },
                    partnership_id: "578",
                    person_avatar: "",
                    person_id: 0,
                    person_name: "Полина",
                    person_surname: "Завтра",
                    record: "",
                    results: [],
                    source: "",
                    stages: [],
                    status: "Не дозвонился",
                    time: 0,
                    to_extension: "",
                    to_number: "791**19**",
                }
            ]
        },
        {
            id: 3,
            selectValue: null,
            placeholder: 'Все звонки',
            params: [
                { value: '', label: 'Все звонки', type: null },
                { value: 'clients', label: 'Все клиенты', type: null },
                { value: 'new_client', label: 'Новые клиенты', type: 'new' },
                { value: 'workers', label: 'Все исполнители', type: null },
                { value: 'app', label: 'Через приложение', type: null },
                { value: 'others', label: 'Прочие звонки', type: null },
            ]
        },
        {
            id: 4,
            selectValue: null,
            placeholder: 'Все источники',
            params: [
            ]
        },
        {
            id: 5,
            selectValue: null,
            placeholder: 'Все оценки',
            params: [
                { value: 'all', label: 'Всеоценки' },
                { value: 'recognise', label: 'Распознать' },
                { value: 'no', label: 'Скрипт не использован' },
                { value: 'bad', label: <div className="raiting__bad" >Плохо</div> },
                { value: 'good', label: <div className="raiting__good">Хорошо</div> },
                { value: 'perfect', label: <div className="raiting__perfect">Отлично</div> },
                {
                    value: '1point', label: <div className="raiting__point">
                        <div className="raiting__red__point">
                        </div>
                    </div>
                },
                {
                    value: '2point', label: <div className="raiting__point">
                        <div className="raiting__grey__point">
                        </div>
                        <div className="raiting__grey__point">
                        </div>
                    </div>
                },
                {
                    value: '3point', label: <div>
                        <div className="raiting__point">
                            <div className="raiting__green__point">
                            </div>
                            <div className="raiting__green__point">
                            </div>
                            <div className="raiting__green__point">
                            </div>
                        </div>
                    </div>
                }
            ]
        },
        {
            id: 6,
            selectValue: null,
            placeholder: 'Все ошибки',
            params: [
                { value: 'all', label: 'Все ошибки' },
                { value: 'hello', label: 'Приветствие' },
                { value: 'name', label: 'Имя' },
                { value: 'price', label: 'Цена' },
                { value: 'sale', label: 'Скидка' },
                { value: 'pre-order', label: 'Предзаказ' },
                { value: '', label: 'Благодарность' },
                { value: 'stop', label: 'Стоп слова' },
            ]
        },


    ],

    isFetching: false,
    filterParamsForType: '',
    dateFrom: formatedDateFrom,
    dateTo: dateTo,
    voise: '',

}




const callsReducer = (state = initialState, action) => {

    if (action.type === PLUS_DAY) {
        return {
            ...state,
            widgetDays: {
                ...state.widgetDays,
                days: state.widgetDays.days + 1,
            },

        }

    }


    if (action.type === MINUS_DAY) {

        return {
            ...state,
            widgetDays: {
                ...state.widgetDays,
                days: state.widgetDays.days - 1,
            },

        }
    }

    if (action.type === SET_DAYS) {

        return {
            ...state,
            widgetDays: {
                ...state.widgetDays,
                days: action.days,
            },

        }
    }

    if (action.type === SET_VALUE_SELECT) {
        return {
            ...state,
            selects: state.selects.map(select => {
                if (select.id === parseInt(action.id)) {
                    return { ...select, selectValue: action.value }
                }

                return select;
            })
        }
    }

    if (action.type === RESET_FILTERS) {
        return {
            ...state,
            selects: state.selects.map(select => ({ ...select, selectValue: '' }))
        }
    }

    if (action.type === SET_IS_FETCHING) {
        return { ...state, isFetching: action.isFetching };
    }

    if (action.type === SET_CALLS_DATA) {
        return { ...state, callsData: [...action.data] }
    }

    if (action.type === SET_FROM_AND_TO_DATA) {
        return { ...state, dateFrom: action.from, dateTo: action.to }
    }

    if (action.type === SET_PARAMS_TO_FILTER) {
        return {
            ...state, filterParamsForType: action.parametr
        }
    }

    if (action.type === SET_VOISE) {
        return{...state, voise:action.voise}
    }

    return state;

}

export const SetVoise = (voise) =>({type:SET_VOISE,voise})
export const setFilterValue = (parametr) => ({ type: SET_PARAMS_TO_FILTER, parametr })
export const setFromAndToData = (from, to) => ({ type: SET_FROM_AND_TO_DATA, from, to });
export const setCallsData = (data) => ({ type: SET_CALLS_DATA, data });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setValueSelect = (id, value) => ({ type: SET_VALUE_SELECT, id, value })
export const plusDay = () => ({ type: PLUS_DAY });
export const minusDay = () => ({ type: MINUS_DAY });
export const setDays = (days) => ({ type: SET_DAYS, days })
export const resetFilters = () => ({ type: RESET_FILTERS })


export default callsReducer;