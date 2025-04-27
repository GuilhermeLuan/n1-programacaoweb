import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';
import { ItemPedido } from '../entities/item-pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>,
    @InjectRepository(ItemPedido)
    private itensPedidoRepository: Repository<ItemPedido>,
  ) {}

  // CRUD para Pedidos
  async createPedido(pedido: Partial<Pedido>): Promise<Pedido> {
    return this.pedidosRepository.save(pedido);
  }

  async findAllPedidos(): Promise<Pedido[]> {
    return this.pedidosRepository.find({
      relations: ['cliente', 'motoboy', 'enderecoEntrega', 'itens'],
    });
  }

  async findPedidoById(id: number): Promise<Pedido> {
    return this.pedidosRepository.findOne({
      where: { id },
      relations: ['cliente', 'motoboy', 'enderecoEntrega', 'itens'],
    });
  }

  async updatePedido(id: number, pedido: Partial<Pedido>): Promise<Pedido> {
    await this.pedidosRepository.update(id, pedido);
    return this.findPedidoById(id);
  }

  async deletePedido(id: number): Promise<void> {
    await this.pedidosRepository.delete(id);
  }

  // CRUD para Itens de Pedido
  async createItemPedido(itemPedido: Partial<ItemPedido>): Promise<ItemPedido> {
    return this.itensPedidoRepository.save(itemPedido);
  }

  async findAllItensPedido(): Promise<ItemPedido[]> {
    return this.itensPedidoRepository.find();
  }

  async findItemPedidoById(id: number): Promise<ItemPedido> {
    return this.itensPedidoRepository.findOne({ where: { id } });
  }

  async updateItemPedido(
    id: number,
    itemPedido: Partial<ItemPedido>,
  ): Promise<ItemPedido> {
    await this.itensPedidoRepository.update(id, itemPedido);
    return this.findItemPedidoById(id);
  }

  async deleteItemPedido(id: number): Promise<void> {
    await this.itensPedidoRepository.delete(id);
  }
}
