// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource securityClassification6VmVochwUWo', () => {
  // skipped: tests are disabled for the time being
  test.skip('addClassification', async () => {
    const responsePromise =
      client.folders.metadata.enterprise.securityClassification6VmVochwUWo.addClassification('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addClassification: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.folders.metadata.enterprise.securityClassification6VmVochwUWo.addClassification(
        '12345',
        { Box__Security__Classification__Key: 'Sensitive' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getClassification', async () => {
    const responsePromise =
      client.folders.metadata.enterprise.securityClassification6VmVochwUWo.getClassification('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('removeClassification', async () => {
    const responsePromise =
      client.folders.metadata.enterprise.securityClassification6VmVochwUWo.removeClassification('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateClassification: only required params', async () => {
    const responsePromise =
      client.folders.metadata.enterprise.securityClassification6VmVochwUWo.updateClassification('12345', {
        body: [{ op: 'replace', path: '/Box__Security__Classification__Key', value: 'Sensitive' }],
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
  test.skip('updateClassification: required and optional params', async () => {
    const response =
      await client.folders.metadata.enterprise.securityClassification6VmVochwUWo.updateClassification(
        '12345',
        { body: [{ op: 'replace', path: '/Box__Security__Classification__Key', value: 'Sensitive' }] },
      );
  });
});
