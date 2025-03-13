import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2019
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
            year: 2018
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Fusion',
            year: 2017
        },
        {
            id: 4,
            brand: 'Chevrolet',
            model: 'Cruze',
            year: 2016
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneByID(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }
}
