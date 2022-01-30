// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "https://19udebbvvd.execute-api.ca-central-1.amazonaws.com/main/ycanbis",
  TOKEN_KEY : "ycanbis_token",
  userCognitoUrl : 'https://ycanbis.auth.ca-central-1.amazoncognito.com',
  userPoolWebClientId : '1e3hbe947qddb8s12fdg7i0ag0',
  awsCognitoRedirectSignIn: 'https://localhost:4201',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
