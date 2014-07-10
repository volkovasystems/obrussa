/*:
	@module-configuration:
		{
			"packageName": "class-path",
			"fileName": "class-path.js",
			"moduleName": "Path",
			"className": "Path",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/class-path.git",
			"testCase": "class-path-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"fs": "fs",
			"path": "path"
		}
	@end-include
*/
var transformTestToDesign = function transformTestToDesign( testFilePath ){
	/*:
		@meta-configuration:
			{
				"testFilePath:required": "string"
			}
		@end-meta-configuration
	*/

	testFilePath = new Path( testFilePath );

	if( testFilePath.checkIfFile( ) ){

	}else{
		var error = new Error( "invalid test file" );
		console.error( error );
		throw error;
	}
};

var Path = require( "./class-path/class-path.js" );
var fs = require( "fs" );

( module || { } ).exports = transformTestToDesign;