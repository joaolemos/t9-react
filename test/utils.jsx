import assert from 'assert';
import { utils } from '../server/utils';

describe('searchString', function() {
  let trie = utils.init('server/words_test.txt');
  it('should return god on 463', function() {
    assert.equal("god", utils.searchString(trie, "463"));
  })
  
  it('should return ["go", "ho"] on 46', function() {
    assert.deepEqual(["go", "ho"], utils.searchString(trie, "46"));
  })

  it('should return ["good", "gone", "home", "goof". "hoof"]', function() {
    assert.deepEqual(["good", "gone", "home", "goof", "hoof"], 
      utils.searchString(trie, "4663"));
  })
});
