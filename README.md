# tanzir-utils

A collection of array utility functions.

## Installation

You can install the package using npm:

```bash
npm install tanzir-utils
```

## Functions
### divide(arr, size)
Divides an array into smaller subarrays of a specified size.

## Parameters:

arr (Array): The array to divide.
size (number): The size of each subarray.

## Returns:

(Array): A new array containing the subarrays.
## Example:

```js
import { divide } from 'tanzir-utils';

const result = divide([1, 2, 3, 4, 5], 2);
console.log(result); // [[1, 2], [3, 4], [5]]
```
### truthy(arr)
Filters out falsy values from an array.

## Parameters:

arr (Array): The array to filter.
## Returns:

(Array): A new array containing only truthy values from the original array.
## Example:

```js
import { truthy } from 'tanzir-utils';

const result = truthy([0, 1, false, 2, '', 3]);
console.log(result); // [1, 2, 3]
```

### concat(arr, flat = 1, ...distribute)
Concatenates elements to an array with a specified depth of flattening.

## Parameters:

arr (Array): The initial array to which elements will be concatenated.
flat (number, optional): The depth level specifying how deep a nested array structure should be flattened. Default is 1.
...distribute (any): Additional elements or arrays to concatenate and flatten.
## Returns:

(Array): A new array with the concatenated and flattened elements.
## Example:

```js
import { concat } from 'tanzir-utils';

const result = concat([1, 2], 2, [3, [4, [5]]]);
console.log(result); // [1, 2, 3, 4, [5]]
```

### difference(arr1, arr2)
Finds the difference between two arrays.

## Parameters:

arr1 (Array): The first array.
arr2 (Array): The second array.
## Returns:

(Array): Array containing elements that are in arr1 but not in arr2.
## Example:

```js
import { difference } from 'tanzir-utils';

const result = difference([1, 2, 3], [2, 3, 4]);
console.log(result); // [1]

```

### uniq(array)
Creates a duplicate-free version of an array.

## Parameters:

array (Array): The array to inspect.
## Returns:

(Array): Returns the new duplicate-free array.
## Example:

```js
import { uniq } from 'tanzir-utils';

const result = uniq([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // [1, 2, 3, 4, 5]
```

### intersection(array, ...arrays)
Creates an array of unique values that are included in all given arrays.

## Parameters:

array (Array): The first array to inspect.
...arrays (Array): The arrays to inspect.
## Returns:

(Array): Returns the new array of shared values.
## Example:

```js
import { intersection } from 'tanzir-utils';

const result = intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(result); // [3]
```

### union(...arrays)
Creates an array of unique values, in order, from all given arrays.

## Parameters:

...arrays (Array): The arrays to inspect.
## Returns:

(Array): Returns the new array of combined values.
## Example:

```js
import { union } from 'tanzir-utils';

const result = union([1, 2], [2, 3], [3, 4]);
console.log(result); // [1, 2, 3, 4]
```
### flattenDeep(array)
Recursively flattens an array.

## Parameters:

array (Array): The array to flatten.
## Returns:

(Array): Returns the new flattened array.
## Example:

```js
import { flattenDeep } from 'tanzir-utils';

const result = flattenDeep([1, [2, [3, [4]]]]);
console.log(result); // [1, 2, 3, 4]
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.