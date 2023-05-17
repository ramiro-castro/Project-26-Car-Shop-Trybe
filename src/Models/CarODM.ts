import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<ICar>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  public async create(car: ICar): Promise<ICar> {
    const result = await this.model.create({ ...car });
    return result;
  }
  public async getAll(): Promise<ICar[] > {
    const result = await this.model.find({});
    return result;
  }

  public async getById(id: string): Promise<ICar | null> {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      // Trate o erro aqui
      return null;
    }
  }
}

export default CarODM;