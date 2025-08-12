// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth2', () => {
  // Prism tests are disabled
  test.skip('requestToken: only required params', async () => {
    const responsePromise = client.oauth2.requestToken({ grant_type: 'authorization_code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestToken: required and optional params', async () => {
    const response = await client.oauth2.requestToken({
      grant_type: 'authorization_code',
      actor_token: 'c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ',
      actor_token_type: 'urn:ietf:params:oauth:token-type:id_token',
      assertion: 'xxxxx.yyyyy.zzzzz',
      box_shared_link: 'https://cloud.box.com/s/123456',
      box_subject_id: '123456789',
      box_subject_type: 'enterprise',
      client_id: 'ly1nj6n11vionaie65emwzk575hnnmrk',
      client_secret: 'hOzsTeFlT6ko0dme22uGbQal04SBPYc1',
      code: 'n22JPxrh18m4Y0wIZPIqYZK7VRrsMTWW',
      refresh_token: 'c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ',
      resource: 'https://api.box.com/2.0/files/123456',
      scope: 'item_upload item_preview base_explorer',
      subject_token: 'c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ',
      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    });
  });

  // Prism tests are disabled
  test.skip('revokeToken', async () => {
    const responsePromise = client.oauth2.revokeToken({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
