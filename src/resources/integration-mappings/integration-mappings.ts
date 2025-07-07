// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SlackAPI from './slack';
import {
  IntegrationMappingBase,
  IntegrationMappingBoxItem,
  IntegrationMappingOptions,
  IntegrationMappingPartnerItem,
  IntegrationMappingSlack,
  Slack,
  SlackCreateParams,
  SlackListParams,
  SlackListResponse,
  SlackUpdateParams,
  UserIntegrationMappings,
} from './slack';
import * as TeamsAPI from './teams';
import {
  FolderReference,
  IntegrationMappingTeams,
  TeamCreateParams,
  TeamListParams,
  TeamListResponse,
  TeamUpdateParams,
  Teams,
} from './teams';

export class IntegrationMappings extends APIResource {
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
}

IntegrationMappings.Slack = Slack;
IntegrationMappings.Teams = Teams;

export declare namespace IntegrationMappings {
  export {
    Slack as Slack,
    type IntegrationMappingBase as IntegrationMappingBase,
    type IntegrationMappingBoxItem as IntegrationMappingBoxItem,
    type IntegrationMappingOptions as IntegrationMappingOptions,
    type IntegrationMappingPartnerItem as IntegrationMappingPartnerItem,
    type IntegrationMappingSlack as IntegrationMappingSlack,
    type UserIntegrationMappings as UserIntegrationMappings,
    type SlackListResponse as SlackListResponse,
    type SlackCreateParams as SlackCreateParams,
    type SlackUpdateParams as SlackUpdateParams,
    type SlackListParams as SlackListParams,
  };

  export {
    Teams as Teams,
    type FolderReference as FolderReference,
    type IntegrationMappingTeams as IntegrationMappingTeams,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
  };
}
