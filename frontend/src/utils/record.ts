declare interface ICallBack extends Function {
  callBack: (value: MediaStream) => MediaStream | PromiseLike<MediaStream>;
  catchCallBack: (value: Error) => Error;
  finallyCallBack: () => any;
}

declare type records = record[];

declare interface record {
  record: MediaStream;
  id: number;
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

  public async startRecord(video: boolean, audio: boolean, callBack: ICallBack, catchCallBack: ICallBack, finallyCallBack: ICallBack): Promise<record> {

    const record: MediaStream = await  navigator.mediaDevices.getUserMedia({ audio, video })
      .then((stream: MediaStream) => callBack(stream))
      .catch((error: Error) => catchCallBack(error))
      .finally(() => finallyCallBack());

    const payload: record = { record, id: Util.records.length - 1 };

    return Util.records.push(payload) && payload;
  }
  public offRecord() {}
}
