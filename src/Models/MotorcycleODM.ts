import {
  Schema,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schemaMotorcycle = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    // this.model = models.Motorcycle || model('Motorcycle', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
    super(schemaMotorcycle, 'Motorcycle');
  }

  //   public async create(moto: IMotorcycle): Promise<IMotorcycle> {
  //     const result = await this.model.create({ ...moto });
  //     return result;
  //   }
  //   public async getAll(): Promise<ICar[] > {
  //     const result = await this.model.find({});
  //     return result;
  //   }

//   public async getById(id: string): Promise<ICar | null> {
//     try {
//       const result = await this.model.findById(id);
//       return result;
//     } catch (error) {
//       // Trate o erro aqui
//       return null;
//     }
//   }
//   public async update(car: ICar, id: string) {
//     const result = await this.model.updateOne(
//       { _id: id },
//       { $set: { ...car } },
//     );
//     return result;
//   }
}

export default MotorcycleODM;