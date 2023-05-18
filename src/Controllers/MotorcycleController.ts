import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import isValidId from '../Middlewares/isValidId';
import MotorcycleService from '../Services/MotorcycleService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.register(motorcycle);
      //   if (!newCar) throw new Error('Car not registered!');
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAll() {
    // const car: ICar = {
    //   model: this.req.body.model,
    //   year: this.req.body.year,
    //   color: this.req.body.color,
    //   status: this.req.body.status,
    //   buyValue: this.req.body.buyValue,
    //   doorsQty: this.req.body.doorsQty,
    //   seatsQty: this.req.body.seatsQty,
    // };

    try {
      const motorcycle = await this.service.getAll();
      //   if (!cars) throw new Error('Car not registered!');
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async getById() {
    const { id } = this.req.params;

    try {
      const checkId = isValidId(id);
      if (checkId.type) return this.res.status(checkId.type).json({ message: checkId.message });
      const motorcycle = await this.service.getById(id);
      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const checkId = isValidId(id);
      if (checkId.type) return this.res.status(checkId.type).json({ message: checkId.message });

      const updatedMotor = await this.service.update(motorcycle, id);
      if (!updatedMotor) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(updatedMotor);
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default CarController;