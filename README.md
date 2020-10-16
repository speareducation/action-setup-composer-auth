# Update CloudFront Origin javascript action
*Note: This action is designed to be compatible within Spear's ecosystem.

It will purge all bitbucket.org:speareducation repositories from composer.json, then add https://packages.speareducation.com/composer.*

## Inputs

### `apiKey`
**Required** The API Gateway key for https://packages.speareducation.com

## Example usage
```
- id: composer-auth
  name: Setup Composer Auth
  uses: speareducation/action-setup-composer-auth@main
  with:
    apiKey: ${{ secrets.COMPOSER_API_KEY }}
```