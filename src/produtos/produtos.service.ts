import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  // CRUD para Produtos
  async createProduto(produto: Partial<Produto>): Promise<Produto> {
    return this.produtosRepository.save(produto);
  }

  async findAllProdutos(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  async findProdutoById(id: number): Promise<Produto> {
    return this.produtosRepository.findOne({ where: { id } });
  }

  async updateProduto(id: number, produto: Partial<Produto>): Promise<Produto> {
    await this.produtosRepository.update(id, produto);
    return this.findProdutoById(id);
  }

  async deleteProduto(id: number): Promise<void> {
    await this.produtosRepository.delete(id);
  }

  // CRUD para Categorias
  async createCategoria(categoria: Partial<Categoria>): Promise<Categoria> {
    return this.categoriasRepository.save(categoria);
  }

  async findAllCategorias(): Promise<Categoria[]> {
    return this.categoriasRepository.find();
  }

  async findCategoriaById(id: number): Promise<Categoria> {
    return this.categoriasRepository.findOne({ where: { id } });
  }

  async updateCategoria(
    id: number,
    categoria: Partial<Categoria>,
  ): Promise<Categoria> {
    await this.categoriasRepository.update(id, categoria);
    return this.findCategoriaById(id);
  }

  async deleteCategoria(id: number): Promise<void> {
    await this.categoriasRepository.delete(id);
  }
}
