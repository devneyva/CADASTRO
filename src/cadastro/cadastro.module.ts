import { Module } from "@nestjs/common"
//import { Controller } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
//import { UsersService } from "./user.service";
import { CadastroService } from "./cadastro.service";
import { CadastroController } from "./cadastro.controller";

@Module({
    imports: [PrismaModule],
    controllers: [CadastroController],
    providers: [ CadastroService],
    exports: [],
})
export class CadastroModule {

}