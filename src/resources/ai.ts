// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AIAgentDefaultAPI from './ai-agent-default';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AI extends APIResource {
  /**
   * Sends an AI request to supported LLMs and returns an answer specifically focused
   * on the user's question given the provided context.
   *
   * @example
   * ```ts
   * const response = await client.ai.askQuestion({
   *   items: [{ id: '123', type: 'file' }],
   *   mode: 'multiple_item_qa',
   *   prompt:
   *     'What is the value provided by public APIs based on this document?',
   * });
   * ```
   */
  askQuestion(body: AIAskQuestionParams, options?: RequestOptions): APIPromise<AIAskQuestionResponse> {
    return this._client.post('/ai/ask', { body, ...options });
  }

  /**
   * Sends an AI request to supported Large Language Models (LLMs) and extracts
   * metadata in form of key-value pairs. In this request, both the prompt and the
   * output can be freeform. Metadata template setup before sending the request is
   * not required.
   *
   * @example
   * ```ts
   * const aiResponse = await client.ai.extractMetadata({
   *   items: [{ id: '123', type: 'file' }],
   *   prompt:
   *     '\\"fields\\":[{\\"type\\":\\"string\\",\\"key\\":\\"name\\",\\"displayName\\":\\"Name\\",\\"description\\":\\"The customer name\\",\\"prompt\\":\\"Name is always the first word in the document\\"},{\\"type\\":\\"date\\",\\"key\\":\\"last_contacted_at\\",\\"displayName\\":\\"Last Contacted At\\",\\"description\\":\\"When this customer was last contacted at\\"}]',
   * });
   * ```
   */
  extractMetadata(body: AIExtractMetadataParams, options?: RequestOptions): APIPromise<AIResponse> {
    return this._client.post('/ai/extract', { body, ...options });
  }

  /**
   * Sends an AI request to supported Large Language Models (LLMs) and returns
   * extracted metadata as a set of key-value pairs. For this request, you either
   * need a metadata template or a list of fields you want to extract. Input is
   * **either** a metadata template or a list of fields to ensure the structure. To
   * learn more about creating templates, see
   * [Creating metadata templates in the Admin Console](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates)
   * or use the [metadata template API](g://metadata/templates/create).
   *
   * @example
   * ```ts
   * const response = await client.ai.extractStructuredMetadata({
   *   items: [{ id: '123', type: 'file' }],
   * });
   * ```
   */
  extractStructuredMetadata(
    body: AIExtractStructuredMetadataParams,
    options?: RequestOptions,
  ): APIPromise<AIExtractStructuredMetadataResponse> {
    return this._client.post('/ai/extract_structured', { body, ...options });
  }

  /**
   * Sends an AI request to supported Large Language Models (LLMs) and returns
   * generated text based on the provided prompt.
   *
   * @example
   * ```ts
   * const aiResponse = await client.ai.generateText({
   *   items: [{ id: '123', type: 'file' }],
   *   prompt:
   *     'Write an email to a client about the importance of public APIs.',
   * });
   * ```
   */
  generateText(body: AIGenerateTextParams, options?: RequestOptions): APIPromise<AIResponse> {
    return this._client.post('/ai/text_gen', { body, ...options });
  }
}

/**
 * The information on the models and processors used in the request.
 */
export interface AIAgentInfo {
  /**
   * The models used for the request.
   */
  models?: Array<AIAgentInfo.Model>;

  /**
   * The processor used for the request.
   */
  processor?: string;
}

export namespace AIAgentInfo {
  export interface Model {
    /**
     * The name of the model used for the request.
     */
    name?: string;

    /**
     * The provider that owns the model used for the request.
     */
    provider?: string;

    /**
     * The supported purpose utilized by the model used for the request.
     */
    supported_purpose?: string;
  }
}

/**
 * The AI agent used to handle queries.
 */
export interface AIAgentReference {
  /**
   * The type of AI agent used to handle queries.
   */
  type: 'ai_agent_id';

  /**
   * The ID of an Agent.
   */
  id?: string;
}

/**
 * A context object that can hold prior prompts and answers.
 */
export interface AIDialogueHistory {
  /**
   * The answer previously provided by the LLM.
   */
  answer?: string;

