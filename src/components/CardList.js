
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const CardListComponent = robots.map(function(el, i) {
//		console.log(el, i);
		return <Card key={el.id} id={el.id} name={el.name} email={el.email}/>
		
	});
	return (
		<div>
			{ CardListComponent }
		</div>
	);
	
}

export default CardList;