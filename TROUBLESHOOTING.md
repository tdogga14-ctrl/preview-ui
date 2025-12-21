# Troubleshooting Guide

## Semantic Release Failures

### NPM Token Authentication Error

**Problem**: The automated release workflow fails with "Invalid npm token" error.

**Root Cause**: The `NPM_TOKEN` GitHub secret is either not configured, invalid, or expired.

**Solution**: Follow these steps to configure the NPM_TOKEN properly:

#### 1. Generate an NPM Token

1. Log in to [npmjs.com](https://www.npmjs.com/)
2. Click on your profile picture → "Access Tokens"
3. Click "Generate New Token" → "Classic Token"
4. Select token type:
   - **Automation** (recommended for CI/CD)
   - Ensure it has **publish** permissions
5. Copy the generated token immediately (you won't be able to see it again)

#### 2. Add Token to GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste the token you copied from npm
6. Click **Add secret**

#### 3. Verify Workflow Configuration

The workflow file `.github/workflows/release.yml` should already be correctly configured to use the token:

```yaml
- name: 🚀 Run semantic-release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN}}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: npx semantic-release
```

#### 4. Test the Fix

Push a new commit to the `main` branch with a conventional commit message:

```bash
git commit --allow-empty -m "chore: trigger release workflow test"
git push origin main
```

Watch the Actions tab to verify the workflow succeeds.

---

## Common Issues

### Token Permissions

Make sure your npm token has the following:
- **Publish** access to the package
- **Read** access to the registry
- If using organization scope (@premium-ai), ensure you have publish rights to that scope

### Package Scope Mismatch

If you changed the package scope in `package.json`, ensure:
- The npmjs.com token has access to publish to that scope
- The scope exists on npmjs.com
- For organization scopes, you must be a member with publish permissions

### Token Expiration

NPM automation tokens can expire. If the workflow suddenly stops working:
1. Generate a new token on npmjs.com
2. Update the `NPM_TOKEN` secret on GitHub
3. Re-run the failed workflow

---

## Getting Help

If issues persist after following this guide:
1. Check the [semantic-release documentation](https://github.com/semantic-release/semantic-release)
2. Review the [npm token documentation](https://docs.npmjs.com/about-access-tokens)
3. Open an issue in this repository with workflow logs
