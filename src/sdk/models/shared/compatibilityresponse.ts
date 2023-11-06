/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Capability } from "./capability";
import { Expose, Type } from "class-transformer";

export class CompatibilityResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Capability })
    @Expose({ name: "capabilities" })
    @Type(() => Capability)
    capabilities?: Capability[];

    @SpeakeasyMetadata()
    @Expose({ name: "compatible" })
    compatible?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;
}
