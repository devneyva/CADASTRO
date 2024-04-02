/*
  Warnings:

  - Added the required column `Descricao` to the `cadastro_carros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cadastro_carros" ADD COLUMN     "Descricao" TEXT NOT NULL;
