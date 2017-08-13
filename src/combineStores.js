import { createStateTree } from './index';
import { isPlainObject, checkForUndefinedKeys } from './utils';

/**
 * combineStores - The function that combine your stores and provides
 * the state tree.
 * @param {Object} stores
 * @return {Object} rootStore
 */
const combineStores = stores => {
  if (!isPlainObject(stores)) {
    throw new Error(`Expected stores to be a plain object.`);
  }

  const rootStore = createStateTree(stores).getState();
  return rootStore;
};

export default combineStores;
