// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TermsOfServices extends APIResource {
  /**
   * Creates a terms of service for a given enterprise and type of user.
   *
   * @example
   * ```ts
   * const termsOfService = await client.termsOfServices.create({
   *   status: 'enabled',
   *   text: 'By collaborating on this file you are accepting...',
   * });
   * ```
   */
  create(body: TermsOfServiceCreateParams, options?: RequestOptions): APIPromise<TermsOfService> {
    return this._client.post('/terms_of_services', { body, ...options });
  }

  /**
   * Fetches a specific terms of service.
   *
   * @example
   * ```ts
   * const termsOfService =
   *   await client.termsOfServices.retrieve('324234');
   * ```
   */
  retrieve(termsOfServiceID: string, options?: RequestOptions): APIPromise<TermsOfService> {
    return this._client.get(path`/terms_of_services/${termsOfServiceID}`, options);
  }

  /**
   * Updates a specific terms of service.
   *
   * @example
   * ```ts
   * const termsOfService = await client.termsOfServices.update(
   *   '324234',
   *   {
   *     status: 'enabled',
   *     text: 'By collaborating on this file you are accepting...',
   *   },
   * );
   * ```
   */
  update(
    termsOfServiceID: string,
    body: TermsOfServiceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TermsOfService> {
    return this._client.put(path`/terms_of_services/${termsOfServiceID}`, { body, ...options });
  }

  /**
   * Returns the current terms of service text and settings for the enterprise.
   *
   * @example
   * ```ts
   * const termsOfServices = await client.termsOfServices.list();
   * ```
   */
  list(
    query: TermsOfServiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceListResponse> {
    return this._client.get('/terms_of_services', { query, ...options });
  }
}

/**
 * The root-level record that is supposed to represent a single Terms of Service.
 */
export interface TermsOfService extends TermsOfServiceBase {
  /**
   * When the legal item was created.
   */
  created_at?: string;

  /**
   * A representation of a Box enterprise.
   */
  enterprise?: TermsOfService.Enterprise;

  /**
   * When the legal item was modified.
   */
  modified_at?: string;

  /**
   * Whether these terms are enabled or not.
   */
  status?: 'enabled' | 'disabled';

  /**
   * The text for your terms and conditions. This text could be empty if the `status`
   * is set to `disabled`.
   */
  text?: string;

  /**
   * Whether to apply these terms to managed users or external users.
   */
  tos_type?: 'managed' | 'external';
}

export namespace TermsOfService {
  /**
   * A representation of a Box enterprise.
   */
  export interface Enterprise {
    /**
     * The unique identifier for this enterprise.
     */
    id?: string;

    /**
     * The name of the enterprise.
     */
    name?: string;

    /**
     * The value will always be `enterprise`.
     */
    type?: 'enterprise';
  }
}

/**
 * The root-level record that is supposed to represent a single Terms of Service.
 */
export interface TermsOfServiceBase {
  /**
   * The unique identifier for this terms of service.
   */
  id: string;

  /**
   * The value will always be `terms_of_service`.
   */
  type: 'terms_of_service';
}

/**
 * A list of terms of services.
 */
export interface TermsOfServiceListResponse {
  /**
   * A list of terms of service objects.
   */
  entries?: Array<TermsOfService>;

  /**
   * The total number of objects.
   */
  total_count?: number;
}

export interface TermsOfServiceCreateParams {
  /**
   * Whether this terms of service is active.
   */
  status: 'enabled' | 'disabled';

  /**
   * The terms of service text to display to users.
   *
   * The text can be set to empty if the `status` is set to `disabled`.
   */
  text: string;

  /**
   * The type of user to set the terms of service for.
   */
  tos_type?: 'external' | 'managed';
}

export interface TermsOfServiceUpdateParams {
  /**
   * Whether this terms of service is active.
   */
  status: 'enabled' | 'disabled';

  /**
   * The terms of service text to display to users.
   *
   * The text can be set to empty if the `status` is set to `disabled`.
   */
  text: string;
}

export interface TermsOfServiceListParams {
  /**
   * Limits the results to the terms of service of the given type.
   */
  tos_type?: 'external' | 'managed';
}

export declare namespace TermsOfServices {
  export {
    type TermsOfService as TermsOfService,
    type TermsOfServiceBase as TermsOfServiceBase,
    type TermsOfServiceListResponse as TermsOfServiceListResponse,
    type TermsOfServiceCreateParams as TermsOfServiceCreateParams,
    type TermsOfServiceUpdateParams as TermsOfServiceUpdateParams,
    type TermsOfServiceListParams as TermsOfServiceListParams,
  };
}
