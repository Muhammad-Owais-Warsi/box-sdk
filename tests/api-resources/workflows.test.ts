// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NimbusStorage from 'nimbus-storage';

const client = new NimbusStorage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.workflows.list({ folder_id: 'folder_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.workflows.list({
      folder_id: 'folder_id',
      limit: 1000,
      marker: 'marker',
      trigger_type: 'trigger_type',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('start: only required params', async () => {
    const responsePromise = client.workflows.start('12345', { files: [{}], flow: {}, folder: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('start: required and optional params', async () => {
    const response = await client.workflows.start('12345', {
      files: [{ id: '12345678', type: 'file' }],
      flow: { id: '123456789', type: 'flow' },
      folder: { id: '87654321', type: 'folder' },
      outcomes: [
        {
          id: '17363629',
          collaborators: {
            type: 'variable',
            variable_type: 'user_list',
            variable_value: [{ id: '636281', type: 'user' }],
          },
          completion_rule: {
            type: 'variable',
            variable_type: 'task_completion_rule',
            variable_value: 'all_assignees',
          },
          file_collaborator_role: {
            type: 'variable',
            variable_type: 'collaborator_role',
            variable_value: 'editor',
          },
          role: { type: 'variable', variable_type: 'collaborator_role', variable_value: 'editor' },
          task_collaborators: {
            type: 'variable',
            variable_type: 'user_list',
            variable_value: [{ id: '636281', type: 'user' }],
          },
        },
      ],
      type: 'workflow_parameters',
    });
  });
});
