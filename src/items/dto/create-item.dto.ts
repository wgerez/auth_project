import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Length(10, 255)
  description: string;
}
