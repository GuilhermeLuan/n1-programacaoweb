import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from '../entities/carrinho.entity';
import { ItemCarrinho } from '../entities/item-carrinho.entity';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  // Rotas para Carrinho
  @Post()
  createCarrinho(@Body() carrinho: Partial<Carrinho>) {
    return this.carrinhoService.createCarrinho(carrinho);
  }

  @Get()
  findAllCarrinhos() {
    return this.carrinhoService.findAllCarrinhos();
  }

  @Get(':id')
  findCarrinhoById(@Param('id') id: string) {
    return this.carrinhoService.findCarrinhoById(+id);
  }

  @Put(':id')
  updateCarrinho(@Param('id') id: string, @Body() carrinho: Partial<Carrinho>) {
    return this.carrinhoService.updateCarrinho(+id, carrinho);
  }

  @Delete(':id')
  deleteCarrinho(@Param('id') id: string) {
    return this.carrinhoService.deleteCarrinho(+id);
  }

  // Rotas para Itens do Carrinho
  @Post('itens')
  createItemCarrinho(@Body() itemCarrinho: Partial<ItemCarrinho>) {
    return this.carrinhoService.createItemCarrinho(itemCarrinho);
  }

  @Get('itens')
  findAllItensCarrinho() {
    return this.carrinhoService.findAllItensCarrinho();
  }

  @Get('itens/:id')
  findItemCarrinhoById(@Param('id') id: string) {
    return this.carrinhoService.findItemCarrinhoById(+id);
  }

  @Put('itens/:id')
  updateItemCarrinho(
    @Param('id') id: string,
    @Body() itemCarrinho: Partial<ItemCarrinho>,
  ) {
    return this.carrinhoService.updateItemCarrinho(+id, itemCarrinho);
  }

  @Delete('itens/:id')
  deleteItemCarrinho(@Param('id') id: string) {
    return this.carrinhoService.deleteItemCarrinho(+id);
  }
}
