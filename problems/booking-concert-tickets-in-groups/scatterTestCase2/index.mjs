import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));

const actions = JSON.parse(fs.readFileSync(resolve(_dirname, 'actions.txt'), 'utf-8'));
const inputs = JSON.parse(fs.readFileSync(resolve(_dirname, 'inputs.txt'), 'utf-8'));
const outputs = JSON.parse(fs.readFileSync(resolve(_dirname, 'outputs.txt'), 'utf-8'));

export const scatterTestCase2 = [
    actions,
    inputs,
    [null, ...outputs]
]
