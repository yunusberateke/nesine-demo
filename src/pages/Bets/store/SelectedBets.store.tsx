import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo } from 'react';
import { ISelectedBet } from '@betsPage/models/Bet.model';

type SelectedBetContextType = {
  selectedBets: ISelectedBet[];
  totalCostBets: number;
  setSelectedBets: (selectedBets: ISelectedBet[]) => void;
  toogleSelectedBets: (matchCode: string, teams: string, MBS: string, rate: string, headerCode: string) => void
  getActiveCell: (matchCode: string) => string | undefined
};

const defaultSelectedBetContextValue: SelectedBetContextType = {
  selectedBets: [],
  totalCostBets: 0,
  setSelectedBets: () => { },
  toogleSelectedBets: () => { },
  getActiveCell: () => undefined
};

const SelectedBetsContext = createContext<SelectedBetContextType>(defaultSelectedBetContextValue);

interface SelectedBetProviderProps {
  children: ReactNode;
}

export const SelectedBetsProvider: React.FC<SelectedBetProviderProps> = ({ children }) => {
  const [selectedBets, setSelectedBets] = useState<ISelectedBet[]>([]);
  
  const toogleSelectedBets = (matchCode: string, teams: string, MBS: string, rate: string, headerCode: string) => {
    setSelectedBets(prevSelectedBets => {
      const isThereSameCell = prevSelectedBets.findIndex((selectedBet) => selectedBet.C === matchCode && selectedBet.headerCode === headerCode) !== -1;
      if (isThereSameCell) {
        return prevSelectedBets.filter((selectedBet) => selectedBet.C !== matchCode);
      } else {
        const isThereSameRow = prevSelectedBets.findIndex((selectedBet) => selectedBet.C === matchCode) !== -1;
        if (isThereSameRow) {
          const newSelectedBets = prevSelectedBets.filter((selectedBet) => selectedBet.C !== matchCode);
          return [...newSelectedBets, { C: matchCode, N: teams, MBS: MBS, rate: rate, headerCode: headerCode }];
        } else {
          return [...prevSelectedBets, { C: matchCode, N: teams, MBS: MBS, rate: rate, headerCode: headerCode }];
        }
      }
    });
  };
  

  const totalCostBets = useMemo(() => selectedBets.reduce((acc, input) => (acc === 0 ? 1 : acc) * Number(input.rate), 0), [selectedBets])

  const getActiveCell = useCallback((matchCode: string) => {
    const isRowExistColumn = selectedBets.find(
      (selectedBet) => selectedBet.C === matchCode
    );
    return isRowExistColumn && isRowExistColumn.headerCode;
  }, [selectedBets]);

  return (
    <SelectedBetsContext.Provider value={{ selectedBets, setSelectedBets, totalCostBets, toogleSelectedBets, getActiveCell }}>
      {children}
    </SelectedBetsContext.Provider>
  );
};

export const useSelectedBets = (): SelectedBetContextType => useContext(SelectedBetsContext);
