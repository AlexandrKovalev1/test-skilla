import classes from './StatusBar.module.css';
import ProgressBar from "../Progressbar/Progressbar";



const StatusBarItem = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.heading}>{props.heading} <span style={{color:props.bgcolor}}>{props.status}</span></div>
            <ProgressBar bgcolor={props.bgcolor} completed={props.completed}/>
        </div>
    )
}

export default StatusBarItem;