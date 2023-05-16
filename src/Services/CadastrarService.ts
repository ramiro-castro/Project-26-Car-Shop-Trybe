import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CadastrarService {
//   private isValidKey(key: string): boolean {
//     const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
//     return cpfRegex.test(key);
//   }

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async register(car: ICar) {
    // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');

    // Criar instância da Model de Payment usando Mongoose
    const carODM = new CarODM();
    // Inserir os dados no banco
    const newCar = await carODM.create(car);
    // Retornar os dados com o id
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
    return this.createCarDomain({ id, model, year, color, status, buyValue, doorsQty, seatsQty });
  }
}

export default CadastrarService;