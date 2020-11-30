import React from 'react';

const Card = ({ name, email, id }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?set=set2&size=200x200`} />
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f6'>{email}</p>
			</div>
		</div>
	)
}

export default Card;