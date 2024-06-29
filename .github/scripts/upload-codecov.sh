#!/bin/bash

# Check if CC_TEST_REPORTER_ID is set
if [ -z "$CC_TEST_REPORTER_ID" ]; then
  echo "Error: CC_TEST_REPORTER_ID environment variable is not set."
  exit 1
fi

# Create temporary directory
mkdir -p tmp/

# Determine the OS and download the appropriate test reporter
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 -o tmp/cc-test-reporter
elif [[ "$OSTYPE" == "darwin"* ]]; then
  curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-0.10.1-darwin-amd64 -o tmp/cc-test-reporter
else
  echo "Unsupported OS: $OSTYPE"
  exit 1
fi

# Make the test reporter executable
chmod +x tmp/cc-test-reporter

# Format coverage for Code Climate
tmp/cc-test-reporter format-coverage -t lcov coverage/lcov.info -o "coverage/codeclimate.${RUNNER_OS:-local}.json"

# Clean up temporary files
rm -rf tmp/
