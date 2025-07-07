// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as ShieldInformationBarrierSegmentsAPI from './shield-information-barrier-segments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShieldInformationBarrierSegmentRestrictions extends APIResource {
  /**
   * Creates a shield information barrier segment restriction object.
   *
   * @example
   * ```ts
   * const segmentRestriction =
   *   await client.shieldInformationBarrierSegmentRestrictions.create(
   *     {
   *       restricted_segment: {},
   *       shield_information_barrier_segment: {},
   *       type: 'shield_information_barrier_segment_restriction',
   *     },
   *   );
   * ```
   */
  create(
    body: ShieldInformationBarrierSegmentRestrictionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SegmentRestriction> {
    return this._client.post('/shield_information_barrier_segment_restrictions', { body, ...options });
  }

  /**
   * Retrieves a shield information barrier segment restriction based on provided ID.
   *
   * @example
   * ```ts
   * const segmentRestriction =
   *   await client.shieldInformationBarrierSegmentRestrictions.retrieve(
   *     '4563',
   *   );
   * ```
   */
  retrieve(
    shieldInformationBarrierSegmentRestrictionID: string,
    options?: RequestOptions,
  ): APIPromise<SegmentRestriction> {
    return this._client.get(
      path`/shield_information_barrier_segment_restrictions/${shieldInformationBarrierSegmentRestrictionID}`,
      options,
    );
  }

  /**
   * Lists shield information barrier segment restrictions based on provided segment
   * ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegmentRestrictions =
   *   await client.shieldInformationBarrierSegmentRestrictions.list(
   *     {
   *       shield_information_barrier_segment_id:
   *         'shield_information_barrier_segment_id',
   *     },
   *   );
   * ```
   */
  list(
    query: ShieldInformationBarrierSegmentRestrictionListParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegmentRestrictionListResponse> {
    return this._client.get('/shield_information_barrier_segment_restrictions', { query, ...options });
  }

  /**
   * Delete shield information barrier segment restriction based on provided ID.
   *
   * @example
   * ```ts
   * await client.shieldInformationBarrierSegmentRestrictions.delete(
   *   '4563',
   * );
   * ```
   */
  delete(shieldInformationBarrierSegmentRestrictionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/shield_information_barrier_segment_restrictions/${shieldInformationBarrierSegmentRestrictionID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface SegmentRestriction {
  /**
   * The `type` and `id` of the restricted shield information barrier segment.
   */
  restricted_segment: SegmentRestriction.RestrictedSegment;

  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  shield_information_barrier_segment: SegmentRestriction.ShieldInformationBarrierSegment;

  /**
   * The unique identifier for the shield information barrier segment restriction.
   */
  id?: string;

  /**
   * ISO date time string when this shield information barrier Segment Restriction
   * object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  created_by?: RetentionPoliciesAPI.UserBase;

  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;

  /**
   * Shield information barrier segment restriction.
   */
  type?: 'shield_information_barrier_segment_restriction';

  /**
   * ISO date time string when this shield information barrier segment Restriction
   * was updated.
   */
  updated_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  updated_by?: RetentionPoliciesAPI.UserBase;
}

export namespace SegmentRestriction {
  /**
   * The `type` and `id` of the restricted shield information barrier segment.
   */
  export interface RestrictedSegment {
    /**
     * The ID reference of the restricted shield information barrier segment.
     */
    id?: string;

    /**
     * The type of the shield information segment.
     */
    type?: 'shield_information_barrier_segment';
  }

  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  export interface ShieldInformationBarrierSegment {
    /**
     * The ID reference of the requesting shield information barrier segment.
     */
    id?: string;

    /**
     * The type of the shield information barrier segment.
     */
    type?: 'shield_information_barrier_segment';
  }
}

export interface ShieldInformationBarrierSegmentRestrictionListResponse {
  /**
   * A list of shield information barrier segment restriction objects.
   */
  entries?: Array<SegmentRestriction>;

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

export interface ShieldInformationBarrierSegmentRestrictionCreateParams {
  /**
   * The `type` and `id` of the restricted shield information barrier segment.
   */
  restricted_segment: ShieldInformationBarrierSegmentRestrictionCreateParams.RestrictedSegment;

  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  shield_information_barrier_segment: ShieldInformationBarrierSegmentRestrictionCreateParams.ShieldInformationBarrierSegment;

  /**
   * The type of the shield barrier segment restriction for this member.
   */
  type: 'shield_information_barrier_segment_restriction';

  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;
}

export namespace ShieldInformationBarrierSegmentRestrictionCreateParams {
  /**
   * The `type` and `id` of the restricted shield information barrier segment.
   */
  export interface RestrictedSegment {
    /**
     * The ID reference of the restricted shield information barrier segment.
     */
    id?: string;

    /**
     * The type of the restricted shield information barrier segment.
     */
    type?: 'shield_information_barrier_segment';
  }

  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  export interface ShieldInformationBarrierSegment {
    /**
     * The ID reference of the requesting shield information barrier segment.
     */
    id?: string;

    /**
     * The type of the shield barrier segment for this member.
     */
    type?: 'shield_information_barrier_segment';
  }
}

export interface ShieldInformationBarrierSegmentRestrictionListParams {
  /**
   * The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id: string;

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

export declare namespace ShieldInformationBarrierSegmentRestrictions {
  export {
    type SegmentRestriction as SegmentRestriction,
    type ShieldInformationBarrierSegmentRestrictionListResponse as ShieldInformationBarrierSegmentRestrictionListResponse,
    type ShieldInformationBarrierSegmentRestrictionCreateParams as ShieldInformationBarrierSegmentRestrictionCreateParams,
    type ShieldInformationBarrierSegmentRestrictionListParams as ShieldInformationBarrierSegmentRestrictionListParams,
  };
}
