# AWS Hosting — bodjitechnologies.zacharycompanies.ai

The site is hosted on AWS (account `688533750613`, region `us-east-1`) and served at
**https://bodjitechnologies.zacharycompanies.ai**.

> The separate GitHub Pages deploy (`.github/workflows/deploy-pages.yml`, custom
> domain `bodjitechnologies.com`) is independent and still functions. The AWS path
> below is the fully-AWS hosting on the `zacharycompanies.ai` zone.

## Deploy a new version

```bash
./scripts/deploy-aws.sh
```

Builds, syncs `dist/` to S3, and invalidates CloudFront. Requires the
`zacharycompanies-deploy` AWS profile.

## Resources (provisioned via AWS CLI, deploy role)

| Resource | Identifier |
| --- | --- |
| S3 bucket (private, OAC-only) | `bodji-technologies-site-688533750613` |
| CloudFront distribution | `EXW2PVMBKI0I3` (`d3deayh2p3h6u8.cloudfront.net`) |
| Origin Access Control | `E3QT5LSA0F45XZ` (`bodji-technologies-oac`) |
| ACM certificate (us-east-1) | `arn:aws:acm:us-east-1:688533750613:certificate/89e5eafa-a116-4bb3-969b-cd571e4b2dad` |
| Route 53 zone | `zacharycompanies.ai` (`Z08263601I39SS8DMDYUI`) |
| DNS record | `bodjitechnologies.zacharycompanies.ai` A/AAAA alias → CloudFront |

## Notes

- S3 is private; CloudFront reads it via Origin Access Control. The bucket policy
  only allows `cloudfront.amazonaws.com` for this distribution's ARN.
- CloudFront returns `/index.html` (200) for 403/404 so client-side routes resolve
  (SPA fallback).
- The AI Visibility Checker and mini-course are currently external links to the
  live Beacon site/API; they are not hosted in this bucket.
