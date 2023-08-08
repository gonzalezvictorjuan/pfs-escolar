import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad, Escuela])],
  controllers: [CiudadController],
  providers: [CiudadService],
})
export class CiudadModule {}
