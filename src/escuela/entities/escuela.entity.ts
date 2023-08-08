import { Ciudad } from 'src/ciudad/entities/ciudad.entity';
import { Clase } from 'src/clase/entities/clase.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('escuelas')
export class Escuela {
  @PrimaryGeneratedColumn()
  idEscuela: number;

  @Column()
  nombre: string;

  @Column()
  domicilio: string;

  @ManyToOne((type) => Ciudad, (ciudad) => ciudad.escuelas)
  @JoinColumn()
  ciudad: Ciudad;

  @OneToMany((type) => Clase, (clase) => clase.escuela)
  @JoinColumn()
  clases: Clase[];

  constructor(nombre: string, domicilio: string, ciudad: Ciudad) {
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.ciudad = ciudad;
  }
}
