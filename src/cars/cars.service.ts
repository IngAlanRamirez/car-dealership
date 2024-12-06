import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'BMW', model: 'X5' },
    { id: 3, brand: 'Ford', model: 'Mustang' },
    { id: 4, brand: 'Honda', model: 'Civic' },
    { id: 5, brand: 'Chevrolet', model: 'Camaro' },
    { id: 6, brand: 'Tesla', model: 'Model S' },
    { id: 7, brand: 'Audi', model: 'A4' },
    { id: 8, brand: 'Mercedes', model: 'C-Class' },
    { id: 9, brand: 'Volkswagen', model: 'Golf' },
    { id: 10, brand: 'Nissan', model: 'Altima' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    } else {
      return car;
    }
  }

  addCar(car: { id: number; brand: string; model: string }) {
    this.cars.push(car);
    return car;
  }

  updateCar(id: number, car: { brand: string; model: string }) {
    const carFinded = this.findOneById(id);
    if (carFinded) {
      carFinded.brand = car.brand;
      carFinded.model = car.model;
      return carFinded;
    } else {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
  }

  deleteCar(id: number) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(`Car with id ${id} not found`);
    } else {
      this.cars.splice(carIndex, 1);
      return { message: `Car with id ${id} deleted` };
    }
  }
}
