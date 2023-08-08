import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { EscuelaModule } from './escuela/escuela.module';
import { ClaseModule } from './clase/clase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Admin123',
      database: 'escolar',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    CiudadModule,
    EstudianteModule,
    ProfesorModule,
    EscuelaModule,
    ClaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
