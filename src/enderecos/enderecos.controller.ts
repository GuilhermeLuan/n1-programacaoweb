import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { Endereco } from '../entities/endereco.entity';

@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post()
  createEndereco(@Body() endereco: Partial<Endereco>) {
    return this.enderecosService.createEndereco(endereco);
  }

  @Get()
  findAllEnderecos() {
    return this.enderecosService.findAllEnderecos();
  }

  @Get(':id')
  findEnderecoById(@Param('id') id: string) {
    return this.enderecosService.findEnderecoById(+id);
  }

  @Put(':id')
  updateEndereco(@Param('id') id: string, @Body() endereco: Partial<Endereco>) {
    return this.enderecosService.updateEndereco(+id, endereco);
  }

  @Delete(':id')
  deleteEndereco(@Param('id') id: string) {
    return this.enderecosService.deleteEndereco(+id);
  }
}
