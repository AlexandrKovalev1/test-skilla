import { connect } from "react-redux";
import WidgetDays from "./WidgetDays";
import { minusDay, plusDay, setDays, setCallsData, setFromAndToData } from "../../../redux/callsReducer";
import React from "react";
import { getCalls } from "../../../serverAPI/api";

class WidgetDaysContainer extends React.Component {



    onShowCallsFromData = () => {
        if (this.props.dateFrom.length >= 10 && this.props.dateTo.length >= 10) {
            getCalls(this.props.dateTo, this.props.dateFrom)
                .then(response => { this.props.setCallsData(response.results) })
        }

    }



    render() {
        return (
            <WidgetDays
                setDays={this.props.setDays}
                days={this.props.days}
                onShowCallsFromData={this.onShowCallsFromData.bind(this)}
                dateFrom={this.props.dateFrom}
                dateTo={this.props.dateTo}
                setFromAndToData={this.props.setFromAndToData}
            />
        )
    }


}


let mapStateToProps = (state) => ({
    days: state.calls.widgetDays.days,
    dateFrom: state.calls.dateFrom,
    dateTo: state.calls.dateTo,
});



export default connect(mapStateToProps,
    {
        plusDay,
        minusDay,
        setDays,
        setCallsData,
        setFromAndToData

    })(WidgetDaysContainer);;