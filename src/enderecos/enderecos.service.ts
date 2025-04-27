import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from '../entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Endereco)
    private enderecosRepository: Repository<Endereco>,
  ) {}

  async createEndereco(endereco: Partial<Endereco>): Promise<Endereco> {
    return this.enderecosRepository.save(endereco);
  }

  async findAllEnderecos(): Promise<Endereco[]> {
    return this.enderecosRepository.find();
  }

  async findEnderecoById(id: number): Promise<Endereco> {
    return this.enderecosRepository.findOne({ where: { id } });
  }

  async updateEndereco(
    id: number,
    endereco: Partial<Endereco>,
  ): Promise<Endereco> {
    await this.enderecosRepository.update(id, endereco);
    return this.findEnderecoById(id);
  }

  async deleteEndereco(id: number): Promise<void> {
    await this.enderecosRepository.delete(id);
  }
}
