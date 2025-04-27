import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../entities/usuario.entity';
import { Cliente } from '../entities/cliente.entity';
import { Motoboy } from '../entities/motoboy.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Rotas para Usuários
  @Post()
  createUsuario(@Body() usuario: Partial<Usuario>) {
    return this.usuariosService.createUsuario(usuario);
  }

  @Get()
  findAllUsuarios() {
    return this.usuariosService.findAllUsuarios();
  }

  @Get(':id')
  findUsuarioById(@Param('id') id: string) {
    return this.usuariosService.findUsuarioById(+id);
  }

  @Put(':id')
  updateUsuario(@Param('id') id: string, @Body() usuario: Partial<Usuario>) {
    return this.usuariosService.updateUsuario(+id, usuario);
  }

  @Delete(':id')
  deleteUsuario(@Param('id') id: string) {
    return this.usuariosService.deleteUsuario(+id);
  }

  // Rotas para Clientes
  @Post('clientes')
  createCliente(@Body() cliente: Partial<Cliente>) {
    return this.usuariosService.createCliente(cliente);
  }

  @Get('clientes')
  findAllClientes() {
    return this.usuariosService.findAllClientes();
  }

  @Get('clientes/:id')
  findClienteById(@Param('id') id: string) {
    return this.usuariosService.findClienteById(+id);
  }

  @Put('clientes/:id')
  updateCliente(@Param('id') id: string, @Body() cliente: Partial<Cliente>) {
    return this.usuariosService.updateCliente(+id, cliente);
  }

  @Delete('clientes/:id')
  deleteCliente(@Param('id') id: string) {
    return this.usuariosService.deleteCliente(+id);
  }

  // Rotas para Motoboys
  @Post('motoboys')
  createMotoboy(@Body() motoboy: Partial<Motoboy>) {
    return this.usuariosService.createMotoboy(motoboy);
  }

  @Get('motoboys')
  findAllMotoboys() {
    return this.usuariosService.findAllMotoboys();
  }

  @Get('motoboys/:id')
  findMotoboyById(@Param('id') id: string) {
    return this.usuariosService.findMotoboyById(+id);
  }

  @Put('motoboys/:id')
  updateMotoboy(@Param('id') id: string, @Body() motoboy: Partial<Motoboy>) {
    return this.usuariosService.updateMotoboy(+id, motoboy);
  }

  @Delete('motoboys/:id')
  deleteMotoboy(@Param('id') id: string) {
    return this.usuariosService.deleteMotoboy(+id);
  }
}
