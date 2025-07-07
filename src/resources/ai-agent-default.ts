// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AIAgentDefault extends APIResource {
  /**
   * Get the AI agent default config.
   */
  retrieve(
    query: AIAgentDefaultRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AIAgentDefaultRetrieveResponse> {
    return this._client.get('/ai_agent_default', { query, ...options });
  }
}

/**
 * The AI agent used to handle queries.
 */
export interface AIAgentAsk {
  /**
   * The type of AI agent used to handle queries.
   */
  type: 'ai_agent_ask';

  /**
   * AI agent processor used to handle basic text.
   */
  basic_image?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to handle basic text.
   */
  basic_image_multi?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to handle basic text.
   */
  basic_text?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to handle basic text.
   */
  basic_text_multi?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to to handle longer text.
   */
  long_text?: AIAgentLongTextTool;

  /**
   * AI agent processor used to to handle longer text.
   */
  long_text_multi?: AIAgentLongTextTool;

  /**
   * The AI agent tool used to handle spreadsheets and tabular data.
   */
  spreadsheet?: AIAgentSpreadsheetTool;
}

/**
 * AI agent basic tool used to generate text.
 */
export interface AIAgentBasicGenTool extends AIAgentBasicTextToolBase {
  /**
   * How the content should be included in a request to the LLM. Input for
   * `{content}` is optional, depending on the use.
   */
  content_template?: string;

  embeddings?: AIAgentBasicGenTool.Embeddings;

  /**
   * The prompt template contains contextual information of the request and the user
   * prompt.
   *
   * When using the `prompt_template` parameter, you **must include** input for
   * `{user_question}`. Inputs for `{current_date}` and `{content}` are optional,
   * depending on the use.
   */
  prompt_template?: string;

  /**
   * System messages aim at helping the LLM understand its role and what it is
   * supposed to do. The input for `{current_date}` is optional, depending on the
   * use.
   */
  system_message?: string;
}

export namespace AIAgentBasicGenTool {
  export interface Embeddings {
    /**
     * The model used for the AI agent for calculating embeddings.
     */
    model?: string;

    strategy?: Embeddings.Strategy;
  }

  export namespace Embeddings {
    export interface Strategy {
      /**
       * The strategy used for the AI agent for calculating embeddings.
       */
      id?: string;

      /**
       * The number of tokens per chunk.
       */
      num_tokens_per_chunk?: number;
    }
  }
}

/**
 * AI agent processor used to handle basic text.
 */
export interface AIAgentBasicTextTool extends AIAgentBasicTextToolBase {
  /**
   * The prompt template contains contextual information of the request and the user
   * prompt. When passing `prompt_template` parameters, you **must include** inputs
   * for `{user_question}` and `{content}`. `{current_date}` is optional, depending
   * on the use.
   */
  prompt_template?: string;

  /**
   * System messages try to help the LLM "understand" its role and what it is
   * supposed to do.
   */
  system_message?: string;
}

/**
 * AI agent processor used to handle basic text.
 */
export interface AIAgentBasicTextToolBase {
  /**
   * The parameters for the LLM endpoint specific to a model.
   */
  llm_endpoint_params?: AILlmEndpointParams;

  /**
   * The model used for the AI agent for basic text. For specific model values, see
   * the [available models list](g://box-ai/supported-models).
   */
  model?: string;

  /**
   * The number of tokens for completion.
   */
  num_tokens_for_completion?: number;
}

/**
 * The AI agent to be used for extraction.
 */
export interface AIAgentExtract {
  /**
   * The type of AI agent to be used for extraction.
   */
  type: 'ai_agent_extract';

  /**
   * AI agent processor used to handle basic text.
   */
  basic_image?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to handle basic text.
   */
  basic_text?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to to handle longer text.
   */
  long_text?: AIAgentLongTextTool;
}

/**
 * The AI agent to be used for structured extraction.
 */
export interface AIAgentExtractStructured {
  /**
   * The type of AI agent to be used for extraction.
   */
  type: 'ai_agent_extract_structured';

  /**
   * AI agent processor used to handle basic text.
   */
  basic_image?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to handle basic text.
   */
  basic_text?: AIAgentBasicTextTool;

  /**
   * AI agent processor used to to handle longer text.
   */
  long_text?: AIAgentLongTextTool;
}

/**
 * AI agent processor used to to handle longer text.
 */
export interface AIAgentLongTextTool extends AIAgentBasicTextTool {
  embeddings?: AIAgentLongTextTool.Embeddings;
}

export namespace AIAgentLongTextTool {
  export interface Embeddings {
    /**
     * The model used for the AI agent for calculating embeddings.
     */
    model?: string;

    strategy?: Embeddings.Strategy;
  }

  export namespace Embeddings {
    export interface Strategy {
      /**
       * The strategy used for the AI agent for calculating embeddings.
       */
      id?: string;

      /**
       * The number of tokens per chunk.
       */
      num_tokens_per_chunk?: number;
    }
  }
}

/**
 * The AI agent tool used to handle spreadsheets and tabular data.
 */
export interface AIAgentSpreadsheetTool {
  /**
   * The parameters for the LLM endpoint specific to a model.
   */
  llm_endpoint_params?: AILlmEndpointParams;

  /**
   * The model used for the AI agent for spreadsheets. For specific model values, see
   * the [available models list](g://box-ai/supported-models).
   */
  model?: string;

  /**
   * The number of tokens for completion.
   */
  num_tokens_for_completion?: number;
}

/**
 * The AI agent used for generating text.
 */
