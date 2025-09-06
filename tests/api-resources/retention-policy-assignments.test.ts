// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retentionPolicyAssignments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.retentionPolicyAssignments.create({
      assign_to: { type: 'metadata_template' },
      policy_id: '173463',
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
    const response = await client.retentionPolicyAssignments.create({
      assign_to: { type: 'metadata_template', id: '6564564' },
      policy_id: '173463',
      filter_fields: [
        { field: 'a0f4ee4e-1dc1-4h90-a8a9-aef55fc681d4', value: '0c27b756-0p87-4fe0-a43a-59fb661ccc4e' },
      ],
      start_date_field: 'upload_date',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.retentionPolicyAssignments.retrieve('1233123');
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
      client.retentionPolicyAssignments.retrieve(
        '1233123',
        { fields: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.retentionPolicyAssignments.delete('1233123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFileVersionsUnderRetention', async () => {
    const responsePromise = client.retentionPolicyAssignments.listFileVersionsUnderRetention('1233123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFileVersionsUnderRetention: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.retentionPolicyAssignments.listFileVersionsUnderRetention(
        '1233123',
        { limit: 1000, marker: 'marker' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFilesUnderRetention', async () => {
    const responsePromise = client.retentionPolicyAssignments.listFilesUnderRetention('1233123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFilesUnderRetention: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.retentionPolicyAssignments.listFilesUnderRetention(
        '1233123',
        { limit: 1000, marker: 'marker' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });
});
