// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DevicePinners extends APIResource {
  /**
   * Retrieves information about an individual device pin.
   *
   * @example
   * ```ts
   * const devicePinner = await client.devicePinners.retrieve(
   *   '2324234',
   * );
   * ```
   */
  retrieve(devicePinnerID: string, options?: RequestOptions): APIPromise<DevicePinner> {
    return this._client.get(path`/device_pinners/${devicePinnerID}`, options);
  }

  /**
   * Deletes an individual device pin.
   *
   * @example
   * ```ts
   * await client.devicePinners.delete('2324234');
   * ```
   */
  delete(devicePinnerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/device_pinners/${devicePinnerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Device pins allow enterprises to control what devices can use native Box
 * applications.
 */
export interface DevicePinner {
  /**
   * The unique identifier for this device pin.
   */
  id?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The type of device being pinned.
   */
  product_name?: string;

  /**
   * The value will always be `device_pinner`.
   */
  type?: 'device_pinner';
}

export declare namespace DevicePinners {
  export { type DevicePinner as DevicePinner };
}
