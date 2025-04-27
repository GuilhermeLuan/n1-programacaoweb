import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Motoboy } from './motoboy.entity';
import { Endereco } from './endereco.entity';
import { ItemPedido } from './item-pedido.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  statusPedido: string;

  @CreateDateColumn()
  dataPedido: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  valorTotal: number;

  @Column()
  metodoPagamento: string;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @ManyToOne(() => Motoboy, motoboy => motoboy.pedidos)
  motoboy: Motoboy;

  @ManyToOne(() => Endereco)
  enderecoEntrega: Endereco;

  @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido)
  itens: ItemPedido[];
} 