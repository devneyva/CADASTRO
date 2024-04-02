import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCadastroDTO } from "./dto/create-cadastro";
import { UpdateCadastroDTO } from "./dto/update-cadastro";
import { UpdatePathCadastroDTO } from "./dto/update-path-cadastro-dto";

@Injectable()
export class CadastroService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({Marca, Modelo, Ano, Km, Valor, Imagem, Descricao}: CreateCadastroDTO) {
        return this.prisma.cadastro_carros.create({
            data: {
                Marca,
                Modelo,
                Ano,
                Km,
                Valor,
                Imagem,
                Descricao
            }
        })
    }
    async list(){
        return this.prisma.cadastro_carros.findMany()
    }
    async show(id: number){
        return this.prisma.cadastro_carros.findUnique({
            where: {
                id,
            }
        })
    }
    async update(id: number, data:UpdateCadastroDTO) {
        if (!(await this.show(id))){
            throw new NotFoundException(`O carro ${id} não encontrado`)

        }
        return this.prisma.cadastro_carros.update({
            data,
            where: {
                id,
            }
        })
    }
    async updatePartial(id: number, {Marca, Modelo, Ano, Km, Valor, Imagem, Descricao}:UpdatePathCadastroDTO) {
        const data: any = {}
        if (!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado`)

        }
        if (Marca) {
            data.Marca = Marca
        }
        if (Modelo) {
            data.Modelo = Modelo
        }
        if (Ano) {
            data.Ano = Ano
        }
        if (Km) {
            data.Km = Km
        }
        if (Valor) {
            data.Valor = Valor
        }
        if (Imagem) {
            data.Imagem = Imagem
        }
        if (Descricao) {
            data.Descricao = Descricao
        }

        return this.prisma.cadastro_carros.update({
            data,
            where: {
                id,
            }
        })
    }
    async delete(id: number) {
        if (!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado`)

        }
        return this.prisma.cadastro_carros.delete({
            where:{
                id
            }
            }) 
        }

    }
