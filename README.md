<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Serialize Meta Data

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Serialize [ndarray][@stdlib/ndarray/ctor] meta data.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-serialize-meta-data
```

</section>

<section class="usage">

## Usage

```javascript
var serialize = require( '@stdlib/ndarray-base-serialize-meta-data' );
```

#### serialize( x )

Serializes [ndarray][@stdlib/ndarray/ctor] meta data.

```javascript
var array = require( '@stdlib/ndarray-array' );

var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var dv = serialize( arr );
// returns <DataView>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Serialization is performed according to host byte order (endianness).

-   Meta data format:

    ```text
    | endianness (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) |
    ```

    which translates to the following `ArrayBuffer` layout:

    ```text
    ArrayBuffer[
        <endianness>[int8],
        <dtype>[int16],
        <ndims>[int64],
        <shape>[ndims*int64],
        <strides>[ndims*int64],
        <offset>[int64],
        <order>[int8],
        <mode>[int8],
        <nsubmodes>[int64],
        <submodes>[nsubmodes*int8]
    ]
    ```

    where `strides` and `offset` are in units of bytes.

-   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.

-   Buffer length:

    ```text
    1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) = 29 + (ndims*16) + nsubmodes
    ```

    For example, consider a three-dimensional [ndarray][@stdlib/ndarray/ctor] with one subscript index mode (submode):

    ```text
    29 + (3*16) + 1 = 78 bytes
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
var array = require( '@stdlib/ndarray-array' );
var Uint8Array = require( '@stdlib/array-uint8' );
var fromInt64Bytes = require( '@stdlib/number-float64-base-from-int64-bytes' );
var serialize = require( '@stdlib/ndarray-base-serialize-meta-data' );

// Create an ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

// Print various properties:
console.log( 'dtype: %s', x.dtype );
console.log( 'ndims: %d', x.ndims );
console.log( 'shape: [ %s ]', x.shape.join( ', ' ) );
console.log( 'strides: [ %s ]', x.strides.join( ', ' ) );
console.log( 'offset: %d', x.offset );
console.log( 'order: %s', x.order );

// Serialize ndarray meta data to a DataView:
var dv = serialize( x );
// returns <DataView>

// Create a Uint8Array view:
var bytes = new Uint8Array( dv.buffer );

// Extract the data type (enum):
var dtype = dv.getInt16( 1, IS_LITTLE_ENDIAN );
console.log( 'dtype (enum): %d', dtype );

// Extract the number of dimensions:
var ndims = fromInt64Bytes( bytes, 1, 3 );
console.log( 'ndims: %d', x.ndims );

// Extract the shape:
var shape = [];
var i;
for ( i = 0; i < ndims; i++ ) {
    shape.push( fromInt64Bytes( bytes, 1, 11+(i*8) ) );
}
console.log( 'shape: [ %s ]', shape.join( ', ' ) );

// Extract the strides (in units of bytes):
var strides = [];
for ( i = 0; i < ndims; i++ ) {
    strides.push( fromInt64Bytes( bytes, 1, 11+(ndims*8)+(i*8) ) );
}
console.log( 'strides (bytes): [ %s ]', strides.join( ', ' ) );

// Extract the index offset (in bytes):
var offset = fromInt64Bytes( bytes, 1, 11+(ndims*16) );
console.log( 'offset (bytes): %d', offset );

// Extract the order (enum):
var order = dv.getInt8( 19+(ndims*16) );
console.log( 'order (enum): %d', order );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-serialize-meta-data.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-serialize-meta-data

[test-image]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-serialize-meta-data/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-serialize-meta-data?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-serialize-meta-data.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-serialize-meta-data/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-serialize-meta-data/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
