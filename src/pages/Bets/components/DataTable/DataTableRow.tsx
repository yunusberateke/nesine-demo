import React, { memo } from 'react'
import { IBet } from '@betsPage/models/Bet.model'
import classNames from 'classnames'

interface Props {
    bet: IBet
    index: number
    activeCell?: string
    rateClicked: (matchCode: string, teams: string, MBS: string, rate: string, headerCode: string) => void
}

const DataTableRow = (props: Props) => {
    const { bet, activeCell, rateClicked, index } = props
    console.log("rendered datatable row");

    return (
        [
            <tr className='project-d-data-table-row-header'  key={`header-${index}`}>
                <td>{bet.D} {bet.DAY} {bet.LN}</td>
                <td>Yorumlar</td>
                <td></td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>{bet.OCG[5].OC[25].N}</td>
                <td>{bet.OCG[5].OC[26].N}</td>
                <td>H1</td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>H2</td>
                <td>{bet.OCG[2].OC[3].N}</td>
                <td>1-2</td>
                <td>{bet.OCG[2].OC[5].N}</td>
                <td>Var</td>
                <td>Yok</td>
                <td>+99</td>
            </tr>,
            <tr className='project-d-data-table-row-content' key={`content-${index}`}>
                <td><strong>{bet.C}</strong> {bet.T} {bet.N}</td>
                <td>Yorumlar</td>
                <td>{bet.OCG[1].MBS}</td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "1"
                    })}

                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[1].OC[0].O, "1")}
                >
                    {bet.OCG[1].OC[0].O}
                </td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "x"
                    })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[1].OC[1].O, "x")}
                >
                    {bet.OCG[1].OC[1].O}
                </td>
                <td></td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "alt"
                    })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[5].OC[25].O, "alt")}
                >
                    {bet.OCG[5].OC[25].O}
                </td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "ust"
                    })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[5].OC[26].O, "ust")}
                >
                    {bet.OCG[5].OC[26].O}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "1-x"
                    })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[2].OC[3].O, "1-x")}
                >
                    {bet.OCG[2].OC[3].O}
                </td>
                <td
                    className={classNames({
                        clickable: true,
                        active: activeCell === "1-2"
                    })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[2].OC[4].O, "1-2")}
                >
                    {bet.OCG[2].OC[4].O}
                </td>
                <td className={classNames({
                    clickable: true,
                    active: activeCell === "x-2"
                })}
                    onClick={() => rateClicked(bet.C, bet.N, bet.OCG[1].MBS, bet.OCG[2].OC[5].O, "x-2")}
                >
                    {bet.OCG[2].OC[5].O}
                </td>
                <td></td>
                <td></td>
                <td>3</td>
            </tr>
        ]

    )
}



export default memo(DataTableRow, (prevProps: Props, nextProps: Props) => {
    return prevProps.activeCell === nextProps.activeCell
})  
