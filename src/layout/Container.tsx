import React, { Suspense } from 'react'
import Loading from '../components/loading/Loading'
import BetsPage from '../pages/Bets/BetsPage'

const Container = () => {
    return (
        <Suspense fallback={<Loading />} >
            <BetsPage />
        </Suspense>
    )
}

export default Container
