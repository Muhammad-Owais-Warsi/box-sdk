// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invites extends APIResource {
  /**
   * Invites an existing external user to join an enterprise.
   *
   * The existing user can not be part of another enterprise and must already have a
   * Box account. Once invited, the user will receive an email and are prompted to
   * accept the invitation within the Box web application.
   *
   * This method requires the "Manage An Enterprise" scope enabled for the
   * application, which can be enabled within the developer console.
   *
   * @example
   * ```ts
   * const invite = await client.invites.create({
   *   actionable_by: {},
   *   enterprise: { id: '1232234' },
   * });
   * ```
   */
  create(params: InviteCreateParams, options?: RequestOptions): APIPromise<Invite> {
    const { fields, ...body } = params;
    return this._client.post('/invites', { query: { fields }, body, ...options });
  }

  /**
   * Returns the status of a user invite.
   *
   * @example
   * ```ts
   * const invite = await client.invites.retrieve('213723');
   * ```
   */
  retrieve(
    inviteID: string,
    query: InviteRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Invite> {
    return this._client.get(path`/invites/${inviteID}`, { query, ...options });
  }
}

/**
 * An invite for a user to an enterprise.
 */
export interface Invite {
  /**
   * The unique identifier for this invite.
   */
  id: string;

  /**
   * The value will always be `invite`.
   */
  type: 'invite';

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  actionable_by?: RetentionPoliciesAPI.UserMini;

  /**
   * When the invite was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  invited_by?: RetentionPoliciesAPI.UserMini;

  /**
   * A representation of a Box enterprise.
   */
  invited_to?: Invite.InvitedTo;

  /**
   * When the invite was modified.
   */
  modified_at?: string;

  /**
   * The status of the invite.
   */
  status?: string;
}

export namespace Invite {
  /**
   * A representation of a Box enterprise.
   */
  export interface InvitedTo {
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

export interface InviteCreateParams {
  /**
   * Body param: The user to invite.
   */
  actionable_by: InviteCreateParams.ActionableBy;

  /**
   * Body param: The enterprise to invite the user to.
   */
  enterprise: InviteCreateParams.Enterprise;

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
}

export namespace InviteCreateParams {
  /**
   * The user to invite.
   */
  export interface ActionableBy {
    /**
     * The login of the invited user.
     */
    login?: string;
  }

  /**
   * The enterprise to invite the user to.
   */
  export interface Enterprise {
    /**
     * The ID of the enterprise.
     */
    id: string;
  }
}

export interface InviteRetrieveParams {
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

export declare namespace Invites {
  export {
    type Invite as Invite,
    type InviteCreateParams as InviteCreateParams,
    type InviteRetrieveParams as InviteRetrieveParams,
  };
}
