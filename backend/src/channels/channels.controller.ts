import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { ChannelsService } from "./channels.service";
import { createChannelDTO } from "./dto/channels.dto";

@Controller("channels")
export class ChannelsController {
  constructor(private readonly ChannelsService: ChannelsService) {}

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteChannel(@Param("id") id: string): Promise<string> {
    return await this.ChannelsService.deleteChannel(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createChannel(
    @Body() body: createChannelDTO
  ): Promise<createChannelDTO> {
    return await this.ChannelsService.createChannel(body);
  }
}
