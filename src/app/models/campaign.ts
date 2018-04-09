
export interface Campaign {
  _id?: {$oid: string};
  name: string;
  keywords: Array<string>;
  bid_amount?: number;
  fund: number;
  status: boolean;
  town: string;
  radius: number;
  created: string;
}
