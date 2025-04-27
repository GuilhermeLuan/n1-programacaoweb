import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from '../entities/produto.entity';
import { Categoria } from '../entities/categoria.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  // Rotas para Produtos
  @Post()
  createProduto(@Body() produto: Partial<Produto>) {
    return this.produtosService.createProduto(produto);
  }

  @Get()
  findAllProdutos() {
    return this.produtosService.findAllProdutos();
  }

  @Get(':id')
  findProdutoById(@Param('id') id: string) {
    return this.produtosService.findProdutoById(+id);
  }

  @Put(':id')
  updateProduto(@Param('id') id: string, @Body() produto: Partial<Produto>) {
    return this.produtosService.updateProduto(+id, produto);
  }

  @Delete(':id')
  deleteProduto(@Param('id') id: string) {
    return this.produtosService.deleteProduto(+id);
  }

  // Rotas para Categorias
  @Post('categorias')
  createCategoria(@Body() categoria: Partial<Categoria>) {
    return this.produtosService.createCategoria(categoria);
  }

  @Get('categorias')
  findAllCategorias() {
    return this.produtosService.findAllCategorias();
  }

  @Get('categorias/:id')
  findCategoriaById(@Param('id') id: string) {
    return this.produtosService.findCategoriaById(+id);
  }

  @Put('categorias/:id')
  updateCategoria(
    @Param('id') id: string,
    @Body() categoria: Partial<Categoria>,
  ) {
    return this.produtosService.updateCategoria(+id, categoria);
  }

  @Delete('categorias/:id')
  deleteCategoria(@Param('id') id: string) {
    return this.produtosService.deleteCategoria(+id);
  }
}
