import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string;
    readonly year: number;
}