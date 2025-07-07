// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShieldInformationBarrierSegments extends APIResource {
  /**
   * Creates a shield information barrier segment.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegment =
   *   await client.shieldInformationBarrierSegments.create({
   *     name: 'Investment Banking',
   *     shield_information_barrier: {},
   *   });
   * ```
   */
  create(
    body: ShieldInformationBarrierSegmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegment> {
    return this._client.post('/shield_information_barrier_segments', { body, ...options });
  }

  /**
   * Retrieves shield information barrier segment based on provided ID..
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegment =
   *   await client.shieldInformationBarrierSegments.retrieve(
   *     '3423',
   *   );
   * ```
   */
  retrieve(
    shieldInformationBarrierSegmentID: string,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegment> {
    return this._client.get(
      path`/shield_information_barrier_segments/${shieldInformationBarrierSegmentID}`,
      options,
    );
  }

  /**
   * Updates the shield information barrier segment based on provided ID..
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegment =
   *   await client.shieldInformationBarrierSegments.update(
   *     '3423',
   *   );
   * ```
   */
  update(
    shieldInformationBarrierSegmentID: string,
    body: ShieldInformationBarrierSegmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegment> {
    return this._client.put(path`/shield_information_barrier_segments/${shieldInformationBarrierSegmentID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of shield information barrier segment objects for the specified
   * Information Barrier ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegments =
   *   await client.shieldInformationBarrierSegments.list({
   *     shield_information_barrier_id:
   *       'shield_information_barrier_id',
   *   });
   * ```
   */
  list(
    query: ShieldInformationBarrierSegmentListParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegmentListResponse> {
    return this._client.get('/shield_information_barrier_segments', { query, ...options });
  }

  /**
   * Deletes the shield information barrier segment based on provided ID.
   *
   * @example
   * ```ts
   * await client.shieldInformationBarrierSegments.delete(
   *   '3423',
   * );
   * ```
   */
  delete(shieldInformationBarrierSegmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/shield_information_barrier_segments/${shieldInformationBarrierSegmentID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

/**
 * A base representation of a shield information barrier object.
 */
export interface ShieldInformationBarrierBase {
  /**
   * The unique identifier for the shield information barrier.
   */
  id?: string;

  /**
   * The type of the shield information barrier.
   */
  type?: 'shield_information_barrier';
}

/**
 * A shield information barrier segment object.
 */
export interface ShieldInformationBarrierSegment {
  /**
   * The unique identifier for the shield information barrier segment.
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
   * Description of the shield information barrier segment.
   */
  description?: string;

  /**
   * Name of the shield information barrier segment.
   */
  name?: string;

  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierBase;

  /**
   * The type of the shield information barrier segment.
   */
  type?: 'shield_information_barrier_segment';

  /**
   * ISO date time string when this shield information barrier segment was updated.
   */
  updated_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  updated_by?: RetentionPoliciesAPI.UserBase;
}

export interface ShieldInformationBarrierSegmentListResponse {
  /**
   * A list of shield information barrier segments.
   */
  entries?: Array<ShieldInformationBarrierSegment>;

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

export interface ShieldInformationBarrierSegmentCreateParams {
  /**
   * Name of the shield information barrier segment.
   */
  name: string;

  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier: ShieldInformationBarrierBase;

  /**
   * Description of the shield information barrier segment.
   */
  description?: string;
}

export interface ShieldInformationBarrierSegmentUpdateParams {
  /**
   * The updated description for the shield information barrier segment.
   */
  description?: string | null;

  /**
   * The updated name for the shield information barrier segment.
   */
  name?: string;
}

export interface ShieldInformationBarrierSegmentListParams {
  /**
   * The ID of the shield information barrier.
   */
  shield_information_barrier_id: string;

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

export declare namespace ShieldInformationBarrierSegments {
  export {
    type ShieldInformationBarrierBase as ShieldInformationBarrierBase,
    type ShieldInformationBarrierSegment as ShieldInformationBarrierSegment,
    type ShieldInformationBarrierSegmentListResponse as ShieldInformationBarrierSegmentListResponse,
    type ShieldInformationBarrierSegmentCreateParams as ShieldInformationBarrierSegmentCreateParams,
    type ShieldInformationBarrierSegmentUpdateParams as ShieldInformationBarrierSegmentUpdateParams,
    type ShieldInformationBarrierSegmentListParams as ShieldInformationBarrierSegmentListParams,
  };
}
