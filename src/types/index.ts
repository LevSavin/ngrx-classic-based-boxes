export interface IBox {
  id: number;
  option: IOption | null;
}

export interface IOption {
  id: number;
  label: string;
  value: number;
}

export interface ILSData {
  boxes: IBox[];
}
