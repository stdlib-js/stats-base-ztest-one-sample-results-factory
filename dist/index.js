/** @license Apache-2.0 */

'use strict';

/**
* Return a constructor for creating a one-sample Z-test results object.
*
* @module @stdlib/stats-base-ztest-one-sample-results-factory
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var resultsFactory = require( '@stdlib/stats-base-ztest-one-sample-results-factory' );
*
* var Results = resultsFactory( 'float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.3374;
* results.statistic = 0.9592;
* results.sd = 0.4535;
* results.ci = new Float64Array( [ -0.0316, 0.0923 ] );
* results.rejected = false;
*
* var str = results.toString();
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
