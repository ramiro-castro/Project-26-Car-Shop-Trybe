import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
//   private isValidKey(key: string): boolean {
//     const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
//     return cpfRegex.test(key);
//   }

  private createCarDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        motorcycle,
      );
    }
    return null;
  }

  public async register(motorcycle: IMotorcycle) {
    // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

    // Criar instância da Model de Payment usando Mongoose
    const motorcycleODM = new MotorcycleODM();
    // Inserir os dados no banco
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    // Retornar os dados com o id
    // const { id, model, year, color, status, buyValue, category, engineCapacity } = newMotorcycle;
    return this.createCarDomain(newMotorcycle);
  }

  //   public async getAll() : Promise<Car[] | unknown> {
  //     // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

  //     // Criar instância da Model de Payment usando Mongoose
  //     const carODM = new CarODM();
  //     // Inserir os dados no banco
  //     const carsArray = await carODM.getAll();
  //     // Retornar os dados com o id
  //     return carsArray.map((car) =>
  //       this.createCarDomain(car));
  //     // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
  //     // return result;
  //   }

  //   public async getById(id: string) : Promise<Car | null> {
  //     // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

  //     const carODM = new CarODM();

  //     const car = await carODM.getById(id);

  //     return this.createCarDomain(car);
  //     // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
  //     // return result;
  //   }
  //   public async update(car: ICar, id: string) {
  //     // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

//     // Criar instância da Model de Payment usando Mongoose
//     const carODM = new CarODM();
//     // Inserir os dados no banco
//     const updatedCar = await carODM.update(car, id);
//     if (updatedCar.matchedCount === 0) return null;
//     // Retornar os dados com o id
//     // const { model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
//     // return this.createCarDomain(newCar);
//     return { id, ...car };
//   }
}

export default MotorcycleService;