// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shieldInformationBarrierSegmentRestrictions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.shieldInformationBarrierSegmentRestrictions.create({
      restricted_segment: {},
      shield_information_barrier_segment: {},
      type: 'shield_information_barrier_segment_restriction',
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
    const response = await client.shieldInformationBarrierSegmentRestrictions.create({
      restricted_segment: { id: '1910967', type: 'shield_information_barrier_segment' },
      shield_information_barrier_segment: { id: '1910967', type: 'shield_information_barrier_segment' },
      type: 'shield_information_barrier_segment_restriction',
      shield_information_barrier: { id: '11446498', type: 'shield_information_barrier' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.shieldInformationBarrierSegmentRestrictions.retrieve('4563');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.shieldInformationBarrierSegmentRestrictions.list({
      shield_information_barrier_segment_id: 'shield_information_barrier_segment_id',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.shieldInformationBarrierSegmentRestrictions.list({
      shield_information_barrier_segment_id: 'shield_information_barrier_segment_id',
      limit: 1000,
      marker: 'marker',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.shieldInformationBarrierSegmentRestrictions.delete('4563');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
