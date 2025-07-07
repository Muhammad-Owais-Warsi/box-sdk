// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage, { toFile } from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  // skipped: tests are disabled for the time being
  test.skip('download: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.content.download(
        '12345',
        {
          access_token: 'access_token',
          version: 'version',
          boxapi: 'shared_link=[link]&shared_link_password=[password]',
          range: 'bytes=0-1024',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: only required params', async () => {
    const responsePromise = client.files.content.upload({
      attributes: { name: 'Photo.png', parent: { id: '124132' } },
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.files.content.upload({
      attributes: {
        name: 'Photo.png',
        parent: { id: '124132' },
        content_created_at: '2012-12-12T10:53:43-08:00',
        content_modified_at: '2012-12-12T10:53:43-08:00',
      },
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      fields: ['string'],
      'content-md5': '134b65991ed521fcfe4724b7d814ab8ded5185dc',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadVersion: only required params', async () => {
    const responsePromise = client.files.content.uploadVersion('12345', {
      attributes: { name: 'Photo 2.0.png' },
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('uploadVersion: required and optional params', async () => {
    const response = await client.files.content.uploadVersion('12345', {
      attributes: { name: 'Photo 2.0.png', content_modified_at: '2012-12-12T10:53:43-08:00' },
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      fields: ['string'],
      'content-md5': '134b65991ed521fcfe4724b7d814ab8ded5185dc',
      'if-match': '1',
    });
  });
});
