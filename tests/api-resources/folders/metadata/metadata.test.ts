// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadata', () => {
  // Prism tests are disabled
  test.skip('createMetadataInstance: only required params', async () => {
    const responsePromise = client.folders.metadata.createMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
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
  test.skip('createMetadataInstance: required and optional params', async () => {
    const response = await client.folders.metadata.createMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
      body: { name: {} },
    });
  });

  // Prism tests are disabled
  test.skip('getMetadataInstance: only required params', async () => {
    const responsePromise = client.folders.metadata.getMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
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
  test.skip('getMetadataInstance: required and optional params', async () => {
    const response = await client.folders.metadata.getMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
    });
  });

  // Prism tests are disabled
  test.skip('listMetadata', async () => {
    const responsePromise = client.folders.metadata.listMetadata('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeMetadataInstance: only required params', async () => {
    const responsePromise = client.folders.metadata.removeMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
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
  test.skip('removeMetadataInstance: required and optional params', async () => {
    const response = await client.folders.metadata.removeMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
    });
  });

  // Prism tests are disabled
  test.skip('updateMetadataInstance: only required params', async () => {
    const responsePromise = client.folders.metadata.updateMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
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
  test.skip('updateMetadataInstance: required and optional params', async () => {
    const response = await client.folders.metadata.updateMetadataInstance('properties', {
      folder_id: '12345',
      scope: 'global',
      body: [{ from: '/nextState', op: 'add', path: '/currentState', value: 'reviewed' }],
    });
  });
});
