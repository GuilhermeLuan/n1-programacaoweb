import { Entity, Column, OneToMany, ChildEntity } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Pedido } from './pedido.entity';

@ChildEntity()
export class Motoboy extends Usuario {
  @Column()
  veiculoInfo: string;

  @Column()
  statusAtual: string;

  @OneToMany(() => Pedido, pedido => pedido.motoboy)
  pedidos: Pedido[];
} 