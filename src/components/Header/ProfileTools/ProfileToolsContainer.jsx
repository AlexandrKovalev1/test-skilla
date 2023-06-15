import { connect } from "react-redux";
import ProfileTools from "./ProfileTools";


let mapStateToProps = (state) => ({
    userBlock: state.profile,
    departament: state.profile.departament
});

const ProfileToolsContainer = connect(mapStateToProps)(ProfileTools);

export default ProfileToolsContainer;
