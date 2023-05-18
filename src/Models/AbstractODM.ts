import { Model, Schema, model, models, AnyObject } from 'mongoose';
// import IVehicle from '../Interfaces/IVehicle';

abstract class AbstractODM<T extends AnyObject > {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schemaDefinition: Schema, modelName: string) {
    this.schema = schemaDefinition;
    this.modelName = modelName;
    this.model = models[modelName] || model<T>(modelName, this.schema);
  }

  public async create(data: T): Promise<T> {
    const result = await this.model.create({ ...data });
    return result;
  }

  public async getAll(): Promise<T[]> {
    const result = await this.model.find({});
    return result;
  }

  public async getById(id: string): Promise<T | null> {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      // Trate o erro aqui
      return null;
    }
  }

  public async update(data: T, id: string) {
    const result = await this.model.updateOne(
      { _id: id },
      { $set: { ...data } },
    );
    return result;
  }
}

export default AbstractODM;