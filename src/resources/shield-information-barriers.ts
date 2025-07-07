// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShieldInformationBarriers extends APIResource {
  /**
   * Creates a shield information barrier to separate individuals/groups within the
   * same firm and prevents confidential information passing between them.
   *
   * @example
   * ```ts
   * const shieldInformationBarrier =
   *   await client.shieldInformationBarriers.create({
   *     enterprise: {},
   *   });
   * ```
   */
  create(
    body: ShieldInformationBarrierCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrier> {
    return this._client.post('/shield_information_barriers', { body, ...options });
  }

  /**
   * Get shield information barrier based on provided ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrier =
   *   await client.shieldInformationBarriers.retrieve(
   *     '1910967',
   *   );
   * ```
   */
  retrieve(
    shieldInformationBarrierID: string,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrier> {
    return this._client.get(path`/shield_information_barriers/${shieldInformationBarrierID}`, options);
  }

  /**
   * Retrieves a list of shield information barrier objects for the enterprise of
   * JWT.
   *
   * @example
   * ```ts
   * const shieldInformationBarriers =
   *   await client.shieldInformationBarriers.list();
   * ```
   */
  list(
    query: ShieldInformationBarrierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierListResponse> {
    return this._client.get('/shield_information_barriers', { query, ...options });
  }

  /**
   * Change status of shield information barrier with the specified ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrier =
   *   await client.shieldInformationBarriers.changeStatus({
   *     id: '1910967',
   *     status: 'pending',
   *   });
   * ```
   */
  changeStatus(
    body: ShieldInformationBarrierChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrier> {
    return this._client.post('/shield_information_barriers/change_status', { body, ...options });
  }
}

/**
 * A mini representation of a enterprise, used when nested within another resource.
 */
export interface EnterpriseBase {
  /**
   * The unique identifier for this enterprise.
   */
  id?: string;

  /**
   * The value will always be `enterprise`.
   */
  type?: 'enterprise';
}

/**
 * A standard representation of a shield information barrier object.
 */
export interface ShieldInformationBarrier {
  /**
   * The unique identifier for the shield information barrier.
   */
  id?: string;

  /**
   * ISO date time string when this shield information barrier object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  created_by?: RetentionPoliciesAPI.UserBase;

  /**
   * ISO date time string when this shield information barrier was enabled.
   */
  enabled_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  enabled_by?: RetentionPoliciesAPI.UserBase;

  /**
   * A mini representation of a enterprise, used when nested within another resource.
   */
  enterprise?: EnterpriseBase;

  /**
   * Status of the shield information barrier.
   */
  status?: 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid';

  /**
   * The type of the shield information barrier.
   */
  type?: 'shield_information_barrier';

  /**
   * ISO date time string when this shield information barrier was updated.
   */
  updated_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  updated_by?: RetentionPoliciesAPI.UserBase;
}

export interface ShieldInformationBarrierListResponse {
  /**
   * A list of shield information barrier objects.
   */
  entries?: Array<ShieldInformationBarrier>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: string | null;
}

export interface ShieldInformationBarrierCreateParams {
  /**
   * A mini representation of a enterprise, used when nested within another resource.
   */
  enterprise: EnterpriseBase;
}

export interface ShieldInformationBarrierListParams {
  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   */
  marker?: string;
}

export interface ShieldInformationBarrierChangeStatusParams {
  /**
   * The ID of the shield information barrier.
   */
  id: string;

  /**
   * The desired status for the shield information barrier.
   */
  status: 'pending' | 'disabled';
}

export declare namespace ShieldInformationBarriers {
  export {
    type EnterpriseBase as EnterpriseBase,
    type ShieldInformationBarrier as ShieldInformationBarrier,
    type ShieldInformationBarrierListResponse as ShieldInformationBarrierListResponse,
    type ShieldInformationBarrierCreateParams as ShieldInformationBarrierCreateParams,
    type ShieldInformationBarrierListParams as ShieldInformationBarrierListParams,
    type ShieldInformationBarrierChangeStatusParams as ShieldInformationBarrierChangeStatusParams,
  };
}
