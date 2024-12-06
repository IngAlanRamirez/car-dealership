import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';

describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of cars', () => {
    const result = ['Toyota', 'BMW', 'Ford'];
    expect(controller.getAllCars()).toEqual(result);
  });

  it('should return the correct number of cars', () => {
    const result = controller.getAllCars();
    expect(result.length).toBe(3);
  });

  it('should contain Toyota in the list of cars', () => {
    const result = controller.getAllCars();
    expect(result).toContain('Toyota');
  });

  it('should return the car by id', () => {
    expect(controller.getCarById(0)).toBe('Toyota');
    expect(controller.getCarById(1)).toBe('BMW');
    expect(controller.getCarById(2)).toBe('Ford');
  });

  it('should return undefined for an invalid id', () => {
    expect(controller.getCarById(3)).toBeUndefined();
  });
});