  /**
   * The ISO date formatted timestamp of when the previous answer to the prompt was
   * created.
   */
  created_at?: string;

  /**
   * The prompt previously provided by the client and answered by the LLM.
   */
  prompt?: string;
}

/**
 * The item to be processed by the LLM.
 */
export interface AIItemBase {
  /**
   * The ID of the file.
   */
  id: string;

  /**
   * The type of the item. Currently the value can be `file` only.
   */
  type: 'file';

  /**
   * The content of the item, often the text representation.
   */
  content?: string;
}

/**
 * AI response.
 */
export interface AIResponse {
  /**
   * The answer provided by the LLM.
   */
  answer: string;

  /**
   * The ISO date formatted timestamp of when the answer to the prompt was created.
   */
  created_at: string;

  /**
   * The information on the models and processors used in the request.
   */
  ai_agent_info?: AIAgentInfo;

  /**
   * The reason the response finishes.
   */
  completion_reason?: string;
}

/**
 * AI ask response.
 */
export interface AIAskQuestionResponse extends AIResponse {
  /**
   * The citations of the LLM's answer reference.
   */
  citations?: Array<AIAskQuestionResponse.Citation>;
}

export namespace AIAskQuestionResponse {
  /**
   * The citation of the LLM's answer reference.
   */
  export interface Citation {
    /**
     * The id of the item.
     */
    id?: string;

    /**
     * The specific content from where the answer was referenced.
     */
    content?: string;

    /**
     * The name of the item.
     */
    name?: string;

    /**
     * The type of the item.
     */
    type?: 'file';
  }
}

/**
 * AI extract structured response.
 */
export interface AIExtractStructuredMetadataResponse {
  /**
   * AI extract response. The content of this response may vary depending on the
   * requested configuration.
   */
  answer: unknown;

  /**
   * The ISO date formatted timestamp of when the answer to the prompt was created.
   */
  created_at: string;

  /**
   * The information on the models and processors used in the request.
   */
  ai_agent_info?: AIAgentInfo;

  /**
   * The reason the response finishes.
   */
  completion_reason?: string;
}

export interface AIAskQuestionParams {
  /**
   * The items to be processed by the LLM, often files.
   */
  items: Array<AIAskQuestionParams.Item>;

  /**
   * Box AI handles text documents with text representations up to 1MB in size, or a
   * maximum of 25 files, whichever comes first. If the text file size exceeds 1MB,
   * the first 1MB of text representation will be processed. Box AI handles image
   * documents with a resolution of 1024 x 1024 pixels, with a maximum of 5 images or
   * 5 pages for multi-page images. If the number of image or image pages exceeds 5,
   * the first 5 images or pages will be processed. If you set mode parameter to
   * `single_item_qa`, the items array can have one element only. Currently Box AI
   * does not support multi-modal requests. If both images and text are sent Box AI
   * will only process the text.
   */
  mode: 'multiple_item_qa' | 'single_item_qa';

  /**
   * The prompt provided by the client to be answered by the LLM. The prompt's length
   * is limited to 10000 characters.
   */
  prompt: string;

  /**
   * The AI agent to be used to handle the request.
   */
  ai_agent?: AIAgentDefaultAPI.AIAgentAsk | AIAgentReference;

  /**
   * The history of prompts and answers previously passed to the LLM. This provides
   * additional context to the LLM in generating the response.
   */
  dialogue_history?: Array<AIDialogueHistory>;

  /**
   * A flag to indicate whether citations should be returned.
   */
  include_citations?: boolean;
}

export namespace AIAskQuestionParams {
  /**
   * The item to be processed by the LLM for ask requests.
   */
  export interface Item {
    /**
     * The ID of the file.
     */
    id: string;

    /**
     * The type of the item. A `hubs` item must be used as a single item.
     */
    type: 'file' | 'hubs';

    /**
     * The content of the item, often the text representation.
     */
    content?: string;
  }
}

export interface AIExtractMetadataParams {
  /**
   * The items that LLM will process. Currently, you can use files only.
   */
  items: Array<AIItemBase>;

  /**
   * The prompt provided to a Large Language Model (LLM) in the request. The prompt
   * can be up to 10000 characters long and it can be an XML or a JSON schema.
   */
  prompt: string;

