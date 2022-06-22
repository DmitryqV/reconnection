import { Injectable } from "@nestjs/common";
import { createChannelDTO } from "./dto/channels.dto";

@Injectable()
export class ChannelsService {
  deleteChannel(id: string) {
    return id;
  }

  createChannel(body: createChannelDTO): createChannelDTO {
    return body;
  }
}
