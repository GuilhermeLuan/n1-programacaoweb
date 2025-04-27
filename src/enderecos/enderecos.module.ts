import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from '../entities/endereco.entity';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  providers: [EnderecosService],
  controllers: [EnderecosController],
  exports: [EnderecosService],
})
export class EnderecosModule {} 