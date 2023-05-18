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

  public async getAll() : Promise<Motorcycle[] | unknown> {
    // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

    // Criar instância da Model de Payment usando Mongoose
    const motorcycleODM = new MotorcycleODM();
    // Inserir os dados no banco
    const motorcycleArray = await motorcycleODM.getAll();
    // Retornar os dados com o id
    return motorcycleArray.map((motorcycle) =>
      this.createCarDomain(motorcycle));
    // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
    // return result;
  }

  public async getById(id: string) : Promise<Motorcycle | null> {
    // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

    const motorcycleODM = new MotorcycleODM();

    const car = await motorcycleODM.getById(id);

    return this.createCarDomain(car);
    // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
    // return result;
  }
  public async update(motorcycle: IMotorcycle, id: string) {
    // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

    // Criar instância da Model de Payment usando Mongoose
    const motorcycleODM = new MotorcycleODM();
    // Inserir os dados no banco
    const updatedMotor = await motorcycleODM.update(motorcycle, id);
    if (!updatedMotor) return null;
    if (updatedMotor.matchedCount === 0) return null;
    // Retornar os dados com o id
    // const { model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
    // return this.createCarDomain(newCar);
    return { id, ...motorcycle };
  }
}

export default MotorcycleService;