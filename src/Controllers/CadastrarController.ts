import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import isValidId from '../Middlewares/isValidId';
import CadastrarService from '../Services/CadastrarService';

class CadastrarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CadastrarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CadastrarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.register(car);
      //   if (!newCar) throw new Error('Car not registered!');
      return this.res.status(201).json(newCar);
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
      const cars = await this.service.getAll();
      //   if (!cars) throw new Error('Car not registered!');
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }
  public async getById() {
    const { id } = this.req.params;

    try {
      const checkId = isValidId(id);
      if (checkId.type) return this.res.status(checkId.type).json({ message: checkId.message });
      const cars = await this.service.getById(id);
      if (!cars) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default CadastrarController;