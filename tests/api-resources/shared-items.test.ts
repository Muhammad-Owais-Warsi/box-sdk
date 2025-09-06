// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sharedItems', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.sharedItems.retrieve({
      boxapi: 'shared_link=[link]&shared_link_password=[password]',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.sharedItems.retrieve({
      boxapi: 'shared_link=[link]&shared_link_password=[password]',
      fields: ['string'],
      'if-none-match': '1',
    });
  });
});
