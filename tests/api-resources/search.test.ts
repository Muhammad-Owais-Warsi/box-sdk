// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('perform', async () => {
    const responsePromise = client.search.perform();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('perform: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.search.perform(
        {
          ancestor_folder_ids: ['string'],
          content_types: ['name'],
          created_at_range: ['string'],
          deleted_at_range: ['string'],
          deleted_user_ids: ['string'],
          direction: 'DESC',
          fields: ['string'],
          file_extensions: ['string'],
          include_recent_shared_links: true,
          limit: 200,
          mdfilters: [{ filters: { category: {} }, scope: 'enterprise', templateKey: 'contract' }],
          offset: 0,
          owner_user_ids: ['string'],
          query: 'query',
          recent_updater_user_ids: ['string'],
          scope: 'user_content',
          size_range: [0],
          sort: 'modified_at',
          trash_content: 'non_trashed_only',
          type: 'file',
          updated_at_range: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });
});
