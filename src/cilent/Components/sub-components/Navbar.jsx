import { data } from "../../../util/data";

export default function Navbar(prop) {
	const { filterName } = prop;
	const { MENUS } = prop;

	return (
		<nav>
			<ul>
				{MENUS.map((menu, index) => (
					<li key={index}>
						<button onClick={(e) => filterName(e.target.innerText)}>
							{menu.toUpperCase()}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
