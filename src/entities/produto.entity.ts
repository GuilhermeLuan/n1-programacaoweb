import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Categoria } from './categoria.entity';
import { ItemPedido } from './item-pedido.entity';
import { ItemCarrinho } from './item-carrinho.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  estoque: number;

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  categoria: Categoria;

  @OneToMany(() => ItemPedido, itemPedido => itemPedido.produto)
  itensPedido: ItemPedido[];

  @OneToMany(() => ItemCarrinho, itemCarrinho => itemCarrinho.produto)
  itensCarrinho: ItemCarrinho[];
} 