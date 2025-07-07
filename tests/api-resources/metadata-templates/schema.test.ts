// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schema', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.metadataTemplates.schema.create({
      displayName: 'Product Info',
      scope: 'enterprise',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.metadataTemplates.schema.create({
      displayName: 'Product Info',
      scope: 'enterprise',
      copyInstanceOnItemCopy: true,
      fields: [
        {
          displayName: 'Category',
          key: 'category',
          type: 'string',
          description: 'The category',
          hidden: true,
          options: [{ key: 'Category 1' }],
        },
      ],
      hidden: true,
      templateKey: 'productInfo',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.metadataTemplates.schema.retrieve('properties', { scope: 'global' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.metadataTemplates.schema.retrieve('properties', { scope: 'global' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.metadataTemplates.schema.update('properties', { scope: 'global' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.metadataTemplates.schema.update('properties', {
      scope: 'global',
      body: [
        {
          op: 'addEnumOption',
          data: { name: {} },
          enumOptionKey: 'option1',
          enumOptionKeys: ['option1', 'option2', 'option3'],
          fieldKey: 'category',
          fieldKeys: ['category', 'name'],
          multiSelectOptionKey: 'option1',
          multiSelectOptionKeys: ['option1', 'option2', 'option3'],
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.metadataTemplates.schema.delete('properties', { scope: 'global' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.metadataTemplates.schema.delete('properties', { scope: 'global' });
  });
});
