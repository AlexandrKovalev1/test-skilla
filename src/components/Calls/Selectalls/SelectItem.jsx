import './SelectItem.css'
import Select from "react-select";



const SelectItem = (props) => {

    let options = props.options.map(item => ({
        value: Object.keys(item).length > 10 ? item.person_id : item.value,
        label: Object.keys(item).length > 10 ? <div className='persons'>
            <img className='person__avatar' src={item.person_avatar
                ? item.person_avatar
                : 'https://lk.skilla.ru/img/noavatar.jpg'
            } alt="" />
            <span>{`${(item.person_name === '' || item.person_name === '**') ? 'Имя не указано или скрыто' : item.person_name
                } ${item.person_surname[0]}.`}</span>
        </div>
            : item.type ? <div>
                <span>{item.label}</span>< div className='new__component'></div>
            </div>
                : item.label,
        id: props.id,
    }))


    return <li className='list__item'>

        <Select
            value={props.value}
            placeholder={props.placeholder}
            isOptionSelected={true}
            classNamePrefix='custom_prefix'
            isSearchable={false}
            onChange={(e) => {
                props.setValueSelect(e.id, e)
                props.setFilterValue(e.value)
            }}
            options={options}
        // menuIsOpen={true}
        />
    </li >;
}



export default SelectItem;


