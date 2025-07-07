// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CollaborationsAPI from './collaborations';
import * as GroupMembershipsAPI from './group-memberships';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Creates a new group of users in an enterprise. Only users with admin permissions
   * can create new groups.
   *
   * @example
   * ```ts
   * const groupFull = await client.groups.create({
   *   name: 'Customer Support',
   * });
   * ```
   */
  create(params: GroupCreateParams, options?: RequestOptions): APIPromise<GroupFull> {
    const { fields, ...body } = params;
    return this._client.post('/groups', { query: { fields }, body, ...options });
  }

  /**
   * Retrieves information about a group. Only members of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupFull = await client.groups.retrieve('57645');
   * ```
   */
  retrieve(
    groupID: string,
    query: GroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupFull> {
    return this._client.get(path`/groups/${groupID}`, { query, ...options });
  }

  /**
   * Updates a specific group. Only admins of this group or users with admin-level
   * permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupFull = await client.groups.update('57645');
   * ```
   */
  update(
    groupID: string,
    params: GroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupFull> {
    const { fields, ...body } = params ?? {};
    return this._client.put(path`/groups/${groupID}`, { query: { fields }, body, ...options });
  }

  /**
   * Retrieves all of the groups for a given enterprise. The user must have admin
   * permissions to inspect enterprise's groups.
   *
   * @example
   * ```ts
   * const groups = await client.groups.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/groups', { query, ...options });
  }

  /**
   * Permanently deletes a group. Only users with admin-level permissions will be
   * able to use this API.
   *
   * @example
   * ```ts
   * await client.groups.delete('57645');
   * ```
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all the collaborations for a group. The user must have admin
   * permissions to inspect enterprise's groups.
   *
   * Each collaboration object has details on which files or folders the group has
   * access to and with what role.
   *
   * @example
   * ```ts
   * const collaborationsOffsetPaginated =
   *   await client.groups.listCollaborations('57645');
   * ```
   */
  listCollaborations(
    groupID: string,
    query: GroupListCollaborationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollaborationsAPI.CollaborationsOffsetPaginated> {
    return this._client.get(path`/groups/${groupID}/collaborations`, { query, ...options });
  }

  /**
   * Retrieves all the members for a group. Only members of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupMemberships =
   *   await client.groups.listMemberships('57645');
   * ```
   */
  listMemberships(
    groupID: string,
    query: GroupListMembershipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersAPI.GroupMemberships> {
    return this._client.get(path`/groups/${groupID}/memberships`, { query, ...options });
  }

  /**
   * Validates the roles and permissions of the group, and creates asynchronous jobs
   * to terminate the group's sessions. Returns the status for the POST request.
   *
   * @example
   * ```ts
   * const sessionTerminationMessage =
   *   await client.groups.terminateSessions({
   *     group_ids: ['123456', '456789'],
   *   });
   * ```
   */
  terminateSessions(
    body: GroupTerminateSessionsParams,
    options?: RequestOptions,
  ): APIPromise<UsersAPI.SessionTerminationMessage> {
    return this._client.post('/groups/terminate_sessions', { body, ...options });
  }
}

/**
 * Groups contain a set of users, and can be used in place of users in some
 * operations, such as collaborations.
 */
export interface GroupFull extends GroupMembershipsAPI.GroupMini {
  /**
   * When the group object was created.
   */
  created_at?: string;

  /**
   * Human readable description of the group.
   */
  description?: string;

  /**
   * An arbitrary identifier that can be used by external group sync tools to link
   * this Box Group to an external group. Example values of this field could be an
   * Active Directory Object ID or a Google Group ID. We recommend you use of this
   * field in order to avoid issues when group names are updated in either Box or
   * external systems.
   */
  external_sync_identifier?: string;

  /**
   * Specifies who can invite the group to collaborate on items.
   *
   * When set to `admins_only` the enterprise admin, co-admins, and the group's admin
   * can invite the group.
   *
   * When set to `admins_and_members` all the admins listed above and group members
   * can invite the group.
   *
   * When set to `all_managed_users` all managed users in the enterprise can invite
   * the group.
   */
  invitability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * Specifies who can view the members of the group (Get Memberships for Group).
   *
   * - `admins_only` - the enterprise admin, co-admins, group's group admin.
   * - `admins_and_members` - all admins and group members.
   * - `all_managed_users` - all managed users in the enterprise.
   */
  member_viewability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * When the group object was last modified.
   */
  modified_at?: string;

  /**
   * The permissions that the authenticated user has for a group.
   */
  permissions?: GroupFull.Permissions;

  /**
   * Keeps track of which external source this group is coming from (e.g. "Active
   * Directory", "Google Groups", "Facebook Groups"). Setting this will also prevent
   * Box users from editing the group name and its members directly via the Box web
   * application. This is desirable for one-way syncing of groups.
   */
  provenance?: string;
}

export namespace GroupFull {
  /**
   * The permissions that the authenticated user has for a group.
   */
  export interface Permissions {
    /**
     * Specifies if the user can invite the group to collaborate on any items.
     */
    can_invite_as_collaborator?: boolean;
  }
}

export interface GroupListResponse {
  /**
   * A list of groups.
   */
  entries?: Array<GroupFull>;

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
  order?: Array<GroupListResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace GroupListResponse {
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

export interface GroupCreateParams {
  /**
   * Body param: The name of the new group to be created. This name must be unique
   * within the enterprise.
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
   * Body param: A human readable description of the group.
   */
  description?: string;

  /**
   * Body param: An arbitrary identifier that can be used by external group sync
   * tools to link this Box Group to an external group.
   *
   * Example values of this field could be an **Active Directory Object ID** or a
   * **Google Group ID**.
   *
   * We recommend you use of this field in order to avoid issues when group names are
   * updated in either Box or external systems.
   */
  external_sync_identifier?: string;

  /**
   * Body param: Specifies who can invite the group to collaborate on folders.
   *
   * When set to `admins_only` the enterprise admin, co-admins, and the group's admin
   * can invite the group.
   *
   * When set to `admins_and_members` all the admins listed above and group members
   * can invite the group.
   *
   * When set to `all_managed_users` all managed users in the enterprise can invite
   * the group.
   */
  invitability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * Body param: Specifies who can see the members of the group.
   *
   * - `admins_only` - the enterprise admin, co-admins, group's group admin.
   * - `admins_and_members` - all admins and group members.
   * - `all_managed_users` - all managed users in the enterprise.
   */
  member_viewability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * Body param: Keeps track of which external source this group is coming, for
   * example `Active Directory`, or `Okta`.
   *
   * Setting this will also prevent Box admins from editing the group name and its
   * members directly via the Box web application.
   *
   * This is desirable for one-way syncing of groups.
   */
  provenance?: string;
}

export interface GroupRetrieveParams {
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

export interface GroupUpdateParams {
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
   * Body param: A human readable description of the group.
   */
  description?: string;

  /**
   * Body param: An arbitrary identifier that can be used by external group sync
   * tools to link this Box Group to an external group.
   *
   * Example values of this field could be an **Active Directory Object ID** or a
   * **Google Group ID**.
   *
   * We recommend you use of this field in order to avoid issues when group names are
   * updated in either Box or external systems.
   */
  external_sync_identifier?: string;

  /**
   * Body param: Specifies who can invite the group to collaborate on folders.
   *
   * When set to `admins_only` the enterprise admin, co-admins, and the group's admin
   * can invite the group.
   *
   * When set to `admins_and_members` all the admins listed above and group members
   * can invite the group.
   *
   * When set to `all_managed_users` all managed users in the enterprise can invite
   * the group.
   */
  invitability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * Body param: Specifies who can see the members of the group.
   *
   * - `admins_only` - the enterprise admin, co-admins, group's group admin.
   * - `admins_and_members` - all admins and group members.
   * - `all_managed_users` - all managed users in the enterprise.
   */
  member_viewability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users';

  /**
   * Body param: The name of the new group to be created. Must be unique within the
   * enterprise.
   */
  name?: string;

  /**
   * Body param: Keeps track of which external source this group is coming, for
   * example `Active Directory`, or `Okta`.
   *
   * Setting this will also prevent Box admins from editing the group name and its
   * members directly via the Box web application.
   *
   * This is desirable for one-way syncing of groups.
   */
  provenance?: string;
}

export interface GroupListParams {
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
   * Limits the results to only groups whose `name` starts with the search term.
   */
  filter_term?: string;

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

export interface GroupListCollaborationsParams {
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

export interface GroupListMembershipsParams {
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

export interface GroupTerminateSessionsParams {
  /**
   * A list of group IDs.
   */
  group_ids: Array<string>;
}

export declare namespace Groups {
  export {
    type GroupFull as GroupFull,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupListCollaborationsParams as GroupListCollaborationsParams,
    type GroupListMembershipsParams as GroupListMembershipsParams,
    type GroupTerminateSessionsParams as GroupTerminateSessionsParams,
  };
}
