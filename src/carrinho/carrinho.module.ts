import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from '../entities/carrinho.entity';
import { ItemCarrinho } from '../entities/item-carrinho.entity';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho, ItemCarrinho])],
  providers: [CarrinhoService],
  controllers: [CarrinhoController],
  exports: [CarrinhoService],
})
export class CarrinhoModule {}
