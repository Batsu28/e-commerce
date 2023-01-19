import { useNavigate } from "react-router-dom";
import { data } from "../../../util/data";

export default function Navbar(prop) {
	const { SIDEMENUS } = prop;
	const naviagte = useNavigate();

	return (
		<nav>
			<ul>
				{SIDEMENUS.map((menu, index) => (
					<li key={index}>
						<button
							onClick={() => naviagte(menu.url)}
							style={{ onClick: { color: "green" } }}>
							<div>{menu.icon}</div>
							{menu.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}