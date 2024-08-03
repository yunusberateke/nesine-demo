
export interface IBet {
  C: string
  N: string
  TYPE: string
  NID: string
  D: string
  T: string
  DAY: string
  S: string
  LN: string
  IMF: boolean
  OCG: Ocg
  HEC: boolean
}

export interface ISelectedBet {
    MBS: string,
    C: string,
    N: string,
    rate: string,
    headerCode: string
}

export interface Ocg {
  "1": N1
  "2": N2
  "5": N52
}

export interface N1 {
  ID: string
  N: string
  MBS: string
  SO: number
  OC: Oc
}

export interface Oc {
  "0": N0
  "1": N12
}

export interface N0 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N12 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N2 {
  ID: string
  N: string
  MBS: string
  SO: number
  OC: Oc2
}

export interface Oc2 {
  "3": N3
  "4": N4
  "5": N5
}

export interface N3 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N4 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N5 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N52 {
  ID: string
  N: string
  MBS: string
  SO: number
  OC: Oc3
}

export interface Oc3 {
  "25": N25
  "26": N26
}

export interface N25 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}

export interface N26 {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  OD: number
  IMF: boolean
}
