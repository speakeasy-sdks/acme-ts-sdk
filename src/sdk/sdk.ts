/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Cadillac } from "./cadillac";
import { Chevrolet } from "./chevrolet";
import { Compatibility } from "./compatibility";
import { Evs } from "./evs";
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
    bearerAuth?: string;

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
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "2.0.0";
    genVersion = "2.181.1";
    userAgent = "speakeasy-sdk/typescript 2.0.0 2.181.1 1.0.0 acme-api";
    retryConfig?: utils.RetryConfig;
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
    /**
     * Operations about compatibility
     */
    public compatibility: Compatibility;
    public user: User;
    /**
     * Operations about vehicles
     */
    public vehicles: Vehicles;
    public tesla: Tesla;
    /**
     * Operations about electric vehicles
     */
    public evs: Evs;
    public cadillac: Cadillac;
    public chevrolet: Chevrolet;
    public webhooks: Webhooks;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ bearerAuth: props?.bearerAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.compatibility = new Compatibility(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.vehicles = new Vehicles(this.sdkConfiguration);
        this.tesla = new Tesla(this.sdkConfiguration);
        this.evs = new Evs(this.sdkConfiguration);
        this.cadillac = new Cadillac(this.sdkConfiguration);
        this.chevrolet = new Chevrolet(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }
}
