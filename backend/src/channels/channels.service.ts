import { Injectable } from "@nestjs/common";
import { createChannelDTO } from "./dto/channels.dto";

@Injectable()
export class ChannelsService {
  async deleteChannel(id: string): Promise<string> {
    return await id;
  }

  async createChannel(body: createChannelDTO): Promise<createChannelDTO> {
    return await body;
  }
}
