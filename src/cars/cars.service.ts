import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './intefaces/car.interface';
import { v6 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [];

    findAll() {
        return this.cars;
    }

    findOneByID(id: string) {
        const car: Car | undefined = this.cars.find(car => car.id === id);

        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const newCar = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, updateCarDto: CreateCarDto) {
        const car = this.findOneByID(id);
        Object.assign(car, updateCarDto);
        return car;
    }

    delete(id: string) {
        const carIndex = this.cars.findIndex(car => car.id === id);
        if (carIndex === -1) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        this.cars.splice(carIndex, 1);
        return {
            message: `Car with id ${id} deleted`
        };
    }

    fillCars(cars: Car[]) {
        this.cars = cars;
    }
}
