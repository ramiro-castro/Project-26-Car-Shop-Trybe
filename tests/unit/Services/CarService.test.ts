// tests/unit/services/transfer.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
// import carsArray from '../../utils/CarsMock';

describe('Testes referentes a carros', function () {
  const carInput: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Red',
    status: true,
    buyValue: 12000,
    doorsQty: 4,
    seatsQty: 5,
  };
  const carOutput: Car = new Car({
    id: '6464587229cdd8077dc06b3e',
    model: 'Marea',
    year: 2002,
    color: 'Red',
    buyValue: 12000,
    status: true,
    doorsQty: 4,
    seatsQty: 5,
  });
  const carInputUpdate: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 14000,
    doorsQty: 4,
    seatsQty: 5,
  };
  const carOutputUpdate: Car = new Car({
    id: '646594e20d274d676e0c5445',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    buyValue: 14000,
    status: true,
    doorsQty: 4,
    seatsQty: 5,
  });

  it('Deveria cadastrar um carro com SUCESSO', async function () {
  // Arrange
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.register(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria listar todos os carros com SUCESSO', async function () {
    // Arrange

    sinon.stub(Model, 'find').resolves([carOutput]);

    // Act
    const service = new CarService();
    // await service.register(carInput);
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deveria retornar null quando uma id nao existe no banco', async function () {
    sinon.stub(Model, 'find').resolves();

    const service = new CarService();
    const result = await service.getById('1111222233330000ffffcccc');
    // console.log(result);

    expect(result).equal(null);
  });

  it('Deveria fazer um update de um carro com SUCESSO', async function () {
    // Arrange

    // const updatedCar: UpdateWriteOpResult = {
    //   acknowledged: true, 
    //   upsertedId: null,
    //   matchedCount: 1,
    //   modifiedCount: 1,
    //   upsertedCount: 0,
    // };

    sinon.stub(Model, 'updateOne').resolves();

    // Act
    const service = new CarService();
    // await service.register(carInput);
    const result = await service.update(carInputUpdate, '6a46594e20d274d676e0c5445');

    // Assert
    expect(result).equal(carOutputUpdate);
  });
  
  afterEach(function () {
    sinon.restore();
  }); 
});