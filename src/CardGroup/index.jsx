import React from 'react';
import Card from './Card';

import './style.css';

const CardGroup = (props) => {
    const renderCards = props.data.map(item => (
        <Card
            foodType={item.food_type}
            portionQuantity={item.portion_quantity}
            gift={item.gift}
            weight={item.weight}
            active={item.active}
            message={item.massage}
        />
    ));

    return (
        <div className="card_group">
            {renderCards}
        </div>
    )
}

export default CardGroup;