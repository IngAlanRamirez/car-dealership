import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v7 as uuid } from 'uuid'
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

    private brands: Brand[] = [
        {
            id: uuid(),
            name: 'Mercedes Benz',
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
        {
            id: uuid(),
            name: 'Ferrari',
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    ]

    create(createBrandDto: CreateBrandDto) {
        const newBrand: Brand = {
            id: uuid(),
            ...createBrandDto,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        this.brands.push(newBrand);
        return newBrand;
    }

    findAll() {
        return this.brands;
    }

    findOne(id: string) {
        const brand = this.brands.find(brand => brand.id === id)
        if (!brand) {
            throw new NotFoundException(`Brand with id ${id} not found`);
        }
        return brand;
    }

    update(id: string, updateBrandDto: UpdateBrandDto) {
        const brand = this.findOne(id);
        const updatedBrand = {
            ...brand,
            ...updateBrandDto,
            updatedAt: Date.now()
        }
        this.brands = this.brands.map(brand => brand.id === id ? updatedBrand : brand);
        return updatedBrand;
    }

    remove(id: string) {
        const brand = this.findOne(id);
        if (!brand) {
            throw new NotFoundException(`Brand with id ${id} not found`);
        }
        this.brands = this.brands.filter(brand => brand.id !== id);
    }
}
