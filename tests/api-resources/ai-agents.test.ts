// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiAgents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.aiAgents.create({
      access_state: 'enabled',
      name: 'My AI Agent',
      type: 'ai_agent',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.aiAgents.create({
      access_state: 'enabled',
      name: 'My AI Agent',
      type: 'ai_agent',
      allowed_entities: [{ id: '11446498', type: 'user' }],
      ask: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_ask',
        basic_image: { is_custom_instructions_included: false },
        basic_image_multi: { is_custom_instructions_included: false },
        basic_text: { is_custom_instructions_included: false },
        basic_text_multi: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        long_text: { is_custom_instructions_included: false },
        long_text_multi: { is_custom_instructions_included: false },
        spreadsheet: {
          llm_endpoint_params: {
            type: 'openai_params',
            frequency_penalty: 1.5,
            presence_penalty: 1.5,
            stop: '<|im_end|>',
            temperature: 0,
            top_p: 1,
          },
          model: 'azure__openai__gpt_4o_mini',
          num_tokens_for_completion: 8400,
        },
        suggested_questions: ['What is in this file?', 'What are the main highlights of this document?'],
      },
      extract: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_extract',
        basic_image: { is_custom_instructions_included: false },
        basic_text: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        long_text: { is_custom_instructions_included: false },
      },
      icon_reference: 'https://cdn01.boxcdn.net/app-assets/aistudio/avatars/logo_analytics.svg',
      text_gen: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_text_gen',
        basic_gen: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        suggested_questions: ['What is in this file?', 'What are the main highlights of this document?'],
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.aiAgents.retrieve('1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.aiAgents.retrieve('1234', { fields: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.aiAgents.update('1234', {
      access_state: 'enabled',
      name: 'My AI Agent',
      type: 'ai_agent',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.aiAgents.update('1234', {
      access_state: 'enabled',
      name: 'My AI Agent',
      type: 'ai_agent',
      allowed_entities: [{ id: '11446498', type: 'user' }],
      ask: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_ask',
        basic_image: { is_custom_instructions_included: false },
        basic_image_multi: { is_custom_instructions_included: false },
        basic_text: { is_custom_instructions_included: false },
        basic_text_multi: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        long_text: { is_custom_instructions_included: false },
        long_text_multi: { is_custom_instructions_included: false },
        spreadsheet: {
          llm_endpoint_params: {
            type: 'openai_params',
            frequency_penalty: 1.5,
            presence_penalty: 1.5,
            stop: '<|im_end|>',
            temperature: 0,
            top_p: 1,
          },
          model: 'azure__openai__gpt_4o_mini',
          num_tokens_for_completion: 8400,
        },
        suggested_questions: ['What is in this file?', 'What are the main highlights of this document?'],
      },
      extract: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_extract',
        basic_image: { is_custom_instructions_included: false },
        basic_text: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        long_text: { is_custom_instructions_included: false },
      },
      icon_reference: 'https://cdn01.boxcdn.net/app-assets/aistudio/avatars/logo_analytics.svg',
      text_gen: {
        access_state: 'enabled',
        description: 'This is ASK Agent',
        type: 'ai_agent_text_gen',
        basic_gen: { is_custom_instructions_included: false },
        custom_instructions: 'This is a custom instruction',
        suggested_questions: ['What is in this file?', 'What are the main highlights of this document?'],
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.aiAgents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.aiAgents.list(
        {
          agent_state: ['string'],
          fields: ['string'],
          include_box_default: true,
          limit: 1000,
          marker: 'marker',
          mode: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.aiAgents.delete('1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
