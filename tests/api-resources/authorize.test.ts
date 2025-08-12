// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authorize', () => {
  // Prism tests are disabled
  test.skip('request: only required params', async () => {
    const responsePromise = client.authorize.request({ client_id: 'client_id', response_type: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('request: required and optional params', async () => {
    const response = await client.authorize.request({
      client_id: 'client_id',
      response_type: 'code',
      redirect_uri: 'redirect_uri',
      scope: 'scope',
      state: 'state',
    });
  });
});
