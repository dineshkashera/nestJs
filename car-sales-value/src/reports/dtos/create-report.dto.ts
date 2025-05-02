import { IsString, IsNumber, Min, Max, IsLatitude, IsLongitude } from "class-validator";

export class CreateReportDto {
  
  @IsNumber()
  @Min(100000)
  @Max(89292992)
  price: number;

  @IsString()
  make: string;
  
  @IsNumber()
  model: number;

  @IsNumber()
  @Min(1920)
  @Max(2025)
  year: number;

  @IsNumber()
  @Min(20)
  mileage: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;

  
}