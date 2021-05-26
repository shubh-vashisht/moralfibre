# Moral Fibre! 1.2.1
A javascript Library for NodeJs Projects

This is a library to give a backbone to your javascript and nodejs projects.
It includes basic array function such as map, reduce, filter and as well as more specialized methods: function binding, javascript templating, creating quick indexes, deep equality testing, and so on.

It currently includes 36 function that can help you build your project with each.

Download it using npm with command:
    npm i moralfibre

 Use it in node by first typing the following command:
    const _ = require('moralfibre');
    

### forEach:  _.forEach(list, iteratee) 
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). 

### map: _.map(list, iteratee)
Produces a new array of values by mapping each value in list through a transformation function (iteratee). 

### reduce: _.reduce(list, iteratee)
Reduce boils down a list of values into a single value.

### reduceRight: _.reduceRight(list, iteratee)
The right-associative version of reduce.

### find: _.find(list, predicate) 
Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list

### filter: _.filter(list, predicate) 
Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).

### findWhere: _.findWhere(list, properties)
Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.

### where: _.where(list, properties)
Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.

### reject: _.reject(list, predicate)
Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. 

### every: _.every(list, [predicate]) 
Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.

### some_.some(list, [predicate])
Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 

### contains: _.contains(list, value) 
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

### invoke: _.invoke(list, methodName)
Calls the method named by methodName on each value in the list. 

### pluck: _.pluck(list, propertyName)
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

### max: _.max(list, [iteratee])
Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty.

### min: _.min(list, [iteratee])
Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty.

### sortBy: _.sortBy(list, iteratee)
Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).

### groupBy: _.groupBy(list, iteratee)
Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.

### indexBy: _.indexBy(list, iteratee)
Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.

### countBy: _.countBy(list, iteratee)
Sorts a list into groups and returns a count for the number of objects in each group. Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group.

### shuffle: _.shuffle(list)
Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]

### sample: _.sample(list, [n])
Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

### toArray: _.toArray(list)
Creates a real Array from the list (anything that can be iterated over). Useful for transmuting the arguments object.

### size: _.size(list)
Return the number of values in the list.

### partition: _.partition(list, predicate)
Split list into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.

### compact: _.compact(list)
Returns a copy of the list with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.

### first: _.first(array, [n]) 
Returns the first element of an array. Passing n will return the first n elements of the array.

### initial: _.initial(array, [n])
Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.

### last: _.last(array, [n])
Returns the last element of an array. Passing n will return the last n elements of the array.

### rest: _.rest(array, [index]) 
Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward

### flatten: _.flatten(array, [depth])
Flattens a nested array. If you pass true or 1 as the depth, the array will only be flattened a single level. Passing a greater number will cause the flattening to descend deeper into the nesting hierarchy. Omitting the depth argument, or passing false or Infinity, flattens the array all the way to the deepest nesting leve

### without: _.without(array, *values)
Returns a copy of the array with all instances of the values removed.

### union: _.union(*arrays)
Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

### intersection: _.intersection(*arrays)
Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

### difference: _.difference(array, *others)
Similar to without, but returns the values from array that are not present in the other arrays.


More functions to be implemented!









