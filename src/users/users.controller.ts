import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UserSerializer } from './serializers/user.serializer';

@ApiBearerAuth()
@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserSerializer> {
    const data = await this.usersService.create(createUserDto);
    return plainToInstance(UserSerializer, data, { excludeExtraneousValues: true });
  }

  @Get()
  async findAll(): Promise<UserSerializer[]> {
    const data = await this.usersService.findAll();
    return plainToInstance(UserSerializer, data, { excludeExtraneousValues: true });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserSerializer> {
    const data = await this.usersService.findOne(id);
    return plainToInstance(UserSerializer, data, { excludeExtraneousValues: true });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
