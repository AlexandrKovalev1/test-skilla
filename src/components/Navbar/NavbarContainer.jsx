import { connect } from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => ({navItems:state.nav.navItems});


const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;