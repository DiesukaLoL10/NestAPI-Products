import { IsString, IsNumber, IsOptional, IsBoolean, Min, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(2, 255)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}