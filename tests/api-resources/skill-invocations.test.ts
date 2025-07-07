// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource skillInvocations', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.skillInvocations.update('33243242', {
      file: {},
      metadata: {},
      status: 'success',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.skillInvocations.update('33243242', {
      file: { id: '3243244', type: 'file' },
      metadata: {
        cards: [
          {
            entries: [{ text: 'keyword1' }],
            invocation: { id: 'image-recognition-service-123', type: 'skill_invocation' },
            skill: { id: 'image-recognition-service', type: 'service' },
            skill_card_type: 'keyword',
            type: 'skill_card',
            created_at: '2018-04-13T13:53:23-07:00',
            skill_card_title: { message: 'Labels', code: 'labels' },
          },
        ],
      },
      status: 'success',
      file_version: { id: '731381601045', type: 'file_version' },
      usage: { unit: 'file', value: 1 },
    });
  });
});
