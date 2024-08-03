import React, { useEffect, useRef, useState } from 'react'

import TableRow from './TableRow/TableRow';

import { useSelectedBets } from '@betsPage/store/SelectedBets.store';

import { IBet } from '@betsPage/models/Bet.model';

import { debounceTime, HeaderHeight, RowHeight } from './constant/tableConstant';

import { debouncer } from "@utilities/debouncer";

import './style.scss'

type Props = {
    bets: IBet[]
}

const VirtualDataTable = (props: Props) => {
    const { bets } = props
    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemsCount = bets.length;
    const [scrollTop, setScrollTop] = useState(0);
    const [tableHeight, setTableHeight] = useState(window.innerHeight);
    const { getActiveCell, toogleSelectedBets } = useSelectedBets();

    useEffect(() => {
        const handleResize = debouncer(() => {
            setTableHeight(window.innerHeight);
        }, debounceTime);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const handleScroll = debouncer(() => {
                setScrollTop(containerRef.current!.scrollTop);
            }, debounceTime)

            containerRef.current.addEventListener('scroll', handleScroll)

            return () => {
                containerRef.current!.removeEventListener('scroll', handleScroll);
            }
        }
    }, [containerRef.current])

    const startIndex = Math.floor(scrollTop / RowHeight);
    const scrollEnd = scrollTop + tableHeight;
    const endIndex = Math.min(itemsCount, Math.ceil(scrollEnd / RowHeight))
    const scrollableElementHeight = itemsCount * RowHeight;

    const showData = bets.slice(startIndex, endIndex);

    return (
        <div
            className='v-table-wrapper'
            ref={containerRef}
            style={{
                height: tableHeight
            }}
        >
            <table className='v-table'>
                <thead className='v-table-header'>
                    <tr className='v-table-item' style={{ height: HeaderHeight }}>
                        <th className='v-table-column v-f-column'>Event Count: {bets.length}</th>
                        <th className='v-table-column'>Yorumlar</th>
                        <th className='v-table-column'></th>
                        <th className='v-table-column'>1</th>
                        <th className='v-table-column'>x</th>
                        <th className='v-table-column'>2</th>
                        <th className='v-table-column'>Alt</th>
                        <th className='v-table-column'>Üst</th>
                        <th className='v-table-column'>H1</th>
                        <th className='v-table-column'>1</th>
                        <th className='v-table-column'>x</th>
                        <th className='v-table-column'>2</th>
                        <th className='v-table-column'>H2</th>
                        <th className='v-table-column'>1-X</th>
                        <th className='v-table-column'>1-2</th>
                        <th className='v-table-column'>X-2</th>
                        <th className='v-table-column'>Var</th>
                        <th className='v-table-column'>Yok</th>
                        <th className='v-table-column'>+99</th>
                    </tr>
                </thead>
                <tbody className='v-table-body' style={{
                    height: scrollableElementHeight
                }}>
                    {
                        showData.map((bet: IBet, index: number) => (
                            <TableRow 
                                key={index} 
                                index={index} 
                                bet={bet} 
                                startIndex={startIndex} 
                                activeCell={getActiveCell(bet.C)}
                                rateClicked={toogleSelectedBets} 
                            />
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default VirtualDataTable