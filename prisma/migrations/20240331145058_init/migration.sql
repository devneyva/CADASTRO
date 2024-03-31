-- CreateTable
CREATE TABLE "login_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "login_user_pkey" PRIMARY KEY ("id")
);
