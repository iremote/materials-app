# Builds container image for running under Kubernetes environment.
# Note: we use local system or CICD to build project vs. using Docker builder,
# this approach helps faster builds and works well in managed CI pipelines.
# Authors: Ramesh Doddi, iRemote, Inc.
# www.iremote.ai

#FROM --platform=linux/amd64 nginx:mainline-alpine
FROM nginx:mainline-alpine

# PUBLIC_URL must match with "yarn build" and also with the config/nginx/vhost.conf
ARG PUBLIC_URL=/

LABEL authors="iRemote, Inc. <"
LABEL org.opencontainers.image.description="Materials Demo"
LABEL org.opencontainers.image.source="https://github.com/iremote/materials-app.git"

# Copy custom ngnix config to container
COPY ./config/nginx/vhost.conf /etc/nginx/conf.d/default.conf

# Copy approach serves better for dev & devops purposes AND can be scripted easily.
COPY ./build/ /usr/share/nginx/html$PUBLIC_URL

EXPOSE 80

ENTRYPOINT ["nginx-debug", "-g", "daemon off;"]
