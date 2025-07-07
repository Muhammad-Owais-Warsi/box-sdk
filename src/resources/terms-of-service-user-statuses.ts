// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as TermsOfServicesAPI from './terms-of-services';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TermsOfServiceUserStatuses extends APIResource {
  /**
   * Sets the status for a terms of service for a user.
   *
   * @example
   * ```ts
   * const termsOfServiceUserStatus =
   *   await client.termsOfServiceUserStatuses.create({
   *     is_accepted: true,
   *     tos: { id: '1232132', type: 'terms_of_service' },
   *     user: { id: '3423423', type: 'user' },
   *   });
   * ```
   */
  create(
    body: TermsOfServiceUserStatusCreateParams,
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceUserStatus> {
    return this._client.post('/terms_of_service_user_statuses', { body, ...options });
  }

  /**
   * Updates the status for a terms of service for a user.
   *
   * @example
   * ```ts
   * const termsOfServiceUserStatus =
   *   await client.termsOfServiceUserStatuses.update('324234', {
   *     is_accepted: true,
   *   });
   * ```
   */
  update(
    termsOfServiceUserStatusID: string,
    body: TermsOfServiceUserStatusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceUserStatus> {
    return this._client.put(path`/terms_of_service_user_statuses/${termsOfServiceUserStatusID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves an overview of users and their status for a terms of service,
   * including Whether they have accepted the terms and when.
   *
   * @example
   * ```ts
   * const termsOfServiceUserStatuses =
   *   await client.termsOfServiceUserStatuses.list({
   *     tos_id: 'tos_id',
   *   });
   * ```
   */
  list(
    query: TermsOfServiceUserStatusListParams,
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceUserStatusListResponse> {
    return this._client.get('/terms_of_service_user_statuses', { query, ...options });
  }
}

/**
 * The association between a Terms of Service and a user.
 */
export interface TermsOfServiceUserStatus {
  /**
   * The unique identifier for this terms of service user status.
   */
  id: string;

  /**
   * The value will always be `terms_of_service_user_status`.
   */
  type: 'terms_of_service_user_status';

  /**
   * When the legal item was created.
   */
  created_at?: string;

  /**
   * If the user has accepted the terms of services.
   */
  is_accepted?: boolean;

  /**
   * When the legal item was modified.
   */
  modified_at?: string;

  /**
   * The root-level record that is supposed to represent a single Terms of Service.
   */
  tos?: TermsOfServicesAPI.TermsOfServiceBase;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  user?: RetentionPoliciesAPI.UserMini;
}

/**
 * A list of terms of service user statuses.
 */
export interface TermsOfServiceUserStatusListResponse {
  /**
   * A list of terms of service user statuses.
   */
  entries?: Array<TermsOfServiceUserStatus>;

  /**
   * The total number of objects.
   */
  total_count?: number;
}

export interface TermsOfServiceUserStatusCreateParams {
  /**
   * Whether the user has accepted the terms.
   */
  is_accepted: boolean;

  /**
   * The terms of service to set the status for.
   */
  tos: TermsOfServiceUserStatusCreateParams.Tos;

  /**
   * The user to set the status for.
   */
  user: TermsOfServiceUserStatusCreateParams.User;
}

export namespace TermsOfServiceUserStatusCreateParams {
  /**
   * The terms of service to set the status for.
   */
  export interface Tos {
    /**
     * The ID of terms of service.
     */
    id: string;

    /**
     * The type of object.
     */
    type: 'terms_of_service';
  }

  /**
   * The user to set the status for.
   */
  export interface User {
    /**
     * The ID of user.
     */
    id: string;

    /**
     * The type of object.
     */
    type: 'user';
  }
}

export interface TermsOfServiceUserStatusUpdateParams {
  /**
   * Whether the user has accepted the terms.
   */
  is_accepted: boolean;
}

export interface TermsOfServiceUserStatusListParams {
  /**
   * The ID of the terms of service.
   */
  tos_id: string;

  /**
   * Limits results to the given user ID.
   */
  user_id?: string;
}

export declare namespace TermsOfServiceUserStatuses {
  export {
    type TermsOfServiceUserStatus as TermsOfServiceUserStatus,
    type TermsOfServiceUserStatusListResponse as TermsOfServiceUserStatusListResponse,
    type TermsOfServiceUserStatusCreateParams as TermsOfServiceUserStatusCreateParams,
    type TermsOfServiceUserStatusUpdateParams as TermsOfServiceUserStatusUpdateParams,
    type TermsOfServiceUserStatusListParams as TermsOfServiceUserStatusListParams,
  };
}
