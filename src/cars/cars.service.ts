import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './intefaces/car.interface';
import { v6 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
            year: 2019
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
            year: 2018
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Fusion',
            year: 2017
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Cruze',
            year: 2016
        }
    ];

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
}
