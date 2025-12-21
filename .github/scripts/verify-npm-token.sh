#!/bin/bash
# Verification script to test NPM_TOKEN configuration locally
# Usage: NPM_TOKEN=your_token_here ./.github/scripts/verify-npm-token.sh

set -e

echo "🔍 Verifying NPM Token Configuration..."
echo ""

# Check if NPM_TOKEN is set
if [ -z "$NPM_TOKEN" ]; then
    echo "❌ ERROR: NPM_TOKEN environment variable is not set"
    echo ""
    echo "Usage: NPM_TOKEN=your_token_here $0"
    echo ""
    echo "Get your NPM token from: https://www.npmjs.com/settings/~/tokens"
    exit 1
fi

echo "✅ NPM_TOKEN environment variable is set"
echo ""

# Test npm authentication
echo "🔐 Testing npm authentication..."
if npm whoami --registry https://registry.npmjs.org/ 2>/dev/null; then
    NPM_USER=$(npm whoami --registry https://registry.npmjs.org/)
    echo "✅ Successfully authenticated as: $NPM_USER"
else
    echo "❌ ERROR: Failed to authenticate with npm"
    echo ""
    echo "This could mean:"
    echo "  - The token is invalid or expired"
    echo "  - The token doesn't have the right permissions"
    echo ""
    echo "Generate a new Automation token at: https://www.npmjs.com/settings/~/tokens"
    exit 1
fi

echo ""

# Check package name and scope
PACKAGE_NAME=$(node -p "require('./package.json').name")
echo "📦 Package name: $PACKAGE_NAME"

# Check if user has publish access to the scope
if [[ $PACKAGE_NAME == @* ]]; then
    SCOPE=$(echo $PACKAGE_NAME | cut -d'/' -f1 | sed 's/@//')
    echo "🏢 Checking access to scope: @$SCOPE"
    
    # Try to check access, but don't fail if we can't
    if npm access ls-packages @$SCOPE 2>/dev/null | grep -q "$PACKAGE_NAME"; then
        echo "✅ You have access to publish $PACKAGE_NAME"
    else
        echo "⚠️  Could not verify publish access to $PACKAGE_NAME"
        echo "   This may be normal for private scopes or due to npm access restrictions"
        echo "   The token will still work if you have publish rights"
    fi
fi

echo ""
echo "✅ All checks passed!"
echo ""
echo "Next steps:"
echo "1. Add this token to GitHub Secrets as 'NPM_TOKEN'"
REPO_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [[ -n "$REPO_URL" ]]; then
    REPO_PATH=$(echo "$REPO_URL" | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | sed 's/\.git$//')
    echo "2. Go to: https://github.com/$REPO_PATH/settings/secrets/actions"
else
    echo "2. Go to your GitHub repository → Settings → Secrets and variables → Actions"
fi
echo "3. Click 'New repository secret'"
echo "4. Name: NPM_TOKEN"
echo "5. Value: [paste your token]"
echo ""
