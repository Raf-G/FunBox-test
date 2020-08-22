import React, { Component } from 'react';

import './style.css';

export default class Card extends Component {
    state = {
        activeClass: false,
        outHover: false
    }

    // Функция выбора карточки
    toggleActiveCard = () => {
        const currentStateActive = this.state.activeClass;
        const currentStateOutHover = this.state.currentStateOutHover;
        this.setState({
            activeClass: !currentStateActive,
            outHover: !currentStateOutHover
        });
        if(this.state.outHover) {
            this.setState({
                outHover: !this.state.outHover
            });
        }
    }

    // Функция ховера при активной карточке
    outActiveCart = () => {
        if(this.state.outHover) {
            this.setState({
                outHover: false
            });
        }
    }

    render() {
        const { active, foodType, portionQuantity, gift, weight, message } = this.props;
        const { activeClass, outHover } = this.state;

        let headerText = "Сказочное заморское яство";
        let textMassage = "Чего сидишь? Порадуй котэ, ";
        let buy = 'купи'
        let satisfied = ''
        let defaultClass = "card_wrap"

        // Условия для disable
        if (active === false) {
            defaultClass += ' disable';
            textMassage = "Печалька, с " + foodType + " закончился.";
            buy = ''
            satisfied = 'заказчик доволен'
        }

        // Условие active
        if (activeClass === true ) {
            defaultClass += ' active';
            textMassage = message;
            buy = ''
            headerText = "Котэ не одобряет?";
        }

        // Условия activeHover
        if(outHover) {
            defaultClass += ' active_hover'
            headerText = "Сказочное заморское яство";
        }

       

        return (
            <div
                className={defaultClass}
                onClick={this.toggleActiveCard}
                onMouseLeave={this.outActiveCart}
            >
                <div className="card">
                    <div className="card_top">
                        <div className="card_top_edge"></div>
                        <p>{headerText}</p>
                    </div>
                    <div className="card_content">
                        <p className="card_content_caption">
                            Нямушка
                        </p>
                        <p className="card_content_what">
                            с {foodType}
                        </p>
                        <p className="card_content_number">
                            <span>{portionQuantity}</span> порций
                        </p>
                        <p className="card_content_mouse">
                            <span></span>{gift} в подарок<br/>{satisfied}
                        </p>
                        <div className="card_content_kg">
                            <p><span>{weight}</span></p>
                            <p>кг</p>
                        </div>
                        <img src="img/Photo.png" alt="Cat" />
                    </div>
                </div>
                <div className="card_bottom">
                    {textMassage}<span>{buy}</span>
                </div>
            </div>
        )
    }
}
