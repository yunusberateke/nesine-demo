import React, { useEffect, useState } from 'react'

// Local Components
import { Basket, VirtualDataTable } from './components'
import Loading from '@components/loading/Loading'

// Store
import { SelectedBetsProvider } from './store/SelectedBets.store'

// Models
import { IBet } from './models/Bet.model'

// Styles
import './style.scss'

// Data
import dummyBets from './dummyData.json'

const BetsPage = () => {
    const [bets, setBets] = useState<IBet[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // fetch("https://nesine-case-study.onrender.com/bets")
        //     .then((res) => res.json())
        //     .then((json) => {
        //        console.log(json);

        //     }).finally(() => setLoading(false)).catch((err) => { 
        //         console.log(err); setLoading(false) 
        //     });
        setLoading(true)
        setBets(dummyBets as IBet[])
        setLoading(false)
    }, [])

    console.log("rendered bets")
    return (

        <SelectedBetsProvider>
            {
                loading ? <Loading /> :
                <div className='project-d-bets'>
                    <div className="project-d-bets-content">
                        <VirtualDataTable bets={bets} />
                    </div>
                    <Basket />
                </div>
            }
        </SelectedBetsProvider>
    )
}
export default BetsPage
