/*!
 * clout-example-angluar2-ts-scss
 * Copyright(c) 2016 Muhammad Dadu
 * MIT Licensed
 */
(function(global) {
  var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    '@angular':                   '//unpkg.com/@angular', // sufficient if we didn't pin the version
    'angular2-in-memory-web-api': '//unpkg.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       '//unpkg.com/rxjs@5.0.0-beta.6',
    'ts':                         '//unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 '//unpkg.com/typescript@1.8.10/lib/typescript.js',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function (pkgName) {
    map['@angular/'+pkgName] = '//unpkg.com/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        'exports': 'ts'
      }
    },
    map: map,
    packages: packages
  });
})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/