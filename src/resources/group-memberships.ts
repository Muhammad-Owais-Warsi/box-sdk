// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GroupMemberships extends APIResource {
  /**
   * Creates a group membership. Only users with admin-level permissions will be able
   * to use this API.
   *
   * @example
   * ```ts
   * const groupMembership =
   *   await client.groupMemberships.create({
   *     group: { id: '4545523' },
   *     user: { id: '1434325' },
   *   });
   * ```
   */
  create(params: GroupMembershipCreateParams, options?: RequestOptions): APIPromise<GroupMembership> {
    const { fields, ...body } = params;
    return this._client.post('/group_memberships', { query: { fields }, body, ...options });
  }

  /**
   * Retrieves a specific group membership. Only admins of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupMembership =
   *   await client.groupMemberships.retrieve('434534');
   * ```
   */
  retrieve(
    groupMembershipID: string,
    query: GroupMembershipRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupMembership> {
    return this._client.get(path`/group_memberships/${groupMembershipID}`, { query, ...options });
  }

  /**
   * Updates a user's group membership. Only admins of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * const groupMembership =
   *   await client.groupMemberships.update('434534');
   * ```
   */
  update(
    groupMembershipID: string,
    params: GroupMembershipUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupMembership> {
    const { fields, ...body } = params ?? {};
    return this._client.put(path`/group_memberships/${groupMembershipID}`, {
      query: { fields },
      body,
      ...options,
    });
  }

  /**
   * Deletes a specific group membership. Only admins of this group or users with
   * admin-level permissions will be able to use this API.
   *
   * @example
   * ```ts
   * await client.groupMemberships.delete('434534');
   * ```
   */
  delete(groupMembershipID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/group_memberships/${groupMembershipID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A base representation of a group.
 */
export interface GroupBase {
  /**
   * The unique identifier for this object.
   */
  id: string;

  /**
   * The value will always be `group`.
   */
  type: 'group';
}

/**
 * Membership is used to signify that a user is part of a group.
 */
export interface GroupMembership {
  /**
   * The unique identifier for this group membership.
   */
  id?: string;

  /**
   * The time this membership was created.
   */
  created_at?: string;

  /**
   * Mini representation of a group, including id and name of group.
   */
  group?: GroupMini;

  /**
   * The time this membership was last modified.
   */
  modified_at?: string;

  /**
   * The role of the user in the group.
   */
  role?: 'member' | 'admin';

  /**
   * The value will always be `group_membership`.
   */
  type?: 'group_membership';

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  user?: RetentionPoliciesAPI.UserMini;
}

/**
 * Mini representation of a group, including id and name of group.
 */
export interface GroupMini extends GroupBase {
  /**
   * The type of the group.
   */
  group_type?: 'managed_group' | 'all_users_group';

  /**
   * The name of the group.
   */
  name?: string;
}

export interface GroupMembershipCreateParams {
  /**
   * Body param: The group to add the user to.
   */
  group: GroupMembershipCreateParams.Group;

  /**
   * Body param: The user to add to the group.
   */
  user: GroupMembershipCreateParams.User;

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
   * Body param: Custom configuration for the permissions an admin if a group will
   * receive. This option has no effect on members with a role of `member`.
   *
   * Setting these permissions overwrites the default access levels of an admin.
   *
   * Specifying a value of `null` for this object will disable all configurable
   * permissions. Specifying permissions will set them accordingly, omitted
   * permissions will be enabled by default.
   */
  configurable_permissions?: { [key: string]: boolean } | null;

  /**
   * Body param: The role of the user in the group.
   */
  role?: 'member' | 'admin';
}

export namespace GroupMembershipCreateParams {
  /**
   * The group to add the user to.
   */
  export interface Group {
    /**
     * The ID of the group to add the user to.
     */
    id: string;
  }

  /**
   * The user to add to the group.
   */
  export interface User {
    /**
     * The ID of the user to add to the group.
     */
    id: string;
  }
}

export interface GroupMembershipRetrieveParams {
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

export interface GroupMembershipUpdateParams {
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
   * Body param: Custom configuration for the permissions an admin if a group will
   * receive. This option has no effect on members with a role of `member`.
   *
   * Setting these permissions overwrites the default access levels of an admin.
   *
   * Specifying a value of `null` for this object will disable all configurable
   * permissions. Specifying permissions will set them accordingly, omitted
   * permissions will be enabled by default.
   */
  configurable_permissions?: { [key: string]: boolean } | null;

  /**
   * Body param: The role of the user in the group.
   */
  role?: 'member' | 'admin';
}

export declare namespace GroupMemberships {
  export {
    type GroupBase as GroupBase,
    type GroupMembership as GroupMembership,
    type GroupMini as GroupMini,
    type GroupMembershipCreateParams as GroupMembershipCreateParams,
    type GroupMembershipRetrieveParams as GroupMembershipRetrieveParams,
    type GroupMembershipUpdateParams as GroupMembershipUpdateParams,
  };
}
