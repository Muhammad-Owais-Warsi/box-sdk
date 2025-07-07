// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create({ name: 'Aaron Levie' });
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
    const response = await client.users.create({
      name: 'Aaron Levie',
      fields: ['string'],
      address: '900 Jefferson Ave, Redwood City, CA 94063',
      can_see_managed_users: true,
      external_app_user_id: 'my-user-1234',
      is_exempt_from_device_limits: true,
      is_exempt_from_login_verification: true,
      is_external_collab_restricted: true,
      is_platform_access_only: true,
      is_sync_enabled: true,
      job_title: 'CEO',
      language: 'en',
      login: 'boss@box.com',
      phone: '6509241374',
      role: 'user',
      space_amount: 11345156112,
      status: 'active',
      timezone: 'Africa/Bujumbura',
      tracking_codes: [{ name: 'department', type: 'tracking_code', value: 'Sales' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.users.retrieve('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.retrieve('12345', { fields: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.users.update('12345');
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
      client.users.update(
        '12345',
        {
          fields: ['string'],
          address: '900 Jefferson Ave, Redwood City, CA 94063',
          can_see_managed_users: true,
          enterprise: null,
          external_app_user_id: 'my-user-1234',
          is_exempt_from_device_limits: true,
          is_exempt_from_login_verification: true,
          is_external_collab_restricted: true,
          is_password_reset_required: true,
          is_sync_enabled: true,
          job_title: 'CEO',
          language: 'en',
          login: 'somename@box.com',
          name: 'Aaron Levie',
          notification_email: { email: 'notifications@example.com' },
          notify: true,
          phone: '6509241374',
          role: 'user',
          space_amount: 11345156112,
          status: 'active',
          timezone: 'Africa/Bujumbura',
          tracking_codes: [{ name: 'department', type: 'tracking_code', value: 'Sales' }],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.users.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.list(
        {
          external_app_user_id: 'external_app_user_id',
          fields: ['string'],
          filter_term: 'filter_term',
          limit: 1000,
          marker: 'marker',
          offset: 0,
          usemarker: true,
          user_type: 'all',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.users.delete('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.delete('12345', { force: true, notify: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMemberships', async () => {
    const responsePromise = client.users.listMemberships('12345');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMemberships: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.listMemberships('12345', { limit: 1000, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCurrent', async () => {
    const responsePromise = client.users.retrieveCurrent();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCurrent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.retrieveCurrent({ fields: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NimbusStorage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('terminateSessions: only required params', async () => {
    const responsePromise = client.users.terminateSessions({
      user_ids: ['123456', '456789'],
      user_logins: ['user@sample.com', 'user2@sample.com'],
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
  test.skip('terminateSessions: required and optional params', async () => {
    const response = await client.users.terminateSessions({
      user_ids: ['123456', '456789'],
      user_logins: ['user@sample.com', 'user2@sample.com'],
    });
  });
});
