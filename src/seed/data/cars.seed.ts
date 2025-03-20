import { v7 as uuid } from 'uuid';
import { Car } from "src/cars/intefaces/car.interface";


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla',
        year: 2019,
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
        year: 2018,
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Fusion',
        year: 2017,
    }
];