// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadataQueries', () => {
  // Prism tests are disabled
  test.skip('execute: only required params', async () => {
    const responsePromise = client.metadataQueries.execute({
      ancestor_folder_id: '0',
      from: 'enterprise_123456.someTemplate',
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
  test.skip('execute: required and optional params', async () => {
    const response = await client.metadataQueries.execute({
      ancestor_folder_id: '0',
      from: 'enterprise_123456.someTemplate',
      fields: [
        'extension',
        'created_at',
        'item_status',
        'metadata.enterprise_1234.contracts',
        'metadata.enterprise_1234.regions.location',
      ],
      limit: 50,
      marker:
        'AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff',
      order_by: [{ direction: 'asc', field_key: 'amount' }],
      query: 'value >= :amount',
      query_params: { amount: {} },
    });
  });
});
