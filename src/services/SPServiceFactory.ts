import { ExtensionContext } from '@microsoft/sp-extension-base';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ISPService } from "./ISPService";
import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import SPServiceMock from "./SPServiceMock";
import SPService from "./SPService";

export class SPServiceFactory {
  public static createService(context: WebPartContext | ExtensionContext, includeDelay?: boolean, delayTimeout?: number, webAbsoluteUrl?: string): ISPService {
    if (Environment.type === EnvironmentType.Local) {
      return new SPServiceMock(includeDelay, delayTimeout);
    }
    return new SPService(context, webAbsoluteUrl);
  }
}
