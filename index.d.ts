type JsonSerializeablePrimitive = boolean | string | number | null;
type JsonSerializeable =
  | JsonSerializeablePrimitive
  | JsonSerializeable[]
  | { [key: string]: JsonSerializeablePrimitive };

interface ILog {
  info(...data: any[]): void;
  error(...data: any[]): void;
}

interface CSArguments {
  Entity: {
    EntityToken: string;
    EntityId: string;
  };
}

interface CSContext<T> {
  FunctionArgument: T;
}

interface CloudScriptHandlers {
  [key: string]: (args: CSArguments, context: CSContext<any>) => boolean | void;
}

interface IServer {
  GetUserReadOnlyData: (PlayerMasterId: string, Keys: Array<string>) => Object;
}

declare const handlers: CloudScriptHandlers;
declare const log: ILog;
declare const server: IServer;
