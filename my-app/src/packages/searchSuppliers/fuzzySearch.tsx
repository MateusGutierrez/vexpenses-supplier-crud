import Fuse from 'fuse.js';
import type { IFuseOptions } from 'fuse.js';
import { isEmpty, map } from 'lodash';
import { Supplier } from '../../store/supplierStore/interface';

const FUZZY_SEARCH_OPTIONS: IFuseOptions<Supplier> = {
  includeScore: true,
  threshold: 0.5,
  keys: [
    'name',
    'description',
    'contacts.name',
    'contacts.phone',
    'address.cep',
    'address.state',
    'address.city',
    'address.street',
    'address.number',
    'address.reference'
  ]
};
// eslint-disable-next-line import/prefer-default-export
export function performFuzzySearch(
  supplier: Array<Supplier>,
  fullText: string | null | undefined
): Promise<Array<Supplier>> {
  return new Promise(resolve => {
    if (isEmpty(fullText)) {
      resolve(supplier);
      return;
    }
    const fuse = new Fuse(supplier, FUZZY_SEARCH_OPTIONS);
    setTimeout(() => {
      const results = fuse.search(fullText as string);
      resolve(map(results, 'item'));
    }, 0);
  });
}
