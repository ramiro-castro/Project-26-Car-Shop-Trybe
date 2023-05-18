// tests/unit/services/transfer.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService'; 
import Motorcycle from '../../../src/Domains/Motorcycle';
// import carsArray from '../../utils/CarsMock';

describe('Testes referentes a Motorcycle', function () {
  const MotorcycleInput: IMotorcycle = {
    model: 'Honda CG Titan 125',
    year: 1983,
    color: 'Red',
    status: true,
    buyValue: 1000,
    category: 'Street',
    engineCapacity: 125,
  };
  const MotorcycleOutput: Motorcycle = new Motorcycle({
    id: '634852326b35b59438fbea2f',
    model: 'Honda CG Titan 125',
    year: 1983,
    color: 'Red',
    status: true,
    buyValue: 1000,
    category: 'Street',
    engineCapacity: 125,
  });

  const MotorcycleInputUpdate: IMotorcycle = {
    model: 'Honda CG Titan 12',
    year: 1983,
    color: 'black',
    status: true,
    buyValue: 1000,
    category: 'Street',
    engineCapacity: 125,
  };
  const MotorcycleOutputUpdate: Motorcycle = new Motorcycle({
    id: '634852326b35b59438fbea2f',
    model: 'Honda CG Titan 12',
    year: 1983,
    color: 'black',
    status: true,
    buyValue: 1000,
    category: 'Street',
    engineCapacity: 125,
  });

  it('Deveria cadastrar uma motorcycle com SUCESSO', async function () {
  // Arrange
    sinon.stub(Model, 'create').resolves(MotorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.register(MotorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(MotorcycleOutput);
  });

  it('Deveria listar todos as motorcycles com SUCESSO', async function () {
    // Arrange

    sinon.stub(Model, 'find').resolves([MotorcycleOutput]);

    // Act
    const service = new MotorcycleService();
    // await service.register(MotorcycleInputUpdate);
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([MotorcycleOutput]);
  });

  it('Deveria retornar null quando uma id nao existe no banco', async function () {
    sinon.stub(Model, 'find').resolves();

    const service = new MotorcycleService();
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
    const service = new MotorcycleService();
    // await service.register(MotorcycleInputUpdate);
    const result = await service.update(MotorcycleInputUpdate, '6a46594e20d274d676e0c5445');

    // Assert
    expect(result).equal(MotorcycleOutputUpdate);
  });

  afterEach(function () {
    sinon.restore();
  }); 
});