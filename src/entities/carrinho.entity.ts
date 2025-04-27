import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ItemCarrinho } from './item-carrinho.entity';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Cliente, cliente => cliente.carrinho)
  cliente: Cliente;

  @OneToMany(() => ItemCarrinho, itemCarrinho => itemCarrinho.carrinho)
  itens: ItemCarrinho[];
} 