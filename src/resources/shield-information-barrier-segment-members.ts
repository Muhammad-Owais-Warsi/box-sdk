// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as ShieldInformationBarrierSegmentsAPI from './shield-information-barrier-segments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShieldInformationBarrierSegmentMembers extends APIResource {
  /**
   * Creates a new shield information barrier segment member.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegmentMember =
   *   await client.shieldInformationBarrierSegmentMembers.create(
   *     {
   *       shield_information_barrier_segment: {},
   *       user: { id: '11446498', type: 'user' },
   *     },
   *   );
   * ```
   */
  create(
    body: ShieldInformationBarrierSegmentMemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegmentMember> {
    return this._client.post('/shield_information_barrier_segment_members', { body, ...options });
  }

  /**
   * Retrieves a shield information barrier segment member by its ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegmentMember =
   *   await client.shieldInformationBarrierSegmentMembers.retrieve(
   *     '7815',
   *   );
   * ```
   */
  retrieve(
    shieldInformationBarrierSegmentMemberID: string,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegmentMember> {
    return this._client.get(
      path`/shield_information_barrier_segment_members/${shieldInformationBarrierSegmentMemberID}`,
      options,
    );
  }

  /**
   * Lists shield information barrier segment members based on provided segment IDs.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierSegmentMembers =
   *   await client.shieldInformationBarrierSegmentMembers.list({
   *     shield_information_barrier_segment_id:
   *       'shield_information_barrier_segment_id',
   *   });
   * ```
   */
  list(
    query: ShieldInformationBarrierSegmentMemberListParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierSegmentMemberListResponse> {
    return this._client.get('/shield_information_barrier_segment_members', { query, ...options });
  }

  /**
   * Deletes a shield information barrier segment member based on provided ID.
   *
   * @example
   * ```ts
   * await client.shieldInformationBarrierSegmentMembers.delete(
   *   '7815',
   * );
   * ```
   */
  delete(shieldInformationBarrierSegmentMemberID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/shield_information_barrier_segment_members/${shieldInformationBarrierSegmentMemberID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface ShieldInformationBarrierSegmentMember {
  /**
   * The unique identifier for the shield information barrier segment member.
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
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;

  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  shield_information_barrier_segment?: ShieldInformationBarrierSegmentMember.ShieldInformationBarrierSegment;

  /**
   * The type of the shield information barrier segment member.
   */
  type?: 'shield_information_barrier_segment_member';

  /**
   * ISO date time string when this shield information barrier segment Member was
   * updated.
   */
  updated_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  updated_by?: RetentionPoliciesAPI.UserBase;

  user?: ShieldInformationBarrierSegmentMember.User;
}

export namespace ShieldInformationBarrierSegmentMember {
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

  export interface User {
    /**
     * The unique identifier for this user.
     */
    id: string;

    /**
     * The value will always be `user`.
     */
    type: 'user';
  }
}

export interface ShieldInformationBarrierSegmentMemberListResponse {
  /**
   * A list of shield information barrier segment members.
   */
  entries?: Array<ShieldInformationBarrierSegmentMember>;

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

export interface ShieldInformationBarrierSegmentMemberCreateParams {
  /**
   * The `type` and `id` of the requested shield information barrier segment.
   */
  shield_information_barrier_segment: ShieldInformationBarrierSegmentMemberCreateParams.ShieldInformationBarrierSegment;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  user: RetentionPoliciesAPI.UserBase;

  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;

  /**
   * A type of the shield barrier segment member.
   */
  type?: 'shield_information_barrier_segment_member';
}

export namespace ShieldInformationBarrierSegmentMemberCreateParams {
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

export interface ShieldInformationBarrierSegmentMemberListParams {
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

export declare namespace ShieldInformationBarrierSegmentMembers {
  export {
    type ShieldInformationBarrierSegmentMember as ShieldInformationBarrierSegmentMember,
    type ShieldInformationBarrierSegmentMemberListResponse as ShieldInformationBarrierSegmentMemberListResponse,
    type ShieldInformationBarrierSegmentMemberCreateParams as ShieldInformationBarrierSegmentMemberCreateParams,
    type ShieldInformationBarrierSegmentMemberListParams as ShieldInformationBarrierSegmentMemberListParams,
  };
}
