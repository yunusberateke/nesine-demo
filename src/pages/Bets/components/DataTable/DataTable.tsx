import React, { memo, useEffect, useMemo, useRef } from 'react'

// Local Components
import DataTableRow from './DataTableRow';

// Models
import { IBet } from '@betsPage/models/Bet.model';

// Store
import { useSelectedBets } from '@betsPage/store/SelectedBets.store';

// Styles
import './style.scss'

interface Props {
    bets: IBet[] | null;
}

const DataTable = (props: Props) => {
    const { bets } = props;
    const endTable = useRef<HTMLDivElement>(null);
    const { getActiveCell, toogleSelectedBets } = useSelectedBets();

    const [pagination, setPagination] = React.useState({
        start: 0,
        end: 100
    });
    const showBets = useMemo(() => bets?.slice(pagination.start, pagination.end), [bets, pagination]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPagination({
                        ...pagination,
                        end: pagination.end + 100
                    })

                }
            },
            { threshold: 1.0 }
        );

        if (endTable.current) {
            observer.observe(endTable.current);
        }

        return () => {
            if (endTable.current) {
                observer.unobserve(endTable.current);
            }
        };
    }, [showBets, endTable.current]);

    return (
        bets ?
            <div className='project-d-data-table'>
                <table>
                    <thead>
                        <tr className='project-d-data-table-header'>
                            <th>Event Count: {bets.length}</th>
                            <th>Yorumlar</th>
                            <th></th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th>Alt</th>
                            <th>Üst</th>
                            <th>H1</th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th>H2</th>
                            <th>1-X</th>
                            <th>1-2</th>
                            <th>X-2</th>
                            <th>Var</th>
                            <th>Yok</th>
                            <th>+99</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showBets?.map((bet, index) =>
                                <DataTableRow
                                    key={`index-${index}`}
                                    activeCell={getActiveCell(bet.C)}
                                    rateClicked={toogleSelectedBets}
                                    bet={bet}
                                    index={index}
                                />
                            )
                        }
                    </tbody>
                </table>
                <div style={{ height: 1 }} ref={endTable}></div>
            </div>
            : null
    )
}

export default memo(DataTable, (prevProps: Props, nextProps: Props) => {
    return prevProps.bets === nextProps.bets
});
