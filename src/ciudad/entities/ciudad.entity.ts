import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ciudad')
export class Ciudad {
  @PrimaryGeneratedColumn()
  idCiudad: number;
  @Column({ unique: true })
  nombre: string;
  @Column({ unique: true })
  codPostal: string;

  constructor(nombre: string, codPostal: string) {
    this.nombre = nombre;
    this.codPostal = codPostal;
  }
}
