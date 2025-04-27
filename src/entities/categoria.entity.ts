import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Produto, produto => produto.categoria)
  produtos: Produto[];
} 