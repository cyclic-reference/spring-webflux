#!/usr/bin/env bash
docker run --rm -v /home/alex/workspace/mongo-images/web-content/:/app alexsimons/webflux-node-dev:9.2.0 npm run compile
