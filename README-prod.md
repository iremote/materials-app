# Production Ready Deployment

We use Kubernetes or similar container orchestration tools for production deployment.
The Following instructions will help you to deploy the app on your local machine with a similar setup.

## Building Container Image (Docker)

### CI/CD

We use GitHub Actions for CI/CD. Refer to `.github/workflows` for the workflow.

### Manual

```bash
yarn build
```

```bash
docker build . -t iremote.ai/materials-app:latest
```

```bash
docker run -p 3080:80 iremote.ai/materials-app:latest
```

The App will be available at [http://localhost:3080](http://localhost:3080).
