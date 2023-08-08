import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn()
  idEstudiante: number;

  @Column()
  apellidoNombres: string;

  @Column()
  fechaNacimiento: string;

  constructor(apellidoNombres: string, fechaNacimiento: string) {
    this.apellidoNombres = apellidoNombres;
    this.fechaNacimiento = fechaNacimiento;
  }
}
