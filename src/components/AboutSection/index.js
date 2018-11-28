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
				Advances in robotics and artificial intelligence will transform the food industry, just as 
				they are changing many industries now. In the not-too-distant future, many of the meals we eat will 
				be prepared - chopped, cooked, and served - with the help of robots. This will lower costs, 
				improve and standardise quality, simplify business launch and reduce food waste. 
			</div>
			<div>
				We are creating food robotics solutions that could be used for dark kitchens, 
				kitchen factories, restaurants and other businesses where constant quality, adaptability to any 
				recipe, and operational effectiveness plays major role.
			</div>

		</div>
	</div>
);