  /**
   * The AI agent to be used for the extraction.
   */
  ai_agent?: AIAgentReference | AIAgentDefaultAPI.AIAgentExtract;
}

export interface AIExtractStructuredMetadataParams {
  /**
   * The items to be processed by the LLM. Currently you can use files only.
   */
  items: Array<AIItemBase>;

  /**
   * The AI agent to be used for the structured extraction.
   */
  ai_agent?: AIAgentReference | AIAgentDefaultAPI.AIAgentExtractStructured;

  /**
   * The fields to be extracted from the provided items. For your request to work,
   * you must provide either `metadata_template` or `fields`, but not both.
   */
  fields?: Array<AIExtractStructuredMetadataParams.Field>;

  /**
   * The metadata template containing the fields to extract. For your request to
   * work, you must provide either `metadata_template` or `fields`, but not both.
   */
  metadata_template?: AIExtractStructuredMetadataParams.MetadataTemplate;
}

export namespace AIExtractStructuredMetadataParams {
  /**
   * The fields to be extracted from the provided items.
   */
  export interface Field {
    /**
     * A unique identifier for the field.
     */
    key: string;

    /**
     * A description of the field.
     */
    description?: string;

    /**
     * The display name of the field.
     */
    displayName?: string;

    /**
     * A list of options for this field. This is most often used in combination with
     * the enum and multiSelect field types.
     */
    options?: Array<Field.Option>;

    /**
     * The context about the key that may include how to find and format it.
     */
    prompt?: string;

    /**
     * The type of the field. It include but is not limited to string, float, date,
     * enum, and multiSelect.
     */
    type?: string;
  }

  export namespace Field {
    export interface Option {
      /**
       * A unique identifier for the field.
       */
      key: string;
    }
  }

  /**
   * The metadata template containing the fields to extract. For your request to
   * work, you must provide either `metadata_template` or `fields`, but not both.
   */
  export interface MetadataTemplate {
    /**
     * The scope of the metadata template that can either be global or enterprise.
     *
     * - The **global** scope is used for templates that are available to any Box
     *   enterprise.
     * - The **enterprise** scope represents templates created within a specific
     *   enterprise, containing the ID of that enterprise.
     */
    scope?: string;

    /**
     * The name of the metadata template.
     */
    template_key?: string;

    /**
     * Value is always `metadata_template`.
     */
    type?: 'metadata_template';
  }
}

export interface AIGenerateTextParams {
  /**
   * The items to be processed by the LLM, often files. The array can include
   * **exactly one** element.
   *
   * **Note**: Box AI handles documents with text representations up to 1MB in size.
   * If the file size exceeds 1MB, the first 1MB of text representation will be
   * processed.
   */
  items: Array<AIGenerateTextParams.Item>;

  /**
   * The prompt provided by the client to be answered by the LLM. The prompt's length
   * is limited to 10000 characters.
   */
  prompt: string;

  /**
   * The AI agent to be used for generating text.
   */
  ai_agent?: AIAgentReference | AIAgentDefaultAPI.AIAgentTextGen;

  /**
   * The history of prompts and answers previously passed to the LLM. This parameter
   * provides the additional context to the LLM when generating the response.
   */
  dialogue_history?: Array<AIDialogueHistory>;
}

export namespace AIGenerateTextParams {
  /**
   * The item to be processed by the LLM.
   */
  export interface Item {
    /**
     * The ID of the item.
     */
    id: string;

    /**
     * The type of the item.
     */
    type: 'file';

    /**
     * The content to use as context for generating new text or editing existing text.
     */
    content?: string;
  }
}

export declare namespace AI {
  export {
    type AIAgentInfo as AIAgentInfo,
    type AIAgentReference as AIAgentReference,
    type AIDialogueHistory as AIDialogueHistory,
    type AIItemBase as AIItemBase,
    type AIResponse as AIResponse,
    type AIAskQuestionResponse as AIAskQuestionResponse,
    type AIExtractStructuredMetadataResponse as AIExtractStructuredMetadataResponse,
    type AIAskQuestionParams as AIAskQuestionParams,
    type AIExtractMetadataParams as AIExtractMetadataParams,
    type AIExtractStructuredMetadataParams as AIExtractStructuredMetadataParams,
    type AIGenerateTextParams as AIGenerateTextParams,
  };
}
