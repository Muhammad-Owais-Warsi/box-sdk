// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ai', () => {
  // skipped: tests are disabled for the time being
  test.skip('askQuestion: only required params', async () => {
    const responsePromise = client.ai.askQuestion({
      items: [{ id: '123', type: 'file' }],
      mode: 'multiple_item_qa',
      prompt: 'What is the value provided by public APIs based on this document?',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('askQuestion: required and optional params', async () => {
    const response = await client.ai.askQuestion({
      items: [{ id: '123', type: 'file', content: 'This is file content.' }],
      mode: 'multiple_item_qa',
      prompt: 'What is the value provided by public APIs based on this document?',
      ai_agent: {
        type: 'ai_agent_ask',
        basic_image: {
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
          prompt_template:
            'It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.',
          system_message: 'You are a helpful travel assistant specialized in budget travel',
        },
        basic_image_multi: {
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
          prompt_template:
            'It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.',
          system_message: 'You are a helpful travel assistant specialized in budget travel',
        },
        basic_text: {
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
          prompt_template:
            'It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.',
          system_message: 'You are a helpful travel assistant specialized in budget travel',
        },
        basic_text_multi: {
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
          prompt_template:
            'It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.',
          system_message: 'You are a helpful travel assistant specialized in budget travel',
        },
        long_text: {
          embeddings: {
            model: 'azure__openai__text_embedding_ada_002',
            strategy: { id: 'basic', num_tokens_per_chunk: 64 },
          },
        },
        long_text_multi: {
          embeddings: {
            model: 'azure__openai__text_embedding_ada_002',
            strategy: { id: 'basic', num_tokens_per_chunk: 64 },
          },
        },
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
      },
      dialogue_history: [
        {
          answer: 'Here is the first draft of your professional email about public APIs.',
          created_at: '2012-12-12T10:53:43-08:00',
          prompt: 'Make my email about public APIs sound more professional.',
        },
      ],
      include_citations: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('extractMetadata: only required params', async () => {
    const responsePromise = client.ai.extractMetadata({
      items: [{ id: '123', type: 'file' }],
      prompt:
        '\\"fields\\":[{\\"type\\":\\"string\\",\\"key\\":\\"name\\",\\"displayName\\":\\"Name\\",\\"description\\":\\"The customer name\\",\\"prompt\\":\\"Name is always the first word in the document\\"},{\\"type\\":\\"date\\",\\"key\\":\\"last_contacted_at\\",\\"displayName\\":\\"Last Contacted At\\",\\"description\\":\\"When this customer was last contacted at\\"}]',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('extractMetadata: required and optional params', async () => {
    const response = await client.ai.extractMetadata({
      items: [{ id: '123', type: 'file', content: 'This is file content.' }],
      prompt:
        '\\"fields\\":[{\\"type\\":\\"string\\",\\"key\\":\\"name\\",\\"displayName\\":\\"Name\\",\\"description\\":\\"The customer name\\",\\"prompt\\":\\"Name is always the first word in the document\\"},{\\"type\\":\\"date\\",\\"key\\":\\"last_contacted_at\\",\\"displayName\\":\\"Last Contacted At\\",\\"description\\":\\"When this customer was last contacted at\\"}]',
      ai_agent: { type: 'ai_agent_id', id: '14031' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('extractStructuredMetadata: only required params', async () => {
    const responsePromise = client.ai.extractStructuredMetadata({ items: [{ id: '123', type: 'file' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('extractStructuredMetadata: required and optional params', async () => {
    const response = await client.ai.extractStructuredMetadata({
      items: [{ id: '123', type: 'file', content: 'This is file content.' }],
      ai_agent: { type: 'ai_agent_id', id: '14031' },
      fields: [
        {
          key: 'name',
          description: 'The name of the person.',
          displayName: 'Name',
          options: [{ key: 'First Name' }, { key: 'Last Name' }],
          prompt: 'Name is the first and last name from the email address',
          type: 'enum',
        },
      ],
      metadata_template: {
        scope: 'enterprise_12345',
        template_key: 'invoiceTemplate',
        type: 'metadata_template',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('generateText: only required params', async () => {
    const responsePromise = client.ai.generateText({
      items: [{ id: '123', type: 'file' }],
      prompt: 'Write an email to a client about the importance of public APIs.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generateText: required and optional params', async () => {
    const response = await client.ai.generateText({
      items: [
        {
          id: '123',
          type: 'file',
          content: 'This is file content that is relevant to the text gen request.',
        },
      ],
      prompt: 'Write an email to a client about the importance of public APIs.',
      ai_agent: { type: 'ai_agent_id', id: '14031' },
      dialogue_history: [
        {
          answer: 'Here is the first draft of your professional email about public APIs.',
          created_at: '2012-12-12T10:53:43-08:00',
          prompt: 'Make my email about public APIs sound more professional.',
        },
      ],
    });
  });
});
