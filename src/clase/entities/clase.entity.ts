import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clases')
export class Clase {
  @PrimaryGeneratedColumn()
  idClase: number;

  @Column()
  nombre: string;

  @ManyToOne((type) => Escuela, (escuela) => escuela.clases)
  @JoinColumn()
  escuela: Escuela;

  @ManyToOne((type) => Profesor, (profesor) => profesor.clases)
  @JoinColumn()
  profesor: Profesor;

  constructor(nombre: string, escuela: Escuela, profesor: Profesor) {
    this.nombre = nombre;
    this.escuela = escuela;
    this.profesor = profesor;
  }
}
