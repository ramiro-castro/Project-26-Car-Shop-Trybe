import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
//   private: IVehicle;
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private status?: boolean;

  constructor(
    { id, model, year, color, status, buyValue }: IVehicle,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = status;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(Year: number) {
    this.year = Year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }
  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public getStatus() {
    return this.status;
  }
}

export default Vehicle;