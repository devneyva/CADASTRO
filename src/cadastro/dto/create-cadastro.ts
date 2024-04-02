import { IsEmail, IsInt, IsString, IsStrongPassword } from "class-validator"

export class CreateCadastroDTO {
    @IsString()
    Marca: string 

    @IsString()
    Modelo:string

    @IsString()
    Ano : string

    @IsString()
    Km : string

    @IsString()
    Valor : string

    @IsString()
    Imagem: string

    @IsString()
    Descricao: string
}