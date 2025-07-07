// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EmailAliases extends APIResource {
  /**
   * Adds a new email alias to a user account..
   *
   * @example
   * ```ts
   * const emailAlias = await client.users.emailAliases.create(
   *   '12345',
   *   { email: 'alias@example.com' },
   * );
   * ```
   */
  create(userID: string, body: EmailAliasCreateParams, options?: RequestOptions): APIPromise<EmailAlias> {
    return this._client.post(path`/users/${userID}/email_aliases`, { body, ...options });
  }

  /**
   * Retrieves all email aliases for a user. The collection does not include the
   * primary login for the user.
   *
   * @example
   * ```ts
   * const emailAliases = await client.users.emailAliases.list(
   *   '12345',
   * );
   * ```
   */
  list(userID: string, options?: RequestOptions): APIPromise<EmailAliasListResponse> {
    return this._client.get(path`/users/${userID}/email_aliases`, options);
  }

  /**
   * Removes an email alias from a user.
   *
   * @example
   * ```ts
   * await client.users.emailAliases.delete('23432', {
   *   user_id: '12345',
   * });
   * ```
   */
  delete(emailAliasID: string, params: EmailAliasDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { user_id } = params;
    return this._client.delete(path`/users/${user_id}/email_aliases/${emailAliasID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An email alias for a user.
 */
export interface EmailAlias {
  /**
   * The unique identifier for this object.
   */
  id?: string;

  /**
   * The email address.
   */
  email?: string;

  /**
   * Whether the email address has been confirmed.
   */
  is_confirmed?: boolean;

  /**
   * The value will always be `email_alias`.
   */
  type?: 'email_alias';
}

/**
 * A list of email aliases.
 */
export interface EmailAliasListResponse {
  /**
   * A list of email aliases.
   */
  entries?: Array<EmailAlias>;

  /**
   * The number of email aliases.
   */
  total_count?: number;
}

export interface EmailAliasCreateParams {
  /**
   * The email address to add to the account as an alias.
   *
   * Note: The domain of the email alias needs to be registered to your enterprise.
   * See the
   * [domain verification guide](https://support.box.com/hc/en-us/articles/4408619650579-Domain-Verification)
   * for steps to add a new domain.
   */
  email: string;
}

export interface EmailAliasDeleteParams {
  /**
   * The ID of the user.
   */
  user_id: string;
}

export declare namespace EmailAliases {
  export {
    type EmailAlias as EmailAlias,
    type EmailAliasListResponse as EmailAliasListResponse,
    type EmailAliasCreateParams as EmailAliasCreateParams,
    type EmailAliasDeleteParams as EmailAliasDeleteParams,
  };
}
