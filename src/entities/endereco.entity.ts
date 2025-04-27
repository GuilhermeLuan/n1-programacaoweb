import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;
} 