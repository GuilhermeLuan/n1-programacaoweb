import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from './produto.entity';

@Entity()
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precoUnitario: number;

  @ManyToOne(() => Pedido, pedido => pedido.itens)
  pedido: Pedido;

  @ManyToOne(() => Produto)
  produto: Produto;
} 