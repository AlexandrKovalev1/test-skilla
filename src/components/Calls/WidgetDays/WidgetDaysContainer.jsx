import { connect } from "react-redux";
import WidgetDays from "./WidgetDays";
import { minusDay, plusDay, setDays } from "../../../redux/callsReducer";


let mapStateToProps = (state) => ({ days: state.calls.widgetDays.days });

const WidgetDaysContainer = connect(mapStateToProps,
    {
        plusDay,
        minusDay,
        setDays
    })(WidgetDays);

export default WidgetDaysContainer;