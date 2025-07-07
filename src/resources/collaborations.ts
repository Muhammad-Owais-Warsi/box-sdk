// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CollaborationsAPI from './collaborations';
import * as GroupMembershipsAPI from './group-memberships';
import * as RetentionPoliciesAPI from './retention-policies';
import * as SharedItemsAppItemsAPI from './shared-items-app-items';
import * as TermsOfServicesAPI from './terms-of-services';
import * as FilesAPI from './files/files';
import * as FoldersAPI from './folders/folders';
import * as WebLinksAPI from './web-links/web-links';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Collaborations extends APIResource {
  /**
   * Adds a collaboration for a single user or a single group to a file or folder.
   *
   * Collaborations can be created using email address, user IDs, or a group IDs.
   *
   * If a collaboration is being created with a group, access to this endpoint is
   * dependent on the group's ability to be invited.
   *
   * If collaboration is in `pending` status, the following fields are redacted:
   *
   * - `login` and `name` are hidden if a collaboration was created using `user_id`,
   * - `name` is hidden if a collaboration was created using `login`.
   *
   * @example
   * ```ts
   * const collaboration = await client.collaborations.create({
   *   accessible_by: { type: 'user' },
   *   item: {},
   *   role: 'editor',
   * });
   * ```
   */
  create(params: CollaborationCreateParams, options?: RequestOptions): APIPromise<Collaboration> {
    const { fields, notify, ...body } = params;
    return this._client.post('/collaborations', { query: { fields, notify }, body, ...options });
  }

  /**
   * Retrieves a single collaboration.
   *
   * @example
   * ```ts
   * const collaboration = await client.collaborations.retrieve(
   *   '1234',
   * );
   * ```
   */
  retrieve(
    collaborationID: string,
    query: CollaborationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Collaboration> {
    return this._client.get(path`/collaborations/${collaborationID}`, { query, ...options });
  }

  /**
   * Updates a collaboration. Can be used to change the owner of an item, or to
   * accept collaboration invites.
   *
   * @example
   * ```ts
   * const collaboration = await client.collaborations.update(
   *   '1234',
   *   { role: 'editor' },
   * );
   * ```
   */
  update(
    collaborationID: string,
    body: CollaborationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Collaboration> {
    return this._client.put(path`/collaborations/${collaborationID}`, { body, ...options });
  }

  /**
   * Retrieves all pending collaboration invites for this user.
   *
   * @example
   * ```ts
   * const collaborationsOffsetPaginated =
   *   await client.collaborations.list({ status: 'pending' });
   * ```
   */
  list(query: CollaborationListParams, options?: RequestOptions): APIPromise<CollaborationsOffsetPaginated> {
    return this._client.get('/collaborations', { query, ...options });
  }

  /**
   * Deletes a single collaboration.
   *
   * @example
   * ```ts
   * await client.collaborations.delete('1234');
   * ```
   */
  delete(collaborationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/collaborations/${collaborationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Collaborations define access permissions for users and groups to files and
 * folders, similar to access control lists. A collaboration object grants a user
 * or group access to a file or folder with permissions defined by a specific role.
 */
export interface Collaboration {
  /**
   * The unique identifier for this collaboration.
   */
  id: string;

  /**
   * The value will always be `collaboration`.
   */
  type: 'collaboration';

  acceptance_requirements_status?: Collaboration.AcceptanceRequirementsStatus;

  /**
   * The user or group that is granted access.
   */
  accessible_by?: UserCollaborations | GroupMembershipsAPI.GroupMini;

  /**
   * When the `status` of the collaboration object changed to `accepted` or
   * `rejected`.
   */
  acknowledged_at?: string;

  /**
   * An app item represents an content object owned by an application. It can group
   * files and folders together from different paths. That set can be shared via a
   * collaboration.
   */
  app_item?: SharedItemsAppItemsAPI.AppItem | null;

  /**
   * When the collaboration object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, can be returned only when the status is
   * `pending`.
   */
  created_by?: Collaboration.CreatedBy;

  /**
   * When the collaboration will expire, or `null` if no expiration date is set.
   */
  expires_at?: string | null;

  /**
   * The email address used to invite an unregistered collaborator, if they are not a
   * registered user.
   */
  invite_email?: string | null;

  /**
   * If set to `true`, collaborators have access to shared items, but such items
   * won't be visible in the All Files list. Additionally, collaborators won't see
   * the the path to the root folder for the shared item.
   */
  is_access_only?: boolean;

  /**
   * The file or folder to which access is granted. The field is `null` when the
   * collaboration `status` is `pending` or the collaboration is created on an app
   * item (see `app_item` field).
   */
  item?: FilesAPI.File | FoldersAPI.Folder | WebLinksAPI.WebLink | null;

  /**
   * When the collaboration object was last modified.
   */
  modified_at?: string;

  /**
   * The level of access granted.
   */
  role?:
    | 'editor'
    | 'viewer'
    | 'previewer'
    | 'uploader'
    | 'previewer uploader'
    | 'viewer uploader'
    | 'co-owner'
    | 'owner';

  /**
   * The status of the collaboration invitation. If the status is `pending`, `login`
   * and `name` return an empty string.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace Collaboration {
  export interface AcceptanceRequirementsStatus {
    strong_password_requirement?: AcceptanceRequirementsStatus.StrongPasswordRequirement;

    terms_of_service_requirement?: AcceptanceRequirementsStatus.TermsOfServiceRequirement;

    two_factor_authentication_requirement?: AcceptanceRequirementsStatus.TwoFactorAuthenticationRequirement;
  }

  export namespace AcceptanceRequirementsStatus {
    export interface StrongPasswordRequirement {
      /**
       * Whether or not the enterprise that owns the content requires a strong password
       * to collaborate on the content, or enforces an exposed password detection for the
       * external collaborators.
       */
      enterprise_has_strong_password_required_for_external_users?: boolean;

      /**
       * Whether or not the user has a strong and not exposed password set for their
       * account. The field is `null` when a strong password is not required.
       */
      user_has_strong_password?: boolean | null;
    }

    export interface TermsOfServiceRequirement {
      /**
       * Whether or not the terms of service have been accepted. The field is `null` when
       * there is no terms of service required.
       */
      is_accepted?: boolean | null;

      /**
       * The root-level record that is supposed to represent a single Terms of Service.
       */
      terms_of_service?: TermsOfServicesAPI.TermsOfServiceBase;
    }

    export interface TwoFactorAuthenticationRequirement {
      /**
       * Whether or not the enterprise that owns the content requires two-factor
       * authentication to be enabled in order to collaborate on the content.
       */
      enterprise_has_two_factor_auth_enabled?: boolean;

      /**
       * Whether or not the user has two-factor authentication enabled. The field is
       * `null` when two-factor authentication is not required.
       */
      user_has_two_factor_authentication_enabled?: boolean | null;
    }
  }

  /**
   * A mini representation of a user, can be returned only when the status is
   * `pending`.
   */
  export interface CreatedBy extends CollaborationsAPI.UserCollaborations {}
}

export interface CollaborationsOffsetPaginated {
  /**
   * A list of collaborations.
   */
  entries?: Array<Collaboration>;

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
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

/**
 * A mini representation of a user, can be returned only when the status is
 * `pending`.
 */
export interface UserCollaborations extends RetentionPoliciesAPI.UserBase {
  /**
   * If set to `false`, the user is either deactivated or deleted.
   */
  is_active?: boolean;

  /**
   * The primary email address of this user. If the collaboration status is
   * `pending`, an empty string is returned.
   */
  login?: string;

  /**
   * The display name of this user. If the collaboration status is `pending`, an
   * empty string is returned.
   */
  name?: string;
}

export interface CollaborationCreateParams {
  /**
   * Body param: The user or group to give access to the item.
   */
  accessible_by: CollaborationCreateParams.AccessibleBy;

  /**
   * Body param: The item to attach the comment to.
   */
  item: CollaborationCreateParams.Item;

  /**
   * Body param: The level of access granted.
   */
  role:
    | 'editor'
    | 'viewer'
    | 'previewer'
    | 'uploader'
    | 'previewer uploader'
    | 'viewer uploader'
    | 'co-owner';

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
   * Query param: Determines if users should receive email notification for the
   * action performed.
   */
  notify?: boolean;

  /**
   * Body param: Determines if the invited users can see the entire parent path to
   * the associated folder. The user will not gain privileges in any parent folder
   * and therefore can not see content the user is not collaborated on.
   *
   * Be aware that this meaningfully increases the time required to load the
   * invitee's **All Files** page. We recommend you limit the number of
   * collaborations with `can_view_path` enabled to 1,000 per user.
   *
   * Only owner or co-owners can invite collaborators with a `can_view_path` of
   * `true`.
   *
   * `can_view_path` can only be used for folder collaborations.
   */
  can_view_path?: boolean;

  /**
   * Body param: Set the expiration date for the collaboration. At this date, the
   * collaboration will be automatically removed from the item.
   *
   * This feature will only work if the **Automatically remove invited collaborators:
   * Allow folder owners to extend the expiry date** setting has been enabled in the
   * **Enterprise Settings** of the **Admin Console**. When the setting is not
   * enabled, collaborations can not have an expiry date and a value for this field
   * will be result in an error.
   */
  expires_at?: string;

  /**
   * Body param: If set to `true`, collaborators have access to shared items, but
   * such items won't be visible in the All Files list. Additionally, collaborators
   * won't see the the path to the root folder for the shared item.
   */
  is_access_only?: boolean;
}

export namespace CollaborationCreateParams {
  /**
   * The user or group to give access to the item.
   */
  export interface AccessibleBy {
    /**
     * The type of collaborator to invite.
     */
    type: 'user' | 'group';

    /**
     * The ID of the user or group.
     *
     * Alternatively, use `login` to specify a user by email address.
     */
    id?: string;

    /**
     * The email address of the user to grant access to the item.
     *
     * Alternatively, use `id` to specify a user by user ID.
     */
    login?: string;
  }

  /**
   * The item to attach the comment to.
   */
  export interface Item {
    /**
     * The ID of the item that will be granted access to.
     */
    id?: string;

    /**
     * The type of the item that this collaboration will be granted access to.
     */
    type?: 'file' | 'folder';
  }
}

export interface CollaborationRetrieveParams {
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

export interface CollaborationUpdateParams {
  /**
   * The level of access granted.
   */
  role:
    | 'editor'
    | 'viewer'
    | 'previewer'
    | 'uploader'
    | 'previewer uploader'
    | 'viewer uploader'
    | 'co-owner'
    | 'owner';

  /**
   * Determines if the invited users can see the entire parent path to the associated
   * folder. The user will not gain privileges in any parent folder and therefore can
   * not see content the user is not collaborated on.
   *
   * Be aware that this meaningfully increases the time required to load the
   * invitee's **All Files** page. We recommend you limit the number of
   * collaborations with `can_view_path` enabled to 1,000 per user.
   *
   * Only owner or co-owners can invite collaborators with a `can_view_path` of
   * `true`.
   *
   * `can_view_path` can only be used for folder collaborations.
   */
  can_view_path?: boolean;

  /**
   * Update the expiration date for the collaboration. At this date, the
   * collaboration will be automatically removed from the item.
   *
   * This feature will only work if the **Automatically remove invited collaborators:
   * Allow folder owners to extend the expiry date** setting has been enabled in the
   * **Enterprise Settings** of the **Admin Console**. When the setting is not
   * enabled, collaborations can not have an expiry date and a value for this field
   * will be result in an error.
   *
   * Additionally, a collaboration can only be given an expiration if it was created
   * after the **Automatically remove invited collaborator** setting was enabled.
   */
  expires_at?: string;

  /**
   * Set the status of a `pending` collaboration invitation, effectively accepting,
   * or rejecting the invite.
   */
  status?: 'pending' | 'accepted' | 'rejected';
}

export interface CollaborationListParams {
  /**
   * The status of the collaborations to retrieve.
   */
  status: 'pending';

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

export declare namespace Collaborations {
  export {
    type Collaboration as Collaboration,
    type CollaborationsOffsetPaginated as CollaborationsOffsetPaginated,
    type UserCollaborations as UserCollaborations,
    type CollaborationCreateParams as CollaborationCreateParams,
    type CollaborationRetrieveParams as CollaborationRetrieveParams,
    type CollaborationUpdateParams as CollaborationUpdateParams,
    type CollaborationListParams as CollaborationListParams,
  };
}
