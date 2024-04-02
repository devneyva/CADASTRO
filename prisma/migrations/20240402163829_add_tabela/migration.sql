/*
  Warnings:

  - You are about to drop the column `imagem` on the `cadastro_carros` table. All the data in the column will be lost.
  - Added the required column `Imagem` to the `cadastro_carros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cadastro_carros" DROP COLUMN "imagem",
ADD COLUMN     "Imagem" TEXT NOT NULL;
