// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.integrationMappings.teams.create({
      box_item: { id: '42037322', type: 'folder' },
      partner_item: {
        id: '19%ABCD-Avgfggkggyftdtfgghjhkhkhh%40thread:tacv2',
        team_id: 'hjgjgjg-bhhj-564a-b643-hghgj685u',
        tenant_id: 'abcd-defg-1235-7890',
        type: 'channel',
      },
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
    const response = await client.integrationMappings.teams.create({
      box_item: { id: '42037322', type: 'folder' },
      partner_item: {
        id: '19%ABCD-Avgfggkggyftdtfgghjhkhkhh%40thread:tacv2',
        team_id: 'hjgjgjg-bhhj-564a-b643-hghgj685u',
        tenant_id: 'abcd-defg-1235-7890',
        type: 'channel',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.integrationMappings.teams.update('11235432');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationMappings.teams.update(
        '11235432',
        { box_item: { id: '42037322', type: 'folder' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.integrationMappings.teams.list();
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
      client.integrationMappings.teams.list(
        {
          box_item_id: 'box_item_id',
          box_item_type: 'folder',
          partner_item_id: 'partner_item_id',
          partner_item_type: 'channel',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.integrationMappings.teams.delete('11235432');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
