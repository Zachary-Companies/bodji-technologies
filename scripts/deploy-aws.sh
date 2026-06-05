#!/usr/bin/env bash
#
# Deploy the Bodji Technologies site to AWS (S3 + CloudFront) at
# https://bodjitechnologies.zacharycompanies.ai
#
# This is the AWS deployment path. (GitHub Pages -> bodjitechnologies.com still
# works independently via .github/workflows/deploy-pages.yml.)
#
# Usage:  ./scripts/deploy-aws.sh
# Requires: AWS CLI authenticated as the `zacharycompanies-deploy` profile.
set -euo pipefail

PROFILE="${AWS_PROFILE_OVERRIDE:-zacharycompanies-deploy}"
BUCKET="bodji-technologies-site-688533750613"
DISTRIBUTION_ID="EXW2PVMBKI0I3"

cd "$(dirname "$0")/.."

echo "==> Building production bundle"
npm run build

echo "==> Syncing to s3://$BUCKET (HTML short cache, assets immutable)"
# Remove the GitHub-Pages-only CNAME from the artifact before upload.
rm -f dist/CNAME
aws s3 sync dist/ "s3://$BUCKET/" --delete --profile "$PROFILE" \
  --cache-control "public,max-age=300"
aws s3 cp "s3://$BUCKET/assets/" "s3://$BUCKET/assets/" --recursive --profile "$PROFILE" \
  --metadata-directive REPLACE --cache-control "public,max-age=31536000,immutable" \
  --content-type-by-ext 2>/dev/null || true

echo "==> Invalidating CloudFront ($DISTRIBUTION_ID)"
aws cloudfront create-invalidation --profile "$PROFILE" \
  --distribution-id "$DISTRIBUTION_ID" --paths "/*" \
  --query "Invalidation.Status" --output text

echo "==> Done: https://bodjitechnologies.zacharycompanies.ai"
