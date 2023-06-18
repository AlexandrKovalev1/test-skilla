import React from "react";
import { connect } from "react-redux";
import Calls from "./Calls";
import { setValueSelect, resetFilters, setCallsData, setFilterValue } from "../../redux/callsReducer";
import { getCalls } from "../../serverAPI/api";

class CallsContainer extends React.Component {

    componentDidMount() {
        getCalls()
            .then(response => { this.props.setCallsData(response.results) })
    }


    render() {
        return (
            <Calls
                filter={this.props.filter}
                callsData={this.props.callsData}
                setValueSelect={this.props.setValueSelect}
                resetFilters={this.props.resetFilters}
                selects={this.props.selects}
                setCallsData={this.props.setCallsData}
                dateTo={this.props.dateTo}
                dateFrom={this.props.dateFrom}
                setFilterValue={this.props.setFilterValue}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    selects: state.calls.selects,
    callsData: state.calls.callsData,
    dateTo: state.calls.dateTo,
    dateFrom: state.calls.dateFrom,
    filter: state.calls.filterParamsForType
});

export default connect(mapStateToProps, { setValueSelect, resetFilters, setCallsData, setFilterValue })(CallsContainer)