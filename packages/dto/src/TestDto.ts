import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class TestDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  number?: number;
}
