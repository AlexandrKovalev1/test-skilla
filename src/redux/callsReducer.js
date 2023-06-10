import axios from 'axios';

let initialState = {
    abuse: [],
    contact_company: "",
    contact_name: "",
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
    source: "",
    stages: [],
    status: "Дозвонился",
    time: 7,
    to_extension: "",
    to_number: "790**49**",
}

const callsReducer = (state = initialState, action) => {
    return state;

}


export default callsReducer;