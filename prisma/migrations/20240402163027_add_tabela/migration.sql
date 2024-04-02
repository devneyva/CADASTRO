/*
  Warnings:

  - Added the required column `imagem` to the `cadastro_carros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cadastro_carros" ADD COLUMN     "imagem" TEXT NOT NULL;
