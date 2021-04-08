export interface column {
  header?: string;
  field?: string;
}

export interface datas {
  productID?: string;
           productName: string,
           salesQ1: number,
           salesQ2: number,
           salesQ3: number,
           salesQ4: number
}

export interface Customer {
  id?: number;
  name?: string;
  column?:string;
  //country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  //representative?: Representative;
  verified?: boolean;
  balance?: boolean;
}
