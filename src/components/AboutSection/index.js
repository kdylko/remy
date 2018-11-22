import React from 'react';

import './styles.scss';

export default ({ height }) => (
	<div
		className="about-us"
		style={{ height }}
	>
		<div className="title">
      what we do
		</div>

		<div className="description">
			<div>
				Advances in robotics and machine learning will transform the food industry, just as 
				they are changing many industries now. In the not-too-distant future, many of the meals we eat will 
				be prepared - chopped, cooked, and served - with the help of robots. This will save people - 
				and businesses - time, lower costs, improve and standardise quality, and reduce food waste. 
			</div>
			<div>
				We are creating a fully robotic platform that can cook any cuisine or any dish in the world. 
				This could be used for dark kitchens, kitchen factories, delivery-only companies, food-operators 
				and other businesses where constant quality, adaptability to any recipe, and operational 
				effectiveness plays major role.
			</div>
			<div>
				We believe that our platform will boost development of the on-demand food economy by allowing 
				food companies to operate for a fraction of today's cost, whilst still having the highest levels 
				of quality and operational efficiency.
			</div>
		</div>
	</div>
);
