import "../styles/sidebar.css";
import { SIDEMENUS } from "../../util/data";
import Navbar from "./sub-components/Navbar";

export default function SideMenu() {
	return (
		<div className="side_menu">
			<Navbar SIDEMENUS={SIDEMENUS} />
		</div>
	);
}
