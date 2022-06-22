import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { createChannelDTO } from "./dto/channels.dto";

@Controller('channels')
export class ChannelsController {
  constructor(private readonly ChannelsService: ChannelsService) {}

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteChannel(@Param("id") id: string): string {
    return this.ChannelsService.deleteChannel(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createChannel(@Body() body: createChannelDTO): createChannelDTO {
    return this.ChannelsService.createChannel(body);
  }

  @Get()
  @HttpCode(HttpStatus.FOUND)
  getAllChannels(): string[] {
    return this.ChannelsService.getAllChannels();
  }

  @Get(":id")
  @HttpCode(HttpStatus.FOUND)
  getChannelById(@Param("id") id: string): string {
    return this.ChannelsService.getChannelById(id);
  }
}
