/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Cadillac } from "./cadillac";
import { Chevrolet } from "./chevrolet";
import { Compatibility } from "./compatibility";
import { Evs } from "./evs";
import * as shared from "./models/shared";
import { Tesla } from "./tesla";
import { User } from "./user";
import { Vehicles } from "./vehicles";
import { Webhooks } from "./webhooks";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Smartcar API
     */
    "https://api.smartcar.com/v2.0",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.0.0";
    genVersion = "2.41.4";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Smartcar API: # How do I use Postman with Smartcar?
 *
 * @remarks
 * We've detailed how to get started with Smartcar in Postman [here](https://www.notion.so/smartcarapi/How-do-I-use-Postman-with-Smartcar-b8e8483bae8b43a986715582beb54bd4).
 */
export class AcmeApi {
    public cadillac: Cadillac;
    public chevrolet: Chevrolet;
    /**
     * Operations about compatibility
     */
    public compatibility: Compatibility;
    /**
     * Operations about electric vehicles
     */
    public evs: Evs;
    public tesla: Tesla;
    public user: User;
    /**
     * Operations about vehicles
     */
    public vehicles: Vehicles;
    public webhooks: Webhooks;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.cadillac = new Cadillac(this.sdkConfiguration);
        this.chevrolet = new Chevrolet(this.sdkConfiguration);
        this.compatibility = new Compatibility(this.sdkConfiguration);
        this.evs = new Evs(this.sdkConfiguration);
        this.tesla = new Tesla(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.vehicles = new Vehicles(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }
}
