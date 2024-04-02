import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateCadastroDTO } from "./dto/create-cadastro";
import { UpdateCadastroDTO } from "./dto/update-cadastro";
import { CadastroService } from "./cadastro.service";

//import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Controller('cadastros')
export class CadastroController {

    constructor(private readonly cadastroService: CadastroService) {

    }

    @Post()
    async create(@Body() { Marca, Modelo, Ano, Km, Valor, Imagem, Descricao}: CreateCadastroDTO) {
        return this.cadastroService.create( {Marca, Modelo, Ano, Km, Valor, Imagem, Descricao
        } )
    }

    @Get()
    async read() {
        return this.cadastroService.list()

    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.cadastroService.show(id)
    }

    @Put(':id')
    async update(@Body() data:UpdateCadastroDTO, @Param('id', ParseIntPipe) id: number) {
        return  this.cadastroService.update(id,data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data: UpdateCadastroDTO, @Param('id', ParseIntPipe) id: number) {
        return this.cadastroService.updatePartial(id, data)
    }

    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) {
        return this.cadastroService.delete(id)
    }
}


