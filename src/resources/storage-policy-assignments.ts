// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as StoragePoliciesAPI from './storage-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StoragePolicyAssignments extends APIResource {
  /**
   * Creates a storage policy assignment for an enterprise or user.
   *
   * @example
   * ```ts
   * const storagePolicyAssignment =
   *   await client.storagePolicyAssignments.create({
   *     assigned_to: { id: '9987987', type: 'user' },
   *     storage_policy: {
   *       id: '1434325',
   *       type: 'storage_policy',
   *     },
   *   });
   * ```
   */
  create(
    body: StoragePolicyAssignmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<StoragePolicyAssignment> {
    return this._client.post('/storage_policy_assignments', { body, ...options });
  }

  /**
   * Fetches a specific storage policy assignment.
   *
   * @example
   * ```ts
   * const storagePolicyAssignment =
   *   await client.storagePolicyAssignments.retrieve('932483');
   * ```
   */
  retrieve(storagePolicyAssignmentID: string, options?: RequestOptions): APIPromise<StoragePolicyAssignment> {
    return this._client.get(path`/storage_policy_assignments/${storagePolicyAssignmentID}`, options);
  }

  /**
   * Updates a specific storage policy assignment.
   *
   * @example
   * ```ts
   * const storagePolicyAssignment =
   *   await client.storagePolicyAssignments.update('932483', {
   *     storage_policy: {
   *       id: '1434325',
   *       type: 'storage_policy',
   *     },
   *   });
   * ```
   */
  update(
    storagePolicyAssignmentID: string,
    body: StoragePolicyAssignmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StoragePolicyAssignment> {
    return this._client.put(path`/storage_policy_assignments/${storagePolicyAssignmentID}`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches all the storage policy assignment for an enterprise or user.
   *
   * @example
   * ```ts
   * const storagePolicyAssignments =
   *   await client.storagePolicyAssignments.list({
   *     resolved_for_id: 'resolved_for_id',
   *     resolved_for_type: 'user',
   *   });
   * ```
   */
  list(
    query: StoragePolicyAssignmentListParams,
    options?: RequestOptions,
  ): APIPromise<StoragePolicyAssignmentListResponse> {
    return this._client.get('/storage_policy_assignments', { query, ...options });
  }

  /**
   * Delete a storage policy assignment.
   *
   * Deleting a storage policy assignment on a user will have the user inherit the
   * enterprise's default storage policy.
   *
   * There is a rate limit for calling this endpoint of only twice per user in a 24
   * hour time frame.
   *
   * @example
   * ```ts
   * await client.storagePolicyAssignments.delete('932483');
   * ```
   */
  delete(storagePolicyAssignmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/storage_policy_assignments/${storagePolicyAssignmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The assignment of a storage policy to a user or enterprise.
 */
export interface StoragePolicyAssignment {
  /**
   * The unique identifier for a storage policy assignment.
   */
  id: string;

  /**
   * The value will always be `storage_policy_assignment`.
   */
  type: 'storage_policy_assignment';

  /**
   * The bare basic reference for an object.
   */
  assigned_to?: StoragePolicyAssignment.AssignedTo;

  /**
   * A mini description of a Storage Policy object.
   */
  storage_policy?: StoragePoliciesAPI.StoragePolicyMini;
}

export namespace StoragePolicyAssignment {
  /**
   * The bare basic reference for an object.
   */
  export interface AssignedTo {
    /**
     * The unique identifier for this object.
     */
    id?: string;

    /**
     * The type for this object.
     */
    type?: string;
  }
}

export interface StoragePolicyAssignmentListResponse {
  /**
   * A list of storage policy assignments.
   */
  entries?: Array<StoragePolicyAssignment>;

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

  /**
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;
}

export interface StoragePolicyAssignmentCreateParams {
  /**
   * The user or enterprise to assign the storage policy to.
   */
  assigned_to: StoragePolicyAssignmentCreateParams.AssignedTo;

  /**
   * The storage policy to assign to the user or enterprise.
   */
  storage_policy: StoragePolicyAssignmentCreateParams.StoragePolicy;
}

export namespace StoragePolicyAssignmentCreateParams {
  /**
   * The user or enterprise to assign the storage policy to.
   */
  export interface AssignedTo {
    /**
     * The ID of the user or enterprise.
     */
    id: string;

    /**
     * The type to assign the policy to.
     */
    type: 'user' | 'enterprise';
  }

  /**
   * The storage policy to assign to the user or enterprise.
   */
  export interface StoragePolicy {
    /**
     * The ID of the storage policy to assign.
     */
    id: string;

    /**
     * The type to assign.
     */
    type: 'storage_policy';
  }
}

export interface StoragePolicyAssignmentUpdateParams {
  /**
   * The storage policy to assign to the user or enterprise.
   */
  storage_policy: StoragePolicyAssignmentUpdateParams.StoragePolicy;
}

export namespace StoragePolicyAssignmentUpdateParams {
  /**
   * The storage policy to assign to the user or enterprise.
   */
  export interface StoragePolicy {
    /**
     * The ID of the storage policy to assign.
     */
    id: string;

    /**
     * The type to assign.
     */
    type: 'storage_policy';
  }
}

export interface StoragePolicyAssignmentListParams {
  /**
   * The ID of the user or enterprise to return assignments for.
   */
  resolved_for_id: string;

  /**
   * The target type to return assignments for.
   */
  resolved_for_type: 'user' | 'enterprise';

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;
}

export declare namespace StoragePolicyAssignments {
  export {
    type StoragePolicyAssignment as StoragePolicyAssignment,
    type StoragePolicyAssignmentListResponse as StoragePolicyAssignmentListResponse,
    type StoragePolicyAssignmentCreateParams as StoragePolicyAssignmentCreateParams,
    type StoragePolicyAssignmentUpdateParams as StoragePolicyAssignmentUpdateParams,
    type StoragePolicyAssignmentListParams as StoragePolicyAssignmentListParams,
  };
}
