import axios from "axios";







const Calls = (props) => {
    axios.post('https://api.skilla.ru/mango/getList?date_start=2023-01-01&date_end=2023-02-03&in_out=', {}, {
       headers:{
         Authorization:'Bearer testtoken'
      }}).then(response => console.log(response))
    return (
        <div style={{}}>

        </div>
    )
}

export default Calls;