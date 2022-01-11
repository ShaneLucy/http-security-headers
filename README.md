[![lint](https://github.com/ShaneLucy/http-security-headers/actions/workflows/lint.yml/badge.svg)](https://github.com/ShaneLucy/http-security-headers/actions/workflows/lint.yml/badge.svg) [![build](https://github.com/ShaneLucy/http-security-headers/actions/workflows/build.yml/badge.svg)](https://github.com/ShaneLucy/http-security-headers/actions/workflows/build.yml/badge.svg) [![coverage](https://github.com/ShaneLucy/http-security-headers/actions/workflows/coverage.yml/badge.svg)](https://github.com/ShaneLucy/http-security-headers/actions/workflows/coverage.yml/badge.svg) [![test](https://github.com/ShaneLucy/http-security-headers/actions/workflows/test.yml/badge.svg)](https://github.com/ShaneLucy/http-security-headers/actions/workflows/test.yml/badge.svg) [![Code Issues](https://img.shields.io/codeclimate/issues/ShaneLucy/http-security-headers?logo=codeclimate&logoWidth=20)](https://img.shields.io/codeclimate/issues/ShaneLucy/http-security-headers?logo=codeclimate&logoWidth=20) [![Tech Debt](https://img.shields.io/codeclimate/tech-debt/ShaneLucy/http-security-headers?logo=codeclimate&logoWidth=20)](https://img.shields.io/codeclimate/tech-debt/ShaneLucy/http-security-headers?logo=codeclimate&logoWidth=20) [![Code Quality](https://img.shields.io/codefactor/grade/github/ShaneLucy/http-security-headers/master?logo=codefactor&logoWidth=20)](https://img.shields.io/codefactor/grade/github/ShaneLucy/http-security-headers/master?logo=codefactor&logoWidth=20) [![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/ShaneLucy/http-security-headers?logo=snyk&logoWidth=20)](https://img.shields.io/snyk/vulnerabilities/github/ShaneLucy/http-security-headers?logo=snyk&logoWidth=20) [![Code Size](https://img.shields.io/github/languages/code-size/ShaneLucy/http-security-headers?logo=github&logoWidth=20)](https://img.shields.io/github/languages/code-size/ShaneLucy/http-security-headers?logo=github&logoWidth=20) [![Repo Size](https://img.shields.io/github/repo-size/ShaneLucy/http-security-headers?logo=github&logoWidth=20)](https://img.shields.io/github/repo-size/ShaneLucy/http-security-headers?logo=github&logoWidth=20) [![Issues](https://img.shields.io/github/issues-raw/ShaneLucy/http-security-headers?logo=github&logoWidth=20)](https://img.shields.io/github/issues-raw/ShaneLucy/http-security-headers?logo=github&logoWidth=20) [![Last Commit](https://img.shields.io/github/last-commit/ShaneLucy/http-security-headers?logo=github&logoWidth=20)](https://img.shields.io/github/last-commit/ShaneLucy/http-security-headers?logo=github&logoWidth=20) [![Test Coverage](https://img.shields.io/coveralls/github/ShaneLucy/http-security-headers?logo=coveralls&logoWidth=20)](https://img.shields.io/coveralls/github/ShaneLucy/http-security-headers?logo=coveralls&logoWidth=20) [![Sonar Cloud Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=ShaneLucy_http-security-headers&metric=alert_status)](https://sonarcloud.io/api/project_badges/measure?project=ShaneLucy_http-security-headers&metric=alert_status)

# TODO

- Link project with https://sonarcloud.io/,
- Link project with https://coveralls.io/,
- Link project with https://snyk.io/,
- Link project with https://www.codefactor.io/,
- Link project with https://codeclimate.com/

# Project Title

HTTP Security Headers

## Description

A serverless function ran on cloudflare workers that intercepts incoming requests and sets the following headers:

- "Content-Security-Policy": `default-src 'none'; form-action 'self'; font-src 'self'; img-src 'self'; script-src 'unsafe-inline' https: 'strict-dynamic' 'nonce-${nonce}'; style-src 'self'; base-uri 'none'; frame-ancestors 'none'; connect-src 'self'`
- "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload"
- "Permissions-Policy": "interest-cohort=()"
- "X-XSS-Protection": "0"
- "X-Frame-Options": "DENY"
- "X-Content-Type-Options": "nosniff"
- "Referrer-Policy": "strict-origin-when-cross-origin"
- "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";'
- "Cross-Origin-Opener-Policy": 'same-site; report-to="default";'
- "Cross-Origin-Resource-Policy": "same-site"

It also removes the following headers:

- "Public-Key-Pins"
- "X-Powered-By"
- "X-AspNet-Version"

The rational behind creating this was so I could increase the security & privacy of users on my static sites hosted on cloudflare pages
