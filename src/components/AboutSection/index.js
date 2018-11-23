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
				This could be used for dark kitchens, kitchen factories, restaurants 
				and other businesses where constant quality, adaptability to any recipe, and operational 
				effectiveness plays major role.
			</div>

		</div>
	</div>
);
