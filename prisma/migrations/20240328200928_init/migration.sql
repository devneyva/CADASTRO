-- CreateTable
CREATE TABLE "cadastro_carros" (
    "id" SERIAL NOT NULL,
    "Marca" TEXT NOT NULL,
    "Modelo" TEXT NOT NULL,
    "Ano" TEXT NOT NULL,
    "Km" TEXT NOT NULL,
    "Valor" TEXT NOT NULL,

    CONSTRAINT "cadastro_carros_pkey" PRIMARY KEY ("id")
);
