import React from "react";
import { connect } from "react-redux";
import Calls from "./Calls";
import { setValueSelect, resetFilters, setCallsData, setFilterValue, SetVoise } from "../../redux/callsReducer";
import { getCalls, getVoiseRecord } from "../../serverAPI/api";

class CallsContainer extends React.Component {

    componentDidMount() {
        getCalls()
            .then(response => { this.props.setCallsData(response.results) })

    }


    getVoise(record, id) {
        getVoiseRecord(record, id).then(response => {
            let blob = new Blob([response.data], { type: "audio/mp3" }),
                downloadUrl = window.URL.createObjectURL(blob);
            const audio = new Audio(downloadUrl);
            this.props.SetVoise(audio)
        })
    }

    render() {

        return (
            <Calls
                getVoise={this.getVoise.bind(this)}
                filter={this.props.filter}
                callsData={this.props.callsData}
                setValueSelect={this.props.setValueSelect}
                resetFilters={this.props.resetFilters}
                selects={this.props.selects}
                setCallsData={this.props.setCallsData}
                dateTo={this.props.dateTo}
                dateFrom={this.props.dateFrom}
                setFilterValue={this.props.setFilterValue}
                voise={this.props.voise}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    selects: state.calls.selects,
    callsData: state.calls.callsData,
    dateTo: state.calls.dateTo,
    dateFrom: state.calls.dateFrom,
    filter: state.calls.filterParamsForType,
    voise: state.calls.voise
});

export default connect(mapStateToProps, { setValueSelect, resetFilters, setCallsData, setFilterValue, SetVoise })(CallsContainer)