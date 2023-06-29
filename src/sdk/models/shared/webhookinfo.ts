/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A webhook ID (UUID v4).
 */
export class WebhookInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "vehicleid" })
    vehicleid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "webhookid" })
    webhookid?: string;
}