export class createChannelDTO {
  readonly title: string
  readonly creator: string
  readonly limit: number
  readonly current: number
  readonly admins: string[]
  readonly banlist: string[]
}
