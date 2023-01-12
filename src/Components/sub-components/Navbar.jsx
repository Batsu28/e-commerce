import { useState } from "react";
import { MENUS } from "../../util/data";

export default function Navbar(prop) {
	const { isLoggedIn } = prop;
	const [showMenus, setMenus] = useState(MENUS);

	return (
		<nav>
			<ul>
				{showMenus.map((menu, index) => (
					<li key={index}>
						<a href={menu.url}>{menu.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
