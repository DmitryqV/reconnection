import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ChannelsModule } from "./channels/channels.module";

@Module({
  imports: [
    ChannelsModule,
    MongooseModule.forRoot("")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
