interface ICar {
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
  id?: string
  model: string;
  year: number;
  color: string;
  status?: boolean;
}
  
export default ICar;