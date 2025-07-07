// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SlackAPI from './slack';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Teams extends APIResource {
  /**
   * Creates a
   * [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams)
   * by mapping a Teams channel to a Box item. You need Admin or Co-Admin role to use
   * this endpoint.
   *
   * @example
   * ```ts
   * const integrationMappingTeams =
   *   await client.integrationMappings.teams.create({
   *     box_item: { id: '42037322', type: 'folder' },
   *     partner_item: {
   *       id: '19%ABCD-Avgfggkggyftdtfgghjhkhkhh%40thread:tacv2',
   *       team_id: 'hjgjgjg-bhhj-564a-b643-hghgj685u',
   *       tenant_id: 'abcd-defg-1235-7890',
   *       type: 'channel',
   *     },
   *   });
   * ```
   */
  create(body: TeamCreateParams, options?: RequestOptions): APIPromise<IntegrationMappingTeams> {
    return this._client.post('/integration_mappings/teams', { body, ...options });
  }

  /**
   * Updates a
   * [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
   * Supports updating the Box folder ID and options. You need Admin or Co-Admin role
   * to use this endpoint.
   *
   * @example
   * ```ts
   * const integrationMappingTeams =
   *   await client.integrationMappings.teams.update('11235432');
   * ```
   */
  update(
    integrationMappingID: string,
    body: TeamUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationMappingTeams> {
    return this._client.put(path`/integration_mappings/teams/${integrationMappingID}`, { body, ...options });
  }

  /**
   * Lists
   * [Teams integration mappings](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams)
   * in a users' enterprise. You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * const teams = await client.integrationMappings.teams.list();
   * ```
   */
  list(
    query: TeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamListResponse> {
    return this._client.get('/integration_mappings/teams', { query, ...options });
  }

  /**
   * Deletes a
   * [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
   * You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * await client.integrationMappings.teams.delete('11235432');
   * ```
   */
  delete(integrationMappingID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/integration_mappings/teams/${integrationMappingID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Folder reference.
 */
export interface FolderReference {
  /**
   * ID of the folder.
   */
  id: string;

  /**
   * The value will always be `folder`.
   */
  type: 'folder';
}

/**
 * A Microsoft Teams specific representation of an integration mapping object.
 */
export interface IntegrationMappingTeams extends SlackAPI.IntegrationMappingBase {
  /**
   * Folder reference.
   */
  box_item?: FolderReference;

  /**
   * When the integration mapping object was created.
   */
  created_at?: string;

  /**
   * Identifies the Box partner app, with which the mapping is associated. Supports
   * Slack and Teams. (part of the composite key together with `id`).
   */
  integration_type?: 'teams';

  /**
   * Identifies whether the mapping has been manually set by the team owner from UI
   * for channels (as opposed to being automatically created).
   */
  is_overridden_by_manual_mapping?: boolean;

  /**
   * When the integration mapping object was last modified.
   */
  modified_at?: string;

  /**
   * The schema for an integration mapping mapped item object for type Teams.
   */
  partner_item?: IntegrationMappingTeams.PartnerItem;
}

export namespace IntegrationMappingTeams {
  /**
   * The schema for an integration mapping mapped item object for type Teams.
   */
  export interface PartnerItem {
    /**
     * ID of the mapped item (of type referenced in `type`).
     */
    id: string;

    /**
     * ID of the tenant that is registered with Microsoft Teams.
     */
    tenant_id: string;

    /**
     * Type of the mapped item referenced in `id`.
     */
    type: 'channel' | 'team';
  }
}

/**
 * A list of integration mapping objects.
 */
export interface TeamListResponse {
  /**
   * A list of integration mappings.
   */
  entries?: Array<IntegrationMappingTeams>;
}

export interface TeamCreateParams {
  /**
   * Folder reference.
   */
  box_item: FolderReference;

  /**
   * The schema for an integration mapping mapped item object for type Teams.
   */
  partner_item: TeamCreateParams.PartnerItem;
}

export namespace TeamCreateParams {
  /**
   * The schema for an integration mapping mapped item object for type Teams.
   */
  export interface PartnerItem {
    /**
     * ID of the mapped item (of type referenced in `type`).
     */
    id: string;

    /**
     * ID of the team that is registered with Microsoft Teams.
     */
    team_id: string;

    /**
     * ID of the tenant that is registered with Microsoft Teams.
     */
    tenant_id: string;

    /**
     * Type of the mapped item referenced in `id`.
     */
    type: 'channel' | 'team';
  }
}

export interface TeamUpdateParams {
  /**
   * Folder reference.
   */
  box_item?: FolderReference;
}

export interface TeamListParams {
  /**
   * Box item ID, for which the mappings should be returned.
   */
  box_item_id?: string;

  /**
   * Box item type, for which the mappings should be returned.
   */
  box_item_type?: 'folder';

  /**
   * ID of the mapped item, for which the mapping should be returned.
   */
  partner_item_id?: string;

  /**
   * Mapped item type, for which the mapping should be returned.
   */
  partner_item_type?: 'channel' | 'team';
}

export declare namespace Teams {
  export {
    type FolderReference as FolderReference,
    type IntegrationMappingTeams as IntegrationMappingTeams,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
  };
}
