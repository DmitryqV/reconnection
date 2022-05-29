import { Socket, Manager } from "socket.io-client";

type AdminID = string;
type RoomID = string;
type UserID = string;

type Token = string;

type AutoConnection = boolean;
type RootTransfer = boolean;
type InviteLink = boolean;
type WhiteList = string[];
type CreatorID = string;
type BanList = string[];

interface PropertiesNSP {
  // root user properties
  _autoConnection: AutoConnection;
  _rootTransfer: RootTransfer;
  _whitelist: WhiteList;
  _banlist: BanList;

  // user properties
  inviteLink: InviteLink;
  creatorID: CreatorID;
}

interface CustomNSP {
  properties: PropertiesNSP;
  socket: Socket;
}

export const manager: Manager = new Manager(
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000",
  {
    closeOnBeforeunload: true,
    transports: ["websocket"],
    timestampRequests: true,
    withCredentials: false,
    timestampParam: "t",
    autoConnect: true,
    forceNew: true,
    timeout: 1000,
    upgrade: true,
    path: "/ws/",
  }
);

/**
 * Admin name space
 * private personal channel for admin
 **/
export const AdminNSP = (AdminID: AdminID, token: Token): Socket => {
  return manager.socket("/admin/" + AdminID, { auth: { token } });
};

/**
 * Room name space
 * private personal channel for room
 **/
export const RoomNSP = (RoomID: RoomID, token: Token): Socket => {
  return manager.socket("/room/" + RoomID, { auth: { token } });
};

/**
 * Root name space
 * private personal channel for user
 **/
export const RootNSP = (UserID: UserID, token: Token): Socket => {
  return manager.socket("/" + UserID, { auth: { token } });
};

/**
 * Create custom name space
 **/
export const CreateNameSpace = (properties: PropertiesNSP): CustomNSP => ({
  socket: manager.socket("/nsp/"),
  properties,
});
