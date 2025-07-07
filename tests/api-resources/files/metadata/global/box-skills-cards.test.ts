// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxSkillsCards', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.files.metadata.global.boxSkillsCards.create('12345', {
      cards: [
        {
          entries: [{}],
          invocation: { id: 'image-recognition-service-123', type: 'skill_invocation' },
          skill: { id: 'image-recognition-service', type: 'service' },
          skill_card_type: 'keyword',
          type: 'skill_card',
        },
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.files.metadata.global.boxSkillsCards.create('12345', {
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
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.files.metadata.global.boxSkillsCards.update('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.metadata.global.boxSkillsCards.update(
        '12345',
        {
          body: [
            {
              op: 'replace',
              path: '/cards/0',
              value: {
                entries: [{ text: 'keyword1' }],
                invocation: { id: 'image-recognition-service-123', type: 'skill_invocation' },
                skill: { id: 'image-recognition-service', type: 'service' },
                skill_card_type: 'keyword',
                type: 'skill_card',
                created_at: '2018-04-13T13:53:23-07:00',
                skill_card_title: { message: 'Labels', code: 'labels' },
              },
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.files.metadata.global.boxSkillsCards.list('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove', async () => {
    const responsePromise = client.files.metadata.global.boxSkillsCards.remove('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
