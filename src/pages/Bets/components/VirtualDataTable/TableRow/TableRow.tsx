import React, { memo } from 'react'

import { IBet } from '@betsPage/models/Bet.model'

import { RowContentHeight, RowHeaderHeight, RowHeight } from '../constant/tableConstant';

interface Props {
    bet: IBet
    index: number
    startIndex: number
    activeCell?: string
    rateClicked: (matchCode: string, teams: string, MBS: string, rate: string, headerCode: string) => void
}

const TableRow = (props: Props) => {
    const { bet, index, startIndex, activeCell, rateClicked } = props;

    console.log("rendered datatable row");

    const clickableClasses = (columnCode: string): string => {
        let classes = 'v-table-column clickable';
        if (activeCell === columnCode) {
            classes = classes + ' active';
        }

        return classes
    }

    const handleClick = (rate: string, columnCode: string) => {
        rateClicked(bet.C, bet.N, bet.OCG[1].MBS, rate, columnCode)
    }

    return [
        <tr className='v-table-item' key={`header-${index}`} style={{ height: RowHeaderHeight, top: (index + startIndex) * RowHeight }}>
            <td className='v-table-column v-f-column'>{bet.D} {bet.DAY} {bet.LN}</td>
            <td className='v-table-column'>Yorumlar</td>
            <td className='v-table-column'></td>
            <td className='v-table-column'>1</td>
            <td className='v-table-column'>x</td>
            <td className='v-table-column'>2</td>
            <td className='v-table-column'>{bet.OCG[5].OC[25].N}</td>
            <td className='v-table-column'>{bet.OCG[5].OC[26].N}</td>
            <td className='v-table-column'>H1</td>
            <td className='v-table-column'>1</td>
            <td className='v-table-column'>x</td>
            <td className='v-table-column'>2</td>
            <td className='v-table-column'>H2</td>
            <td className='v-table-column'>{bet.OCG[2].OC[3].N}</td>
            <td className='v-table-column'>1-2</td>
            <td className='v-table-column'>{bet.OCG[2].OC[5].N}</td>
            <td className='v-table-column'>Var</td>
            <td className='v-table-column'>Yok</td>
            <td className='v-table-column'>+99</td>
        </tr>,
        <tr className='v-table-item' key={`conten-${index}`} style={{ height: RowContentHeight, top: ((index + startIndex) * RowHeight) + RowHeaderHeight }}>
            <td className='v-table-column v-f-column'><strong>{bet.C}</strong> {bet.T} {bet.N}</td>
            <td className='v-table-column'>Yorumlar</td>
            <td className='v-table-column'>{bet.OCG[1].MBS}</td>
            <td
                className={clickableClasses("1")}
                onClick={() => handleClick(bet.OCG[1].OC[0].O, "1")}
            >
                {bet.OCG[1].OC[0].O}
            </td>
            <td
                className={clickableClasses("x")}
                onClick={() => handleClick(bet.OCG[1].OC[1].O, "x")}
            >
                {bet.OCG[1].OC[1].O}
            </td>
            <td className='v-table-column'></td>
            <td
                className={clickableClasses("alt")}
                onClick={() => handleClick(bet.OCG[5].OC[25].O, "alt")}
            >
                {bet.OCG[5].OC[25].O}
            </td>
            <td
                onClick={() => handleClick(bet.OCG[5].OC[26].O, "ust")}
                className={clickableClasses("ust")}
            >
                {bet.OCG[5].OC[26].O}
            </td>
            <td className='v-table-column'></td>
            <td className='v-table-column'></td>
            <td className='v-table-column'></td>
            <td className='v-table-column'></td>
            <td className='v-table-column'></td>
            <td
                onClick={() => handleClick(bet.OCG[2].OC[3].O, "1-x")}
                className={clickableClasses("1-x")}
            >
                {bet.OCG[2].OC[3].O}
            </td>
            <td
                onClick={() => handleClick(bet.OCG[2].OC[4].O, "1-2")}
                className={clickableClasses("1-2")}
            >
                {bet.OCG[2].OC[4].O}
            </td>
            <td
                onClick={() => handleClick(bet.OCG[2].OC[5].O, "x-2")}
                className={clickableClasses("x-2")}
            >
                {bet.OCG[2].OC[5].O}
            </td>
            <td className='v-table-column'></td>
            <td className='v-table-column'></td>
            <td className='v-table-column'>3</td>
        </tr>
    ]
}
export default memo(TableRow, (prevProps: Props, nextProps: Props) => {
    return prevProps.activeCell === nextProps.activeCell &&
        prevProps.startIndex === nextProps.startIndex
})  
