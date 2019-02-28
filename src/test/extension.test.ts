import * as assert from 'assert';
import { guid } from "../guid";

suite("nguid Tests", function () {
  test('guid', () => {
    assert.ok(guid());
    assert.ok(guid('withseed'));
  });
});