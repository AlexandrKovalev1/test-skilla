import axios from "axios";
let secondsInDay, dateStartDefaul, dateEndDefault;


const formatDate = (date) => {
    let formatedDate = [date.getFullYear(),
    '0' + (parseInt(date.getMonth() + 1)),
    '0' + date.getDate()].map((item, index) => {
        return index === 0 ? item : item.slice(-2);
    }).join('-');

    return formatedDate;
}

secondsInDay = 84000 * 1000;

dateStartDefaul = formatDate(new Date(new Date() - secondsInDay * 2));

dateEndDefault = formatDate(new Date());

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.skilla.ru/mango/getList?',
    headers: {
        Authorization: 'Bearer testtoken',
    }
});



export const getCalls = (dataStart = dateStartDefaul, dataEnd = dateEndDefault) => {

    return instance.post(
        `date_start=${dataStart}&date_end=${dataEnd}&in_out=&limit=1500`, {})
        .then(response => response.data)

};

export const getCallsOnDays = (days = 3, dataEnd = formatDate(new Date())) => {
    let dataStart = new Date(new Date(dataEnd) - days * secondsInDay)

    return instance.post(
        `date_start=${formatDate(dataStart)}&date_end=${dataEnd}&in_out=&limit=200`, {})
        .then(response => response.data)
}


export const getVoiseRecord = (record, id) => {
    return axios.post(`https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${id}`, {}, {
        responseType: 'blob',
        headers: {
            Authorization: 'Bearer testtoken',
            'Content-Type': 'audio/mpeg'
        }
        
    }
    )
    
}




// MToxMDA2NzYxNToxNDMwMDM3NzExNzow 578