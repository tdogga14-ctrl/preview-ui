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
    
    if npm access ls-packages @$SCOPE 2>/dev/null | grep -q "$PACKAGE_NAME"; then
        echo "✅ You have access to publish $PACKAGE_NAME"
    else
        echo "⚠️  WARNING: Could not verify publish access to $PACKAGE_NAME"
        echo "   Make sure you have publish rights for scope @$SCOPE"
    fi
fi

echo ""
echo "✅ All checks passed!"
echo ""
echo "Next steps:"
echo "1. Add this token to GitHub Secrets as 'NPM_TOKEN'"
echo "2. Go to: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/settings/secrets/actions"
echo "3. Click 'New repository secret'"
echo "4. Name: NPM_TOKEN"
echo "5. Value: [paste your token]"
echo ""
