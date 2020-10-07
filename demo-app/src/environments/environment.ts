// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   ifcParseEndpoint: "http://localhost:3000/",
//   reasoningEndpoint: "http://51.15.95.164:3001/",
//   shaclEndpoint: "http://localhost:3000/"
// };
export const environment = {
  production: true,
  ifcParseEndpoint: "https://niras-ifc-parser.azurewebsites.net/",
  reasoningEndpoint: "https://niras-reasoning-api.azurewebsites.net/",
  shaclEndpoint: "https://niras-shacl-api.azurewebsites.net/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
