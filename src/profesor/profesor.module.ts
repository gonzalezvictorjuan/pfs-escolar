import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { Profesor } from './entities/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from 'src/clase/entities/clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, Clase])],
  controllers: [ProfesorController],
  providers: [ProfesorService],
})
export class ProfesorModule {}
