interface IVehicle {
  buyValue: number;
  id?: string
  model: string;
  year: number;
  color: string;
  status?: boolean;
}

export default IVehicle;