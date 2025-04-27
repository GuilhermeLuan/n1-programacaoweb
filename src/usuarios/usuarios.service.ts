import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Cliente } from '../entities/cliente.entity';
import { Motoboy } from '../entities/motoboy.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
    @InjectRepository(Motoboy)
    private readonly motoboysRepository: Repository<Motoboy>,
  ) {}

  // CRUD para Usuários
  async createUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosRepository.save(usuario);
  }

  async findAllUsuarios(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findUsuarioById(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async updateUsuario(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.findUsuarioById(id);
  }

  async deleteUsuario(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }

  // CRUD para Clientes
  async createCliente(cliente: Partial<Cliente>): Promise<Cliente> {
    return this.clientesRepository.save(cliente);
  }

  async findAllClientes(): Promise<Cliente[]> {
    return this.clientesRepository.find({
      relations: ['carrinho', 'pedidos'],
    });
  }

  async findClienteById(id: number): Promise<Cliente> {
    return this.clientesRepository.findOne({ 
      where: { id },
      relations: ['carrinho', 'pedidos'],
    });
  }

  async updateCliente(id: number, cliente: Partial<Cliente>): Promise<Cliente> {
    await this.clientesRepository.update(id, cliente);
    return this.findClienteById(id);
  }

  async deleteCliente(id: number): Promise<void> {
    await this.clientesRepository.delete(id);
  }

  // CRUD para Motoboys
  async createMotoboy(motoboy: Partial<Motoboy>): Promise<Motoboy> {
    return this.motoboysRepository.save(motoboy);
  }

  async findAllMotoboys(): Promise<Motoboy[]> {
    return this.motoboysRepository.find({
      relations: ['pedidos'],
    });
  }

  async findMotoboyById(id: number): Promise<Motoboy> {
    return this.motoboysRepository.findOne({
      where: { id },
      relations: ['pedidos'],
    });
  }

  async updateMotoboy(id: number, motoboy: Partial<Motoboy>): Promise<Motoboy> {
    await this.motoboysRepository.update(id, motoboy);
    return this.findMotoboyById(id);
  }

  async deleteMotoboy(id: number): Promise<void> {
    await this.motoboysRepository.delete(id);
  }
}
