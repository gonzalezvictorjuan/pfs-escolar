import { Escuela } from 'src/escuela/entities/escuela.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('ciudades')
export class Ciudad {
  @PrimaryGeneratedColumn()
  idCiudad: number;
  @Column({ unique: true })
  nombre: string;
  @Column({ unique: true })
  codPostal: string;

  @OneToMany((type) => Escuela, (escuela) => escuela.ciudad)
  @JoinColumn()
  escuelas: Escuela[];

  constructor(nombre: string, codPostal: string) {
    this.nombre = nombre;
    this.codPostal = codPostal;
  }
}
