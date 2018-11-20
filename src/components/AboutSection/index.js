import React from 'react';

import './styles.scss';

export default ({ height }) => (
	<div
		className="about-us"
		style={{ height }}
	>
		<div className="title">
      what we believe
		</div>

		<div className="description">
			<div>
				Advances in robotics and machine learning will transform the food industry, 
				just as they are changing many industries now. In the not-too-distant future, 
				the meals we eat will be prepared - chopped, cooked, and served - with the help of robots. 
			</div>
			<div>
				We are using robotic technology to create 'robotic kitchen’ platform that can cook any cuisine
				or any dish in the world. This will save people - and businesses - time, lower costs, 
				improve and standardise quality, and reduce food waste.
			</div>
			<div>
				For businesses (dark-kitchens, restaurants, factories) a new models would emerge.
				To start a restaurant you won't need a huge upfront investments, and proficiency in kitchen operations,
				but rather undestanding of your product market-fit and client services.
			</div>
			<div>
				At home, people will be able to eat restaurant quality meals at a fraction of the cost, create individual 
				meal plans, and keep themselves healthier.
			</div>
		</div>
	</div>
);
