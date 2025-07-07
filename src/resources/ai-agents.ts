// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AIAgentsAPI from './ai-agents';
import * as AIAgentDefaultAPI from './ai-agent-default';
import * as GroupMembershipsAPI from './group-memberships';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AIAgents extends APIResource {
  /**
   * Creates an AI agent. At least one of the following capabilities must be
   * provided: `ask`, `text_gen`, `extract`.
   *
   * @example
   * ```ts
   * const aiSingleAgent = await client.aiAgents.create({
   *   access_state: 'enabled',
   *   name: 'My AI Agent',
   *   type: 'ai_agent',
   * });
   * ```
   */
  create(body: AIAgentCreateParams, options?: RequestOptions): APIPromise<AISingleAgent> {
    return this._client.post('/ai_agents', { body, ...options });
  }

  /**
   * Gets an AI Agent using the `agent_id` parameter.
   *
   * @example
   * ```ts
   * const aiSingleAgent = await client.aiAgents.retrieve(
   *   '1234',
   * );
   * ```
   */
  retrieve(
    agentID: string,
    query: AIAgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AISingleAgent> {
    return this._client.get(path`/ai_agents/${agentID}`, { query, ...options });
  }

  /**
   * Updates an AI agent.
   *
   * @example
   * ```ts
   * const aiSingleAgent = await client.aiAgents.update('1234', {
   *   access_state: 'enabled',
   *   name: 'My AI Agent',
   *   type: 'ai_agent',
   * });
   * ```
   */
  update(agentID: string, body: AIAgentUpdateParams, options?: RequestOptions): APIPromise<AISingleAgent> {
    return this._client.put(path`/ai_agents/${agentID}`, { body, ...options });
  }

  /**
   * Lists AI agents based on the provided parameters.
   *
   * @example
   * ```ts
   * const aiAgents = await client.aiAgents.list();
   * ```
   */
  list(
    query: AIAgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIAgentListResponse> {
    return this._client.get('/ai_agents', { query, ...options });
  }

  /**
   * Deletes an AI agent using the provided parameters.
   *
   * @example
   * ```ts
   * await client.aiAgents.delete('1234');
   * ```
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai_agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The entity with type and ID.
 */
export type AIAgentAllowedEntity = RetentionPoliciesAPI.UserBase | GroupMembershipsAPI.GroupBase;

export interface AISingleAgent {
  /**
   * The unique identifier of the AI Agent.
   */
  id: string;

  /**
   * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and
   * `enabled_for_selected_users`.
   */
  access_state: string;

  /**
   * The name of the AI Agent.
   */
  name: string;

  /**
   * The provider of the AI Agent.
   */
  origin: string;

  /**
   * List of allowed users or groups.
   */
  allowed_entities?: Array<AIAgentAllowedEntity>;

  /**
   * The AI agent to be used to ask questions.
   */
  ask?: AISingleAgent.Ask;

  /**
   * The ISO date-time formatted timestamp of when this AI agent was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  created_by?: RetentionPoliciesAPI.UserBase;

  /**
   * The AI agent to be used for metadata extraction.
   */
  extract?: AISingleAgent.Extract;

  /**
   * The icon reference of the AI Agent.
   */
  icon_reference?: string;

  /**
   * The ISO date-time formatted timestamp of when this AI agent was recently
   * modified.
   */
  modified_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  modified_by?: RetentionPoliciesAPI.UserBase;

  /**
   * The AI agent to be used to generate text.
   */
  text_gen?: AISingleAgent.TextGen;

  /**
   * The type of agent used to handle queries.
   */
  type?: 'ai_agent';
}

export namespace AISingleAgent {
  /**
   * The AI agent to be used to ask questions.
   */
  export interface Ask {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used to ask questions.
     */
    type: 'ai_agent_ask';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image_multi?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text_multi?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextToolResponse;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text_multi?: AIAgentsAPI.AIStudioAgentLongTextToolResponse;

    /**
     * The AI agent tool used to handle spreadsheets and tabular data.
     */
    spreadsheet?: Ask.Spreadsheet;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }

  export namespace Ask {
    /**
     * The AI agent tool used to handle spreadsheets and tabular data.
     */
    export interface Spreadsheet extends AIAgentsAPI.AIStudioAgentSpreadsheetTool {
      /**
       * Warnings concerning tool.
       */
      warnings?: Array<string>;
    }
  }

  /**
   * The AI agent to be used for metadata extraction.
   */
  export interface Extract {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent to be used for metadata extraction.
     */
    type: 'ai_agent_extract';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextToolResponse;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextToolResponse;
  }

  /**
   * The AI agent to be used to generate text.
   */
  export interface TextGen {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used for generating text.
     */
    type: 'ai_agent_text_gen';

    /**
     * AI agent basic tool used to generate text.
     */
    basic_gen?: TextGen.BasicGen;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }

  export namespace TextGen {
    /**
     * AI agent basic tool used to generate text.
     */
    export interface BasicGen extends AIAgentsAPI.AIStudioAgentBasicGenTool {
      /**
       * Warnings concerning tool.
       */
      warnings?: Array<string>;
    }
  }
}

/**
 * AI agent basic tool used to generate text.
 */
export interface AIStudioAgentBasicGenTool extends AIAgentDefaultAPI.AIAgentBasicGenTool {
  /**
   * True if system message contains custom instructions placeholder, false
   * otherwise.
   */
  is_custom_instructions_included?: boolean;
}

/**
 * AI agent processor used to handle basic text.
 */
export interface AIStudioAgentBasicTextTool extends AIAgentDefaultAPI.AIAgentBasicTextTool {
  /**
   * True if system message contains custom instructions placeholder, false
   * otherwise.
   */
  is_custom_instructions_included?: boolean;
}

/**
 * AI agent processor used to handle basic text.
 */
export interface AIStudioAgentBasicTextToolResponse extends AIStudioAgentBasicTextTool {
  /**
   * Warnings concerning tool.
   */
  warnings?: Array<string>;
}

/**
 * AI agent processor used to to handle longer text.
 */
export interface AIStudioAgentLongTextTool extends AIAgentDefaultAPI.AIAgentLongTextTool {
  /**
   * True if system message contains custom instructions placeholder, false
   * otherwise.
   */
  is_custom_instructions_included?: boolean;
}

/**
 * AI agent processor used to to handle longer text.
 */
export interface AIStudioAgentLongTextToolResponse extends AIStudioAgentLongTextTool {
  /**
   * Warnings concerning tool.
   */
  warnings?: Array<string>;
}

/**
 * The AI agent tool used to handle spreadsheets and tabular data.
 */
export interface AIStudioAgentSpreadsheetTool extends AIAgentDefaultAPI.AIAgentSpreadsheetTool {}

/**
 * The schema for AI agent create request.
 */
export interface CreateAIAgent {
  /**
   * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and
   * `enabled_for_selected_users`.
   */
  access_state: string;

  /**
   * The name of the AI Agent.
   */
  name: string;

  /**
   * The type of agent used to handle queries.
   */
  type: 'ai_agent';

  /**
   * List of allowed users or groups.
   */
  allowed_entities?: Array<AIAgentAllowedEntity>;

  /**
   * The AI agent to be used to handle queries.
   */
  ask?: CreateAIAgent.Ask;

  /**
   * The AI agent to be used for metadata extraction.
   */
  extract?: CreateAIAgent.Extract;

  /**
   * The icon reference of the AI Agent. It should have format of the URL
   * `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>` where
   * possible values of `file_name` are:
   * `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`.
   */
  icon_reference?: string;

  /**
   * The AI agent to be used to generate text.
   */
  text_gen?: CreateAIAgent.TextGen;
}

export namespace CreateAIAgent {
  /**
   * The AI agent to be used to handle queries.
   */
  export interface Ask {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used to handle queries.
     */
    type: 'ai_agent_ask';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text_multi?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * The AI agent tool used to handle spreadsheets and tabular data.
     */
    spreadsheet?: AIAgentsAPI.AIStudioAgentSpreadsheetTool;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }

  /**
   * The AI agent to be used for metadata extraction.
   */
  export interface Extract {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent to be used for metadata extraction.
     */
    type: 'ai_agent_extract';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;
  }

  /**
   * The AI agent to be used to generate text.
   */
  export interface TextGen {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used for generating text.
     */
    type: 'ai_agent_text_gen';

    /**
     * AI agent basic tool used to generate text.
     */
    basic_gen?: AIAgentsAPI.AIStudioAgentBasicGenTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }
}

export interface AIAgentListResponse {
  /**
   * The list of AI Agents.
   */
  entries?: Array<AISingleAgent>;

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
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;
}

export interface AIAgentCreateParams {
  /**
   * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and
   * `enabled_for_selected_users`.
   */
  access_state: string;

  /**
   * The name of the AI Agent.
   */
  name: string;

  /**
   * The type of agent used to handle queries.
   */
  type: 'ai_agent';

  /**
   * List of allowed users or groups.
   */
  allowed_entities?: Array<AIAgentAllowedEntity>;

  /**
   * The AI agent to be used to handle queries.
   */
  ask?: AIAgentCreateParams.Ask;

  /**
   * The AI agent to be used for metadata extraction.
   */
  extract?: AIAgentCreateParams.Extract;

  /**
   * The icon reference of the AI Agent. It should have format of the URL
   * `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>` where
   * possible values of `file_name` are:
   * `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`.
   */
  icon_reference?: string;

  /**
   * The AI agent to be used to generate text.
   */
  text_gen?: AIAgentCreateParams.TextGen;
}

export namespace AIAgentCreateParams {
  /**
   * The AI agent to be used to handle queries.
   */
  export interface Ask {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used to handle queries.
     */
    type: 'ai_agent_ask';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text_multi?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * The AI agent tool used to handle spreadsheets and tabular data.
     */
    spreadsheet?: AIAgentsAPI.AIStudioAgentSpreadsheetTool;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }

  /**
   * The AI agent to be used for metadata extraction.
   */
  export interface Extract {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent to be used for metadata extraction.
     */
    type: 'ai_agent_extract';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;
  }

  /**
   * The AI agent to be used to generate text.
   */
  export interface TextGen {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used for generating text.
     */
    type: 'ai_agent_text_gen';

    /**
     * AI agent basic tool used to generate text.
     */
    basic_gen?: AIAgentsAPI.AIStudioAgentBasicGenTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }
}

export interface AIAgentRetrieveParams {
  /**
   * The fields to return in the response.
   */
  fields?: Array<string>;
}

export interface AIAgentUpdateParams {
  /**
   * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and
   * `enabled_for_selected_users`.
   */
  access_state: string;

  /**
   * The name of the AI Agent.
   */
  name: string;

  /**
   * The type of agent used to handle queries.
   */
  type: 'ai_agent';

  /**
   * List of allowed users or groups.
   */
  allowed_entities?: Array<AIAgentAllowedEntity>;

  /**
   * The AI agent to be used to handle queries.
   */
  ask?: AIAgentUpdateParams.Ask;

  /**
   * The AI agent to be used for metadata extraction.
   */
  extract?: AIAgentUpdateParams.Extract;

  /**
   * The icon reference of the AI Agent. It should have format of the URL
   * `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>` where
   * possible values of `file_name` are:
   * `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`.
   */
  icon_reference?: string;

  /**
   * The AI agent to be used to generate text.
   */
  text_gen?: AIAgentUpdateParams.TextGen;
}

export namespace AIAgentUpdateParams {
  /**
   * The AI agent to be used to handle queries.
   */
  export interface Ask {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used to handle queries.
     */
    type: 'ai_agent_ask';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text_multi?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text_multi?: AIAgentsAPI.AIStudioAgentLongTextTool;

    /**
     * The AI agent tool used to handle spreadsheets and tabular data.
     */
    spreadsheet?: AIAgentsAPI.AIStudioAgentSpreadsheetTool;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }

  /**
   * The AI agent to be used for metadata extraction.
   */
  export interface Extract {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent to be used for metadata extraction.
     */
    type: 'ai_agent_extract';

    /**
     * AI agent processor used to handle basic text.
     */
    basic_image?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * AI agent processor used to handle basic text.
     */
    basic_text?: AIAgentsAPI.AIStudioAgentBasicTextTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * AI agent processor used to to handle longer text.
     */
    long_text?: AIAgentsAPI.AIStudioAgentLongTextTool;
  }

  /**
   * The AI agent to be used to generate text.
   */
  export interface TextGen {
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and
     * `disabled`.
     */
    access_state: string;

    /**
     * The description of the AI agent.
     */
    description: string;

    /**
     * The type of AI agent used for generating text.
     */
    type: 'ai_agent_text_gen';

    /**
     * AI agent basic tool used to generate text.
     */
    basic_gen?: AIAgentsAPI.AIStudioAgentBasicGenTool;

    /**
     * Custom instructions for the AI agent.
     */
    custom_instructions?: string | null;

    /**
     * Suggested questions for the AI agent. If null, suggested question will be
     * generated. If empty, no suggested questions will be displayed.
     */
    suggested_questions?: Array<string>;
  }
}

export interface AIAgentListParams {
  /**
   * The state of the agents to return. Possible values are: `enabled`, `disabled`
   * and `enabled_for_selected_users`.
   */
  agent_state?: Array<string>;

  /**
   * The fields to return in the response.
   */
  fields?: Array<string>;

  /**
   * Whether to include the Box default agents in the response.
   */
  include_box_default?: boolean;

  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Defines the position marker at which to begin returning results.
   */
  marker?: string;

  /**
   * The mode to filter the agent config to return. Possible values are: `ask`,
   * `text_gen`, and `extract`.
   */
  mode?: Array<string>;
}

export declare namespace AIAgents {
  export {
    type AIAgentAllowedEntity as AIAgentAllowedEntity,
    type AISingleAgent as AISingleAgent,
    type AIStudioAgentBasicGenTool as AIStudioAgentBasicGenTool,
    type AIStudioAgentBasicTextTool as AIStudioAgentBasicTextTool,
    type AIStudioAgentBasicTextToolResponse as AIStudioAgentBasicTextToolResponse,
    type AIStudioAgentLongTextTool as AIStudioAgentLongTextTool,
    type AIStudioAgentLongTextToolResponse as AIStudioAgentLongTextToolResponse,
    type AIStudioAgentSpreadsheetTool as AIStudioAgentSpreadsheetTool,
    type CreateAIAgent as CreateAIAgent,
    type AIAgentListResponse as AIAgentListResponse,
    type AIAgentCreateParams as AIAgentCreateParams,
    type AIAgentRetrieveParams as AIAgentRetrieveParams,
    type AIAgentUpdateParams as AIAgentUpdateParams,
    type AIAgentListParams as AIAgentListParams,
  };
}
