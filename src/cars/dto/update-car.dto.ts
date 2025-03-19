import { Type } from "class-transformer";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string;
    @IsNumber()
    @Type(() => Number)
    readonly year: number;
}