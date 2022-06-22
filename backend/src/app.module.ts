import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ChannelsController } from './channels/channels.controller';

@Module({
  imports: [],
  controllers: [AppController, ChannelsController],
  providers: [AppService],
})
export class AppModule {}
