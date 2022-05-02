import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Min(4)
  @Max(14)
  password: string;

  @IsNotEmpty()
  name: string;
}
