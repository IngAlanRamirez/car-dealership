import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'BMW', model: 'X5' },
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Chevrolet', model: 'Camaro' },
    { id: uuid(), brand: 'Tesla', model: 'Model S' },
    { id: uuid(), brand: 'Audi', model: 'A4' },
    { id: uuid(), brand: 'Mercedes', model: 'C-Class' },
    { id: uuid(), brand: 'Volkswagen', model: 'Golf' },
    { id: uuid(), brand: 'Nissan', model: 'Altima' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    } else {
      return car;
    }
  }

  addCar(car: CreateCarDto) {
    this.cars.push({ id: uuid(), ...car });
    return car;
  }

  updateCar(id: string, car: { brand: string; model: string }) {
    const carFinded = this.findOneById(id);
    if (carFinded) {
      carFinded.brand = car.brand;
      carFinded.model = car.model;
      return carFinded;
    } else {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
  }

  deleteCar(id: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(`Car with id ${id} not found`);
    } else {
      this.cars.splice(carIndex, 1);
      return { message: `Car with id ${id} deleted` };
    }
  }
}
