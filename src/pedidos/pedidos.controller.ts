import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from '../entities/pedido.entity';
import { ItemPedido } from '../entities/item-pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  // Rotas para Pedidos
  @Post()
  createPedido(@Body() pedido: Partial<Pedido>) {
    return this.pedidosService.createPedido(pedido);
  }

  @Get()
  findAllPedidos() {
    return this.pedidosService.findAllPedidos();
  }

  @Get(':id')
  findPedidoById(@Param('id') id: string) {
    return this.pedidosService.findPedidoById(+id);
  }

  @Put(':id')
  updatePedido(@Param('id') id: string, @Body() pedido: Partial<Pedido>) {
    return this.pedidosService.updatePedido(+id, pedido);
  }

  @Delete(':id')
  deletePedido(@Param('id') id: string) {
    return this.pedidosService.deletePedido(+id);
  }

  // Rotas para Itens de Pedido
  @Post('itens')
  createItemPedido(@Body() itemPedido: Partial<ItemPedido>) {
    return this.pedidosService.createItemPedido(itemPedido);
  }

  @Get('itens')
  findAllItensPedido() {
    return this.pedidosService.findAllItensPedido();
  }

  @Get('itens/:id')
  findItemPedidoById(@Param('id') id: string) {
    return this.pedidosService.findItemPedidoById(+id);
  }

  @Put('itens/:id')
  updateItemPedido(
    @Param('id') id: string,
    @Body() itemPedido: Partial<ItemPedido>,
  ) {
    return this.pedidosService.updateItemPedido(+id, itemPedido);
  }

  @Delete('itens/:id')
  deleteItemPedido(@Param('id') id: string) {
    return this.pedidosService.deleteItemPedido(+id);
  }
}
