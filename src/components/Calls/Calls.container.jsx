import React from "react";
import { connect } from "react-redux";
import Calls from "./Calls";
import { setValueSelect,resetFilters } from "../../redux/callsReducer";

class CallsContainer extends React.Component {
    componentDidMount() {
    
    }

    render() {
        return (
            <Calls
                setValueSelect={this.props.setValueSelect}
                resetFilters={this.props.resetFilters}
                selects={this.props.selects}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    selects: state.calls.selects,
});

export default connect(mapStateToProps, { setValueSelect, resetFilters })(CallsContainer)