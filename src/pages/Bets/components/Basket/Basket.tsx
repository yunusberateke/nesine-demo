import React, { memo } from 'react'
import { useSelectedBets } from '@betsPage/store/SelectedBets.store';
import './style.scss'


const Basket = () => {
    console.log("rendered basket");
    const { totalCostBets, selectedBets } = useSelectedBets();

    return (
        <div className='project-d-basket'>
            <div className="project-d-basket-list">
                {
                    selectedBets.map((selectedBet, index) => (
                        <div className="project-d-basket-item" key={index}>
                            {selectedBet.MBS} Kod: {selectedBet.C} Maç: {selectedBet.N} <span className='project-d-basket-item-rate'>Oran: {selectedBet.rate}</span>
                        </div>
                    ))
                }
            </div>
            <div className='project-d-basket-total'>
                Toplam Tutar {totalCostBets.toFixed(2)} TL
            </div>
        </div>
    )
}

export default memo(Basket)