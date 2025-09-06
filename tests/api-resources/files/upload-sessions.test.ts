// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage, { toFile } from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploadSessions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.files.uploadSessions.create({
      file_name: 'Project.mov',
      file_size: 104857600,
      folder_id: '0',
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
    const response = await client.files.uploadSessions.create({
      file_name: 'Project.mov',
      file_size: 104857600,
      folder_id: '0',
    });
  });

  // Prism tests are disabled
  test.skip('commit: only required params', async () => {
    const responsePromise = client.files.uploadSessions.commit('D5E3F7A', {
      parts: [{}],
      digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
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
  test.skip('commit: required and optional params', async () => {
    const response = await client.files.uploadSessions.commit('D5E3F7A', {
      parts: [
        {
          offset: 16777216,
          part_id: '6F2D3486',
          sha1: '134b65991ed521fcfe4724b7d814ab8ded5185dc',
          size: 3222784,
        },
      ],
      digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
      'if-match': '1',
      'if-none-match': '1',
    });
  });

  // Prism tests are disabled
  test.skip('createForExistingFile: only required params', async () => {
    const responsePromise = client.files.uploadSessions.createForExistingFile('12345', {
      file_size: 104857600,
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
  test.skip('createForExistingFile: required and optional params', async () => {
    const response = await client.files.uploadSessions.createForExistingFile('12345', {
      file_size: 104857600,
      file_name: 'Project.mov',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.files.uploadSessions.get('D5E3F7A');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listParts', async () => {
    const responsePromise = client.files.uploadSessions.listParts('D5E3F7A');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listParts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.uploadSessions.listParts(
        'D5E3F7A',
        { limit: 1000, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.files.uploadSessions.remove('D5E3F7A');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadPart: only required params', async () => {
    const responsePromise = client.files.uploadSessions.uploadPart(
      'D5E3F7A',
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { 'content-range': 'bytes 8388608-16777215/445856194', digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadPart: required and optional params', async () => {
    const response = await client.files.uploadSessions.uploadPart(
      'D5E3F7A',
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { 'content-range': 'bytes 8388608-16777215/445856194', digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=' },
    );
  });
});
