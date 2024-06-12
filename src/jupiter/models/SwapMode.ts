/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit We update our rate limit from time to time depending on the load of our servers. We recommend running your own instance of the API if you want to have high rate limit, here to learn how to run the [self-hosted API](https://station.jup.ag/docs/apis/self-hosted).  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const SwapMode = {
    ExactIn: 'ExactIn',
    ExactOut: 'ExactOut'
} as const;
export type SwapMode = typeof SwapMode[keyof typeof SwapMode];


export function SwapModeFromJSON(json: any): SwapMode {
    return SwapModeFromJSONTyped(json, false);
}

export function SwapModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapMode {
    return json as SwapMode;
}

export function SwapModeToJSON(value?: SwapMode | null): any {
    return value as any;
}

