// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GroupMembershipsAPI from '../group-memberships';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as AvatarAPI from './avatar';
import { Avatar, AvatarUpdateParams, AvatarUpdateResponse } from './avatar';
import * as EmailAliasesAPI from './email-aliases';
import {
  EmailAlias,
  EmailAliasCreateParams,
  EmailAliasDeleteParams,
  EmailAliasListResponse,
  EmailAliases,
} from './email-aliases';
import * as FoldersAPI from './folders';
import { FolderTransferParams, Folders } from './folders';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  emailAliases: EmailAliasesAPI.EmailAliases = new EmailAliasesAPI.EmailAliases(this._client);

  /**
   * Creates a new managed user in an enterprise. This endpoint is only available to
   * users and applications with the right admin permissions.
   *
   * @example
   * ```ts
   * const userFull = await client.users.create({
   *   name: 'Aaron Levie',
   * });
   * ```
   */
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<UserFull> {
    const { fields, ...body } = params;
    return this._client.post('/users', { query: { fields }, body, ...options });
  }

  /**
   * Retrieves information about a user in the enterprise.
   *
   * The application and the authenticated user need to have the permission to look
   * up users in the entire enterprise.
   *
   * This endpoint also returns a limited set of information for external users who
   * are collaborated on content owned by the enterprise for authenticated users with
   * the right scopes. In this case, disallowed fields will return null instead.
   *
   * @example
   * ```ts
   * const userFull = await client.users.retrieve('12345');
   * ```
   */
  retrieve(
    userID: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserFull> {
    return this._client.get(path`/users/${userID}`, { query, ...options });
  }

  /**
   * Updates a managed or app user in an enterprise. This endpoint is only available
   * to users and applications with the right admin permissions.
   *
   * @example
   * ```ts
   * const userFull = await client.users.update('12345');
   * ```
   */
  update(
    userID: string,
    params: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserFull> {
    const { fields, ...body } = params ?? {};
    return this._client.put(path`/users/${userID}`, { query: { fields }, body, ...options });
  }

  /**
   * Returns a list of all users for the Enterprise along with their `user_id`,
   * `public_name`, and `login`.
   *
   * The application and the authenticated user need to have the permission to look
   * up users in the entire enterprise.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Deletes a user. By default this will fail if the user still owns any content.
   * Move their owned content first before proceeding, or use the `force` field to
   * delete the user and their files.
   *
   * @example
   * ```ts
   * await client.users.delete('12345');
   * ```
   */
  delete(
    userID: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { force, notify } = params ?? {};
    return this._client.delete(path`/users/${userID}`, {
      query: { force, notify },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all the groups for a user. Only members of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupMemberships = await client.users.listMemberships(
   *   '12345',
   * );
   * ```
   */
  listMemberships(
    userID: string,
    query: UserListMembershipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupMemberships> {
    return this._client.get(path`/users/${userID}/memberships`, { query, ...options });
  }

  /**
   * Retrieves information about the user who is currently authenticated.
   *
   * In the case of a client-side authenticated OAuth 2.0 application this will be
   * the user who authorized the app.
   *
   * In the case of a JWT, server-side authenticated application this will be the
   * service account that belongs to the application by default.
   *
   * Use the `As-User` header to change who this API call is made on behalf of.
   *
   * @example
   * ```ts
   * const userFull = await client.users.retrieveCurrent();
   * ```
   */
  retrieveCurrent(
    query: UserRetrieveCurrentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserFull> {
    return this._client.get('/users/me', { query, ...options });
  }

  /**
   * Validates the roles and permissions of the user, and creates asynchronous jobs
   * to terminate the user's sessions. Returns the status for the POST request.
   *
   * @example
   * ```ts
   * const sessionTerminationMessage =
   *   await client.users.terminateSessions({
   *     user_ids: ['123456', '456789'],
   *     user_logins: ['user@sample.com', 'user2@sample.com'],
   *   });
   * ```
   */
  terminateSessions(
    body: UserTerminateSessionsParams,
    options?: RequestOptions,
  ): APIPromise<SessionTerminationMessage> {
    return this._client.post('/users/terminate_sessions', { body, ...options });
  }
}

export interface GroupMemberships {
  /**
   * A list of group memberships.
   */
  entries?: Array<GroupMembershipsAPI.GroupMembership>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

  /**
   * The 0-based offset of the first entry in this set. This will be the same as the
   * `offset` query parameter.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  offset?: number;

  /**
   * The order by which items are returned.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  order?: Array<GroupMemberships.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace GroupMemberships {
  /**
   * The order in which a pagination is ordered.
   */
  export interface Order {
    /**
     * The field to order by.
     */
    by?: string;

    /**
     * The direction to order by, either ascending or descending.
     */
    direction?: 'ASC' | 'DESC';
  }
}

/**
 * A message informing about the termination job status.
 */
export interface SessionTerminationMessage {
  /**
   * The unique identifier for the termination job status.
   */
  message?: string;
}

/**
 * Tracking codes allow an admin to generate reports from the admin console and
 * assign an attribute to a specific group of users. This setting must be enabled
 * for an enterprise before it can be used.
 */
export interface TrackingCode {
  /**
   * The name of the tracking code, which must be preconfigured in the Admin Console.
   */
  name?: string;

  /**
   * The value will always be `tracking_code`.
   */
  type?: 'tracking_code';

  /**
   * The value of the tracking code.
   */
  value?: string;
}

/**
 * A standard representation of a user, as returned from any user API endpoints by
 * default.
 */
export interface User extends RetentionPoliciesAPI.UserMini {
  /**
   * The user’s address.
   */
  address?: string;

  /**
   * URL of the user’s avatar image.
   */
  avatar_url?: string;

  /**
   * When the user object was created.
   */
  created_at?: string;

  /**
   * The user’s job title.
   */
  job_title?: string;

  /**
   * The language of the user, formatted in modified version of the
   * [ISO 639-1](/guides/api-calls/language-codes) format.
   */
  language?: string;

  /**
   * The maximum individual file size in bytes the user can have.
   */
  max_upload_size?: number;

  /**
   * When the user object was last modified.
   */
  modified_at?: string;

  /**
   * An alternate notification email address to which email notifications are sent.
   * When it's confirmed, this will be the email address to which notifications are
   * sent instead of to the primary email address.
   */
  notification_email?: User.NotificationEmail | null;

  /**
   * The user’s phone number.
   */
  phone?: string;

  /**
   * The user’s total available space amount in bytes.
   */
  space_amount?: number;

  /**
   * The amount of space in use by the user.
   */
  space_used?: number;

  /**
   * The user's account status.
   */
  status?: 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload';

  /**
   * The user's timezone.
   */
  timezone?: string;
}

export namespace User {
  /**
   * An alternate notification email address to which email notifications are sent.
   * When it's confirmed, this will be the email address to which notifications are
   * sent instead of to the primary email address.
   */
  export interface NotificationEmail {
    /**
     * The email address to send the notifications to.
     */
    email?: string;

    /**
     * Specifies if this email address has been confirmed.
     */
    is_confirmed?: boolean;
  }
}

/**
 * A full representation of a user, as can be returned from any user API endpoint.
 */
export interface UserFull extends User {
  /**
   * Whether the user can see other enterprise users in their contact list.
   */
  can_see_managed_users?: boolean;

  /**
   * A representation of a Box enterprise.
   */
  enterprise?: UserFull.Enterprise;

  /**
   * An external identifier for an app user, which can be used to look up the user.
   * This can be used to tie user IDs from external identity providers to Box users.
   */
  external_app_user_id?: string;

  /**
   * The root (protocol, subdomain, domain) of any links that need to be generated
   * for the user.
   */
  hostname?: string;

  /**
   * Whether to exempt the user from Enterprise device limits.
   */
  is_exempt_from_device_limits?: boolean;

  /**
   * Whether the user must use two-factor authentication.
   */
  is_exempt_from_login_verification?: boolean;

  /**
   * Whether the user is allowed to collaborate with users outside their enterprise.
   */
  is_external_collab_restricted?: boolean;

  /**
   * Whether the user is an App User.
   */
  is_platform_access_only?: boolean;

  /**
   * Whether the user can use Box Sync.
   */
  is_sync_enabled?: boolean;

  /**
   * Tags for all files and folders owned by the user. Values returned will only
   * contain tags that were set by the requester.
   */
  my_tags?: Array<string>;

  /**
   * The user’s enterprise role.
   */
  role?: 'admin' | 'coadmin' | 'user';

  /**
   * Tracking codes allow an admin to generate reports from the admin console and
   * assign an attribute to a specific group of users. This setting must be enabled
   * for an enterprise before it can be used.
   */
  tracking_codes?: Array<TrackingCode>;
}

export namespace UserFull {
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

export interface UserListResponse {
  /**
   * A list of users.
   */
  entries?: Array<UserFull>;

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
   * The 0-based offset of the first entry in this set. This will be the same as the
   * `offset` query parameter.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  offset?: number;

  /**
   * The order by which items are returned.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  order?: Array<UserListResponse.Order>;

  /**
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace UserListResponse {
  /**
   * The order in which a pagination is ordered.
   */
  export interface Order {
    /**
     * The field to order by.
     */
    by?: string;

    /**
     * The direction to order by, either ascending or descending.
     */
    direction?: 'ASC' | 'DESC';
  }
}

export interface UserCreateParams {
  /**
   * Body param: The name of the user.
   */
  name: string;

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Body param: The user’s address.
   */
  address?: string;

  /**
   * Body param: Whether the user can see other enterprise users in their contact
   * list.
   */
  can_see_managed_users?: boolean;

  /**
   * Body param: An external identifier for an app user, which can be used to look up
   * the user. This can be used to tie user IDs from external identity providers to
   * Box users.
   */
  external_app_user_id?: string;

  /**
   * Body param: Whether to exempt the user from enterprise device limits.
   */
  is_exempt_from_device_limits?: boolean;

  /**
   * Body param: Whether the user must use two-factor authentication.
   */
  is_exempt_from_login_verification?: boolean;

  /**
   * Body param: Whether the user is allowed to collaborate with users outside their
   * enterprise.
   */
  is_external_collab_restricted?: boolean;

  /**
   * Body param: Specifies that the user is an app user.
   */
  is_platform_access_only?: boolean;

  /**
   * Body param: Whether the user can use Box Sync.
   */
  is_sync_enabled?: boolean;

  /**
   * Body param: The user’s job title.
   */
  job_title?: string;

  /**
   * Body param: The language of the user, formatted in modified version of the
   * [ISO 639-1](/guides/api-calls/language-codes) format.
   */
  language?: string;

  /**
   * Body param: The email address the user uses to log in
   *
   * Required, unless `is_platform_access_only` is set to `true`.
   */
  login?: string;

  /**
   * Body param: The user’s phone number.
   */
  phone?: string;

  /**
   * Body param: The user’s enterprise role.
   */
  role?: 'coadmin' | 'user';

  /**
   * Body param: The user’s total available space in bytes. Set this to `-1` to
   * indicate unlimited storage.
   */
  space_amount?: number;

  /**
   * Body param: The user's account status.
   */
  status?: 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload';

  /**
   * Body param: The user's timezone.
   */
  timezone?: string;

  /**
   * Body param: Tracking codes allow an admin to generate reports from the admin
   * console and assign an attribute to a specific group of users. This setting must
   * be enabled for an enterprise before it can be used.
   */
  tracking_codes?: Array<TrackingCode>;
}

export interface UserRetrieveParams {
  /**
   * A comma-separated list of attributes to include in the response. This can be
   * used to request fields that are not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;
}

export interface UserUpdateParams {
  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Body param: The user’s address.
   */
  address?: string;

  /**
   * Body param: Whether the user can see other enterprise users in their contact
   * list.
   */
  can_see_managed_users?: boolean;

  /**
   * Body param: Set this to `null` to roll the user out of the enterprise and make
   * them a free user.
   */
  enterprise?: string | null;

  /**
   * Body param: An external identifier for an app user, which can be used to look up
   * the user. This can be used to tie user IDs from external identity providers to
   * Box users.
   *
   * Note: In order to update this field, you need to request a token using the
   * application that created the app user.
   */
  external_app_user_id?: string;

  /**
   * Body param: Whether to exempt the user from enterprise device limits.
   */
  is_exempt_from_device_limits?: boolean;

  /**
   * Body param: Whether the user must use two-factor authentication.
   */
  is_exempt_from_login_verification?: boolean;

  /**
   * Body param: Whether the user is allowed to collaborate with users outside their
   * enterprise.
   */
  is_external_collab_restricted?: boolean;

  /**
   * Body param: Whether the user is required to reset their password.
   */
  is_password_reset_required?: boolean;

  /**
   * Body param: Whether the user can use Box Sync.
   */
  is_sync_enabled?: boolean;

  /**
   * Body param: The user’s job title.
   */
  job_title?: string;

  /**
   * Body param: The language of the user, formatted in modified version of the
   * [ISO 639-1](/guides/api-calls/language-codes) format.
   */
  language?: string;

  /**
   * Body param: The email address the user uses to log in
   *
   * Note: If the target user's email is not confirmed, then the primary login
   * address cannot be changed.
   */
  login?: string;

  /**
   * Body param: The name of the user.
   */
  name?: string;

  /**
   * Body param: An alternate notification email address to which email notifications
   * are sent. When it's confirmed, this will be the email address to which
   * notifications are sent instead of to the primary email address.
   *
   * Set this value to `null` to remove the notification email.
   */
  notification_email?: UserUpdateParams.NotificationEmail | null;

  /**
   * Body param: Whether the user should receive an email when they are rolled out of
   * an enterprise.
   */
  notify?: boolean;

  /**
   * Body param: The user’s phone number.
   */
  phone?: string;

  /**
   * Body param: The user’s enterprise role.
   */
  role?: 'coadmin' | 'user';

  /**
   * Body param: The user’s total available space in bytes. Set this to `-1` to
   * indicate unlimited storage.
   */
  space_amount?: number;

  /**
   * Body param: The user's account status.
   */
  status?: 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload';

  /**
   * Body param: The user's timezone.
   */
  timezone?: string;

  /**
   * Body param: Tracking codes allow an admin to generate reports from the admin
   * console and assign an attribute to a specific group of users. This setting must
   * be enabled for an enterprise before it can be used.
   */
  tracking_codes?: Array<TrackingCode>;
}

export namespace UserUpdateParams {
  /**
   * An alternate notification email address to which email notifications are sent.
   * When it's confirmed, this will be the email address to which notifications are
   * sent instead of to the primary email address.
   *
   * Set this value to `null` to remove the notification email.
   */
  export interface NotificationEmail {
    /**
     * The email address to send the notifications to.
     */
    email?: string;
  }
}

export interface UserListParams {
  /**
   * Limits the results to app users with the given `external_app_user_id` value.
   *
   * When creating an app user, an `external_app_user_id` value can be set. This
   * value can then be used in this endpoint to find any users that match that
   * `external_app_user_id` value.
   */
  external_app_user_id?: string;

  /**
   * A comma-separated list of attributes to include in the response. This can be
   * used to request fields that are not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Limits the results to only users who's `name` or `login` start with the search
   * term.
   *
   * For externally managed users, the search term needs to completely match the in
   * order to find the user, and it will only return one user at a time.
   */
  filter_term?: string;

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

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * Specifies whether to use marker-based pagination instead of offset-based
   * pagination. Only one pagination method can be used at a time.
   *
   * By setting this value to true, the API will return a `marker` field that can be
   * passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;

  /**
   * Limits the results to the kind of user specified.
   *
   * - `all` returns every kind of user for whom the `login` or `name` partially
   *   matches the `filter_term`. It will only return an external user if the login
   *   matches the `filter_term` completely, and in that case it will only return
   *   that user.
   * - `managed` returns all managed and app users for whom the `login` or `name`
   *   partially matches the `filter_term`.
   * - `external` returns all external users for whom the `login` matches the
   *   `filter_term` exactly.
   */
  user_type?: 'all' | 'managed' | 'external';
}

export interface UserDeleteParams {
  /**
   * Whether the user should be deleted even if this user still own files.
   */
  force?: boolean;

  /**
   * Whether the user will receive email notification of the deletion.
   */
  notify?: boolean;
}

export interface UserListMembershipsParams {
  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;
}

export interface UserRetrieveCurrentParams {
  /**
   * A comma-separated list of attributes to include in the response. This can be
   * used to request fields that are not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;
}

export interface UserTerminateSessionsParams {
  /**
   * A list of user IDs.
   */
  user_ids: Array<string>;

  /**
   * A list of user logins.
   */
  user_logins: Array<string>;
}

Users.Avatar = Avatar;
Users.Folders = Folders;
Users.EmailAliases = EmailAliases;

export declare namespace Users {
  export {
    type GroupMemberships as GroupMemberships,
    type SessionTerminationMessage as SessionTerminationMessage,
    type TrackingCode as TrackingCode,
    type User as User,
    type UserFull as UserFull,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserListMembershipsParams as UserListMembershipsParams,
    type UserRetrieveCurrentParams as UserRetrieveCurrentParams,
    type UserTerminateSessionsParams as UserTerminateSessionsParams,
  };

  export {
    Avatar as Avatar,
    type AvatarUpdateResponse as AvatarUpdateResponse,
    type AvatarUpdateParams as AvatarUpdateParams,
  };

  export { Folders as Folders, type FolderTransferParams as FolderTransferParams };

  export {
    EmailAliases as EmailAliases,
    type EmailAlias as EmailAlias,
    type EmailAliasListResponse as EmailAliasListResponse,
    type EmailAliasCreateParams as EmailAliasCreateParams,
    type EmailAliasDeleteParams as EmailAliasDeleteParams,
  };
}
