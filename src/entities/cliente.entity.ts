import { Entity, OneToOne, JoinColumn, OneToMany, ChildEntity } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Carrinho } from './carrinho.entity';
import { Pedido } from './pedido.entity';

@ChildEntity()
export class Cliente extends Usuario {
  @OneToOne(() => Carrinho)
  @JoinColumn()
  carrinho: Carrinho;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
} 