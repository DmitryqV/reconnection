declare interface ICallBack extends Function {
  callBack: (value: MediaStream) => MediaStream | PromiseLike<MediaStream>;
  catchCallBack: (value: Error) => Error;
  finallyCallBack: () => any;
}

declare type records = IRecord[];

declare interface IRecord {
  record: MediaStream;
  id: number;
}

declare interface IVideoDetailSetting {
  max?: number;
  min?: number;
  ideal?: number;
}

declare interface IVideoConfig {
  width?: number | IVideoDetailSetting;
  height?: number | IVideoDetailSetting;
}

declare type instance = Util;

class Util {
  private static records: records;
  private static _instance: instance;

  constructor() {
    if (Util._instance) return Util._instance;
    Util._instance = this;
    Util.records = [];
  }

  public async startRecord(
    video: boolean | IVideoConfig,
    audio: boolean,
    callBack: ICallBack,
    catchCallBack: ICallBack,
    finallyCallBack: ICallBack
  ): Promise<IRecord> {
    const record: MediaStream = await navigator.mediaDevices
      .getUserMedia({ audio, video })
      .then((stream: MediaStream) => callBack(stream))
      .catch((error: Error) => catchCallBack(error))
      .finally(() => finallyCallBack());

    const payload: IRecord = { record, id: Util.records.length - 1 };

    return Util.records.push(payload) && payload;
  }
  public offRecord() {}
}
