import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService
    ) { }
    populateDB() {
        this.carsService.fillCars(CARS_SEED);
        this.brandsService.fillBrands(BRANDS_SEED);
        return { message: 'Database has been populated' };
    }
}
