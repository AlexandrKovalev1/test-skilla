import { useState } from 'react';
import classes from './Calls.module.css'
import WidgetDaysContainer from './WidgetDays/WidgetDaysContainer';
import SearchItem from '../common/SearchItem/SearchItem';
import SelectItem from './Selectalls/SelectItem';
import CallItem from './CallItem/CallItem';
import Player from './CallItem/Player/Player';






const Calls = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen((isOpen) => !isOpen);


  const getIsSetValue = (arr) => {
    let even = (element) => element.selectValue;

    return arr.some(even);
  };


  const filterDataForType = (array, param) => {
    return array.filter(el => param !== '' ? el.in_out === +param : el)
  }

  let isSetValueSelect = getIsSetValue(props.selects);


  let selectItem = props.selects.map(item =>
    <SelectItem
      setFilterValue={props.setFilterValue}
      setValueSelect={props.setValueSelect}
      placeholder={item.placeholder}
      value={item.selectValue}
      options={item.params}
      id={item.id}
      key={item.id}
    />)


  let callElements = filterDataForType(props.callsData, props.filter).map(item =>
    <CallItem
      partnerId={item.partnership_id}
      getVoise={props.getVoise}
      voise={props.voise}
      status={item.status}
      inOut={item.in_out}
      fullDate={item.date}
      record={item.record}
      avatar={item.person_avatar !== '' ?
        item.person_avatar
        : 'https://lk.skilla.ru/img/noavatar.jpg'}

      fromSite={item.from_site}

      contactName={item.contact_name}
      contactCompany={item.contact_company}
      number={item.in_out ? item.from_number : item.to_number}
      source={item.source}
      time={item.time}
      key={item.id}

    />



  )

  return (
    <div >

      <section className={classes.section__settings}>
        <div className={classes.container}>
          <div className={classes.balance__and__days}>
            <div className={classes.balance}>
              <div className={classes.balance__header}>
                Баланс: <span className={classes.balance__value}> 999р</span>
              </div>
              <div className={classes.balance__icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z" fill="#005FF8" />
                </svg>

              </div>
            </div>
            <div className={classes.separator}></div>
            <div className={classes.days}>
              <WidgetDaysContainer />
            </div>
          </div>
          <div className={classes.block__settings}>
            <div className={classes.search__item}>
              <div
                className={classes.search__item__wrapper}
                onBlur={toggleSearch}
                onClick={isSearchOpen ? null
                  : toggleSearch}>
                <SearchItem />
              </div>
              {!isSearchOpen && <div className={classes.search__heading}>
                Поиск по звонкам
              </div>}
            </div>
            <ul className={classes.setting__items__list}>
              {isSetValueSelect
                ? <li className={classes.item__clearSetting} onClick={() => {
                  props.resetFilters()
                  props.setFilterValue('')
                }}>
                  <div className={classes.item__heading}>
                    Сбросить фильтры
                  </div>
                  <div><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.875 1.00625L7.99375 0.125L4.5 3.61875L1.00625 0.125L0.125 1.00625L3.61875 4.5L0.125 7.99375L1.00625 8.875L4.5 5.38125L7.99375 8.875L8.875 7.99375L5.38125 4.5L8.875 1.00625Z" fill="#ADBFDF" />
                  </svg></div>
                </li>
                : null}
              {selectItem}
            </ul>
          </div>
        </div>

      </section >
      <section className={classes.section__content}>
        <div className={classes.container}>
          <div className={classes.content__data}>
            <table className={classes.table__data}>
              <thead className={classes.table__data__header}>
                <tr className={classes.table__header__data__row}>
                  <th>Тип</th>
                  <th>Время</th>
                  <th>Сотрудник</th>
                  <th>Звонок</th>
                  <th>Источник</th>
                  <th>Оценка</th>
                  <th>Длительность</th>
                </tr>

              </thead>
              <tbody className={classes.body__data}>
                {callElements}
              </tbody>
            </table>

          </div>
          <div>
          </div>
        </div>
      </section>

    </div >
  )
}

export default Calls;

