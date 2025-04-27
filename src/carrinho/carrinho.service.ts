import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from '../entities/carrinho.entity';
import { ItemCarrinho } from '../entities/item-carrinho.entity';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho)
    private carrinhoRepository: Repository<Carrinho>,
    @InjectRepository(ItemCarrinho)
    private itensCarrinhoRepository: Repository<ItemCarrinho>,
  ) {}

  // CRUD para Carrinho
  async createCarrinho(carrinho: Partial<Carrinho>): Promise<Carrinho> {
    return this.carrinhoRepository.save(carrinho);
  }

  async findAllCarrinhos(): Promise<Carrinho[]> {
    return this.carrinhoRepository.find();
  }

  async findCarrinhoById(id: number): Promise<Carrinho> {
    return this.carrinhoRepository.findOne({ where: { id } });
  }

  async updateCarrinho(id: number, carrinho: Partial<Carrinho>): Promise<Carrinho> {
    await this.carrinhoRepository.update(id, carrinho);
    return this.findCarrinhoById(id);
  }

  async deleteCarrinho(id: number): Promise<void> {
    await this.carrinhoRepository.delete(id);
  }

  // CRUD para Itens de Carrinho
  async createItemCarrinho(itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
    return this.itensCarrinhoRepository.save(itemCarrinho);
  }

  async findAllItensCarrinho(): Promise<ItemCarrinho[]> {
    return this.itensCarrinhoRepository.find();
  }

  async findItemCarrinhoById(id: number): Promise<ItemCarrinho> {
    return this.itensCarrinhoRepository.findOne({ where: { id } });
  }

  async updateItemCarrinho(id: number, itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
    await this.itensCarrinhoRepository.update(id, itemCarrinho);
    return this.findItemCarrinhoById(id);
  }

  async deleteItemCarrinho(id: number): Promise<void> {
    await this.itensCarrinhoRepository.delete(id);
  }
} 