/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
var isDataView = require( '@stdlib/assert-is-dataview' );
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var dtypes = require( '@stdlib/ndarray-dtypes' ).enum;
var modes = require( '@stdlib/ndarray-index-modes' ).enum;
var orders = require( '@stdlib/ndarray-orders' ).enum;
var serialize = require( './../lib/polyfill.js' );


// VARIABLES //

var DTYPES = dtypes();
var MODES = modes();
var ORDERS = orders();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof serialize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function serializes ndarray meta data to a DataView (ndarray)', function test( t ) {
	var expected;
	var strides;
	var nbytes;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var bytes;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'dtype': DTYPES[ 'float64' ],
		'ndims': shape.length,
		'shape': shape,
		'strides': strides,
		'offset': offset,
		'order': ORDERS[ 'row-major' ],
		'mode': MODES[ 'throw' ],
		'nsubmodes': 1,
		'submodes': [ MODES[ 'throw' ] ],
		'flags': 0
	};

	actual = serialize( arr );

	t.strictEqual( isDataView( actual ), true, 'returns a DataView' );
	t.strictEqual( actual.byteLength, 1+2+8+(2*8)+(2*8)+8+1+1+8+(1*1)+4, 'returns expected byte length' );

	bytes = new Uint8Array( actual.buffer );
	nbytes = bytesPerElement( dtype );
	if ( IS_LITTLE_ENDIAN ) {
		t.strictEqual( bytes[ 0 ], 1, 'returns expected endianness' );
		t.strictEqual( bytes[ 1 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 3 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 11 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 19 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 27 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 35 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 43 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 53 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 62 ], expected.flags, 'returns expected flags' );
	} else {
		t.strictEqual( bytes[ 0 ], 0, 'returns expected endianness' );
		t.strictEqual( bytes[ 2 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 10 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 18 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 26 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 34 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 42 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 50 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 60 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 65 ], expected.flags, 'returns expected flags' );
	}
	t.end();
});

tape( 'the function serializes ndarray meta data to a DataView (ndarray-like object)', function test( t ) {
	var expected;
	var strides;
	var nbytes;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var bytes;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = {
		'dtype': dtype,
		'data': buffer,
		'shape': shape,
		'strides': strides,
		'order': order,
		'offset': offset,
		'flags': {
			'READONLY': true
		}
	};

	expected = {
		'dtype': DTYPES[ 'float64' ],
		'ndims': shape.length,
		'shape': shape,
		'strides': strides,
		'offset': offset,
		'order': ORDERS[ 'row-major' ],
		'mode': MODES[ 'throw' ],
		'nsubmodes': 1,
		'submodes': [ MODES[ 'throw' ] ],
		'flags': 4
	};

	actual = serialize( arr );

	t.strictEqual( isDataView( actual ), true, 'returns a DataView' );
	t.strictEqual( actual.byteLength, 1+2+8+(2*8)+(2*8)+8+1+1+8+(1*1)+4, 'returns expected byte length' );

	bytes = new Uint8Array( actual.buffer );
	nbytes = bytesPerElement( dtype );
	if ( IS_LITTLE_ENDIAN ) {
		t.strictEqual( bytes[ 0 ], 1, 'returns expected endianness' );
		t.strictEqual( bytes[ 1 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 3 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 11 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 19 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 27 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 35 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 43 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 53 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 62 ], expected.flags, 'returns expected flags' );
	} else {
		t.strictEqual( bytes[ 0 ], 0, 'returns expected endianness' );
		t.strictEqual( bytes[ 2 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 10 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 18 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 26 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 34 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 42 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 50 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 60 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 65 ], expected.flags, 'returns expected flags' );
	}
	t.end();
});

tape( 'the function serializes ndarray meta data to a DataView (ndarray-like object; modes)', function test( t ) {
	var expected;
	var strides;
	var nbytes;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var bytes;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = {
		'dtype': dtype,
		'data': buffer,
		'shape': shape,
		'strides': strides,
		'order': order,
		'offset': offset,
		'mode': 'wrap',
		'submode': [ 'clamp', 'wrap', 'throw', 'normalize' ],
		'flags': {
			'READONLY': false
		}
	};

	expected = {
		'dtype': DTYPES[ 'float64' ],
		'ndims': shape.length,
		'shape': shape,
		'strides': strides,
		'offset': offset,
		'order': ORDERS[ 'row-major' ],
		'mode': MODES[ 'wrap' ],
		'nsubmodes': 4,
		'submodes': [ MODES[ 'clamp' ], MODES[ 'wrap' ], MODES[ 'throw' ], MODES[ 'normalize' ] ],
		'flags': 0
	};

	actual = serialize( arr );

	t.strictEqual( isDataView( actual ), true, 'returns a DataView' );
	t.strictEqual( actual.byteLength, 1+2+8+(2*8)+(2*8)+8+1+1+8+(4*1)+4, 'returns expected byte length' );

	bytes = new Uint8Array( actual.buffer );
	nbytes = bytesPerElement( dtype );
	if ( IS_LITTLE_ENDIAN ) {
		t.strictEqual( bytes[ 0 ], 1, 'returns expected endianness' );
		t.strictEqual( bytes[ 1 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 3 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 11 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 19 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 27 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 35 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 43 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 53 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 62 ], expected.submodes[ 1 ], 'returns expected submode' );
		t.strictEqual( bytes[ 63 ], expected.submodes[ 2 ], 'returns expected submode' );
		t.strictEqual( bytes[ 64 ], expected.submodes[ 3 ], 'returns expected submode' );
		t.strictEqual( bytes[ 65 ], expected.flags, 'returns expected flags' );
	} else {
		t.strictEqual( bytes[ 0 ], 0, 'returns expected endianness' );
		t.strictEqual( bytes[ 2 ], expected.dtype, 'returns expected dtype' );
		t.strictEqual( bytes[ 10 ], expected.ndims, 'returns expected ndims' );
		t.strictEqual( bytes[ 18 ], expected.shape[ 0 ], 'returns expected first dimension' );
		t.strictEqual( bytes[ 26 ], expected.shape[ 1 ], 'returns expected second dimension' );
		t.strictEqual( bytes[ 34 ], expected.strides[ 0 ]*nbytes, 'returns expected first stride' );
		t.strictEqual( bytes[ 42 ], expected.strides[ 1 ]*nbytes, 'returns expected second stride' );
		t.strictEqual( bytes[ 50 ], expected.offset*nbytes, 'returns expected offset' );
		t.strictEqual( bytes[ 51 ], expected.order, 'returns expected order' );
		t.strictEqual( bytes[ 52 ], expected.mode, 'returns expected index mode' );
		t.strictEqual( bytes[ 60 ], expected.nsubmodes, 'returns expected number of subscript modes' );
		t.strictEqual( bytes[ 61 ], expected.submodes[ 0 ], 'returns expected submode' );
		t.strictEqual( bytes[ 62 ], expected.submodes[ 1 ], 'returns expected submode' );
		t.strictEqual( bytes[ 63 ], expected.submodes[ 2 ], 'returns expected submode' );
		t.strictEqual( bytes[ 64 ], expected.submodes[ 3 ], 'returns expected submode' );
		t.strictEqual( bytes[ 68 ], expected.flags, 'returns expected flags' );
	}
	t.end();
});
