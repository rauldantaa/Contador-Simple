import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digito from "./Digito";

//create your first component
const Home = ({one,two,three,four,five}) => {
	return (
		<div className="counter">
			<div className="clock">
				<i class="fa-solid fa-clock"></i>
			</div>
			<Digito digit={five}/>
			<Digito digit={four}/>
			<Digito digit={three}/>
			<Digito digit={two}/>
			<Digito digit={one}/>
		</div>
	);
};

export default Home;