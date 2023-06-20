/*
 * nodeMain.ts
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 *
 * Provides the main entrypoint to the server when running in Node.
 */

import { run } from './nodeServer';
import { PyTypeAIServer } from './server';

export function main() {
    run((conn) => new PyTypeAIServer(conn));
}
