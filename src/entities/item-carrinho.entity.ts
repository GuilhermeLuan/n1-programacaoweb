import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Carrinho } from './carrinho.entity';
import { Produto } from './produto.entity';

@Entity()
export class ItemCarrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precoUnitario: number;

  @ManyToOne(() => Carrinho, (carrinho) => carrinho.itens)
  carrinho: Carrinho;

  @ManyToOne(() => Produto)
  produto: Produto;
}
