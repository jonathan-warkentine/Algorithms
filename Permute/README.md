# Permutating/Combinating Algorithms

Some toying around with various approaches to determining permutation/combination possibilities for given arrays.

While the custom recursive algorithm exhaustively and directly calculates all possible combinations from a given array, it performs sluggishly on arrays of length >10 or so. An alternative randomizing algorithm generates randomized possibilities of valid combination possibilities, and filters out duplicate suggestions. Although less efficient in the sense of performing unnecessary calculations (duplicate possibilities, ie work done twice), the randomizing algorithm is significantly faster by orders of magnitude as the length of the given array scales.

I have not yet studied the algorithms to see why this performance gap exists.