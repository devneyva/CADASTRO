import { PartialType } from "@nestjs/mapped-types";
import { CreateCadastroDTO } from "./create-cadastro";

export class UpdatePathCadastroDTO extends PartialType(CreateCadastroDTO){
    
}