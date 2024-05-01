import a from 'a';
import { describe, it } from 'mocha'
import { strictEqual } from 'node:assert'

describe('a', () => {
    it('should be a function', () => {
        strictEqual(a(), 'A')
    });
});
