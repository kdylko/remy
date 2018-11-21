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
				We believe that advances in robotics and machine learning will transform the food industry, 
				just as they are changing many industries now. In the not-too-distant future, 
				the meals we eat will be prepared - chopped, cooked, and served - with the help of robots.
				This will save people - and businesses - time, lower costs, 
				improve and standardise quality, and reduce food waste. 
			</div>
			<div>
				We create fully robotic platform that can cook any cuisine or any dish in the world.
				This could be used for dark kitchens, kitchen factories, delivery-only companies, food-operators and other 
				businesses where constant quality, adaptability to any recipe, operational effectiveness 
				plays major role.
			</div>
			<div>
				We believe that our platform will boost development of on-demand food economy by allowing to start new 
				food companies for a fraction of today's cost yet having the highest quality and operational efficiency.
			</div>
		</div>
	</div>
);