export interface AIAgentTextGen {
  /**
   * The type of AI agent used for generating text.
   */
  type: 'ai_agent_text_gen';

  /**
   * AI agent basic tool used to generate text.
   */
  basic_gen?: AIAgentBasicGenTool;
}

/**
 * The parameters for the LLM endpoint specific to a model.
 */
export type AILlmEndpointParams =
  | AILlmEndpointParams.AILlmEndpointParamsOpenAI
  | AILlmEndpointParams.AILlmEndpointParamsGoogle
  | AILlmEndpointParams.AILlmEndpointParamsAws
  | AILlmEndpointParams.AILlmEndpointParamsIbm;

export namespace AILlmEndpointParams {
  /**
   * AI LLM endpoint params OpenAI object.
   */
  export interface AILlmEndpointParamsOpenAI {
    /**
     * The type of the AI LLM endpoint params object for OpenAI. This parameter is
     * **required**.
     */
    type: 'openai_params';

    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on
     * their existing frequency in the text so far, decreasing the model's likelihood
     * to repeat the same line verbatim.
     */
    frequency_penalty?: number | null;

    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on
     * whether they appear in the text so far, increasing the model's likelihood to
     * talk about new topics.
     */
    presence_penalty?: number | null;

    /**
     * Up to 4 sequences where the API will stop generating further tokens.
     */
    stop?: string | null;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic. We generally recommend altering this or `top_p` but
     * not both.
     */
    temperature?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with `top_p` probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered. We
     * generally recommend altering this or temperature but not both.
     */
    top_p?: number | null;
  }

  /**
   * AI LLM endpoint params Google object.
   */
  export interface AILlmEndpointParamsGoogle {
    /**
     * The type of the AI LLM endpoint params object for Google. This parameter is
     * **required**.
     */
    type: 'google_params';

    /**
     * The temperature is used for sampling during response generation, which occurs
     * when `top-P` and `top-K` are applied. Temperature controls the degree of
     * randomness in the token selection.
     */
    temperature?: number | null;

    /**
     * `Top-K` changes how the model selects tokens for output. A `top-K` of 1 means
     * the next selected token is the most probable among all tokens in the model's
     * vocabulary (also called greedy decoding), while a `top-K` of 3 means that the
     * next token is selected from among the three most probable tokens by using
     * temperature.
     */
    top_k?: number | null;

    /**
     * `Top-P` changes how the model selects tokens for output. Tokens are selected
     * from the most (see `top-K`) to least probable until the sum of their
     * probabilities equals the `top-P` value.
     */
    top_p?: number | null;
  }

  /**
   * AI LLM endpoint params AWS object.
   */
  export interface AILlmEndpointParamsAws {
    /**
     * The type of the AI LLM endpoint params object for AWS. This parameter is
     * **required**.
     */
    type: 'aws_params';

    /**
     * What sampling temperature to use, between 0 and 1. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic. We generally recommend altering this or `top_p` but
     * not both.
     */
    temperature?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with `top_p` probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered. We
     * generally recommend altering this or temperature but not both.
     */
    top_p?: number | null;
  }

  /**
   * AI LLM endpoint params IBM object.
   */
  export interface AILlmEndpointParamsIbm {
    /**
     * The type of the AI LLM endpoint params object for IBM. This parameter is
     * **required**.
     */
    type: 'ibm_params';

    /**
     * What sampling temperature to use, between 0 and 1. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic. We generally recommend altering this or `top_p` but
     * not both.
     */
    temperature?: number | null;

    /**
     * `Top-K` changes how the model selects tokens for output. A `top-K` of 1 means
     * the next selected token is the most probable among all tokens in the model's
     * vocabulary (also called greedy decoding), while a `top-K` of 3 means that the
     * next token is selected from among the three most probable tokens by using
     * temperature.
     */
    top_k?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with `top_p` probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered. We
     * generally recommend altering this or temperature but not both.
     */
    top_p?: number | null;
  }
}

/**
 * The AI agent used to handle queries.
 */
export type AIAgentDefaultRetrieveResponse =
  | AIAgentAsk
  | AIAgentTextGen
  | AIAgentExtract
  | AIAgentExtractStructured;

export interface AIAgentDefaultRetrieveParams {
  /**
   * The mode to filter the agent config to return.
   */
  mode: 'ask' | 'text_gen' | 'extract' | 'extract_structured';

  /**
   * The ISO language code to return the agent config for. If the language is not
   * supported the default agent config is returned.
   */
  language?: string;

  /**
   * The model to return the default agent config for.
   */
  model?: string;
}

export declare namespace AIAgentDefault {
  export {
    type AIAgentAsk as AIAgentAsk,
    type AIAgentBasicGenTool as AIAgentBasicGenTool,
    type AIAgentBasicTextTool as AIAgentBasicTextTool,
    type AIAgentBasicTextToolBase as AIAgentBasicTextToolBase,
    type AIAgentExtract as AIAgentExtract,
    type AIAgentExtractStructured as AIAgentExtractStructured,
    type AIAgentLongTextTool as AIAgentLongTextTool,
    type AIAgentSpreadsheetTool as AIAgentSpreadsheetTool,
    type AIAgentTextGen as AIAgentTextGen,
    type AILlmEndpointParams as AILlmEndpointParams,
    type AIAgentDefaultRetrieveResponse as AIAgentDefaultRetrieveResponse,
    type AIAgentDefaultRetrieveParams as AIAgentDefaultRetrieveParams,
  };
}
