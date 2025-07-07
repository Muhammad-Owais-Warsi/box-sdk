// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DevicePinnersAPI from './device-pinners';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enterprises extends APIResource {
  /**
   * Retrieves all the device pins within an enterprise.
   *
   * The user must have admin privileges, and the application needs the "manage
   * enterprise" scope to make this call.
   *
   * @example
   * ```ts
   * const response = await client.enterprises.listDevicePinners(
   *   '3442311',
   * );
   * ```
   */
  listDevicePinners(
    enterpriseID: string,
    query: EnterpriseListDevicePinnersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnterpriseListDevicePinnersResponse> {
    return this._client.get(path`/enterprises/${enterpriseID}/device_pinners`, { query, ...options });
  }
}

/**
 * A list of device pins.
 */
export interface EnterpriseListDevicePinnersResponse {
  /**
   * A list of device pins.
   */
  entries?: Array<DevicePinnersAPI.DevicePinner>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed.
   */
  limit?: number;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: number;

  /**
   * The order by which items are returned.
   */
  order?: Array<EnterpriseListDevicePinnersResponse.Order>;
}

export namespace EnterpriseListDevicePinnersResponse {
  /**
   * The order in which a pagination is ordered.
   */
  export interface Order {
    /**
     * The field that is ordered by.
     */
    by?: 'id';

    /**
     * The direction to order by, either ascending or descending.
     */
    direction?: 'asc' | 'desc';
  }
}

export interface EnterpriseListDevicePinnersParams {
  /**
   * The direction to sort results in. This can be either in alphabetical ascending
   * (`ASC`) or descending (`DESC`) order.
   */
  direction?: 'ASC' | 'DESC';

  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;
}

export declare namespace Enterprises {
  export {
    type EnterpriseListDevicePinnersResponse as EnterpriseListDevicePinnersResponse,
    type EnterpriseListDevicePinnersParams as EnterpriseListDevicePinnersParams,
  };
}
