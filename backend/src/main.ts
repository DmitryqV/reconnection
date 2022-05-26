import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

/**
 * Guarding NESTFACTORY create SCOPED APP MODULE
 * nf - NestFactory
 **/
(async (nf) => await (await nf.create(AppModule)).listen(2000))(NestFactory);
