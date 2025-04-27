import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from '../entities/carrinho.entity';
import { ItemCarrinho } from '../entities/item-carrinho.entity';
import { CarrinhoService } from './carrinho.service';


@Module({
  imports: [TypeOrmModule.forFeature([Carrinho, ItemCarrinho])],
  providers: [CarrinhoService],
  exports: [CarrinhoService],
})
export class CarrinhoModule {} 