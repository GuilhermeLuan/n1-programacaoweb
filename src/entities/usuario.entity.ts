import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, TableInheritance } from 'typeorm';
import { Endereco } from './endereco.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({ unique: true })
  cpf: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
  enderecoPrincipal: Endereco;
} 