import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Endereco } from './entities/endereco.entity';
import { Produto } from './entities/produto.entity';
import { Pedido } from './entities/pedido.entity';
import { ItemPedido } from './entities/item-pedido.entity';
import { ItemCarrinho } from './entities/item-carrinho.entity';
import { Carrinho } from './entities/carrinho.entity';
import { Categoria } from './entities/categoria.entity';
import { Cliente } from './entities/cliente.entity';
import { Motoboy } from './entities/motoboy.entity';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { CarrinhoModule } from './carrinho/carrinho.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [
        Usuario,
        Cliente,
        Motoboy,
        Endereco,
        Produto,
        Categoria,
        Pedido,
        ItemPedido,
        Carrinho,
        ItemCarrinho,
      ],
      synchronize: true, // Apenas para desenvolvimento
    }),
    UsuariosModule,
    ProdutosModule,
    PedidosModule,
    CarrinhoModule,
    EnderecosModule,
  ],
})
export class AppModule {}
