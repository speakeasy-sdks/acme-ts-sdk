/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * return engine oil reading
 */
export class EngineOil extends SpeakeasyBase {
    /**
     * The engine oil’s remaining life span (as a percentage). Oil life is based on the current quality of the oil. (in percent).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lifeRemaining" })
    lifeRemaining?: number;
}
