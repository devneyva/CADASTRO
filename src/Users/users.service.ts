import { Injectable, NotFoundException } from "@nestjs/common";
//import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePatchUserDTO } from "./dto/update-patch-users.dto";
import { CreateUserDTO } from "./dto/create-users-dto";
import { UpdateUserDTO } from "./dto/update-users-dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, email, cpf , password}: CreateUserDTO) {
        return this.prisma.login_user.create({
            data: {
                name,
                email,
                cpf,
                password
            }
        })
    }

    async list() {
        return this.prisma.login_user.findMany()
    }

    async show(id: number) {
        return this.prisma.login_user.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, data: UpdateUserDTO) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.login_user.update({
            data,
            where: {
                id,
            }
        })
    }

    async updatePartial(id: number, {name, email, cpf, password}: UpdatePatchUserDTO) {
        
        const data: any = {}

        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        
        if (name) {
            data.name = name
        }

        if (email) {
            data.email = email
        }

        if (cpf) {
            data.cpf = cpf
        }

        if (password) {
            data.password = password
        }


        return this.prisma.login_user.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: number) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.login_user.delete({
            where: {
                id
            }
        }) 
    }
}
