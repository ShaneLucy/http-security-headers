export default (
  nonce: string
): {
  "Content-Security-Policy": string;
  "X-XSS-Protection": string;
  "X-Frame-Options": string;
  "X-Content-Type-Options": string;
  "Referrer-Policy": string;
  "Cross-Origin-Embedder-Policy": string;
  "Cross-Origin-Opener-Policy": string;
  "Cross-Origin-Resource-Policy": string;
  "Strict-Transport-Security": string;
  "Permissions-Policy": string;
} => ({
  /**
   * Secure your application with Content-Security-Policy headers.
   * Enabling these headers will permit content from a trusted domain and all its subdomains.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
   */
  "Content-Security-Policy": `default-src 'none'; form-action 'self'; font-src 'self'; img-src 'self'; script-src 'unsafe-inline' https: 'strict-dynamic' 'nonce-${nonce}'; style-src 'self'; base-uri 'none'; frame-ancestors 'none'; connect-src 'self'`,
  /**
   * The HTTP Strict-Transport-Security informs browsers that the site should only be accessed using HTTPS.
   * Any future attempts to access it using HTTP should automatically be converted to HTTPS.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
   */
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  /**
   * Permissions-Policy header provides the ability to allow or deny the use of browser features, such as opting out of FLoC.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
   */
  "Permissions-Policy": "interest-cohort=()",
  /**
   * X-XSS-Protection header prevents a page from loading if an XSS attack is detected.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
   */
  "X-XSS-Protection": "0",
  /**
   * X-Frame-Options header prevents click-jacking attacks.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
   */
  "X-Frame-Options": "DENY",
  /**
   * X-Content-Type-Options header prevents MIME-sniffing.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
   */
  "X-Content-Type-Options": "nosniff",
  /**
   * Referrer-Policy HTTP header controls how much referrer information (sent with the Referer header) should be included with requests.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
   */
  "Referrer-Policy": "strict-origin-when-cross-origin",
  /**
   * Cross-Origin-Embedder-Policy prevents a document from loading any cross-origin resources,
   * that don't explicitly grant the document permission (using CORP or CORS).
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
   */
  "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";',
  /**
   * Cross-Origin-Opener-Policy allows you to ensure a top-level document does not share a browsing context group with cross-origin documents.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
   */
  "Cross-Origin-Opener-Policy": 'same-site; report-to="default";',
  /**
   * Cross-Origin-Resource-Policy conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
   */
  "Cross-Origin-Resource-Policy": "same-site",
});
