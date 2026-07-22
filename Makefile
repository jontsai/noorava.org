## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

BUILD_DIR := docs
DEFAULT_BRANCH := main

.PHONY: help install dev run clean build check deploy

## install - install dependency packages
install:
	npm install

## dev - starts the Next.js development server on port 3000
dev: install
	npm run dev

## run - run the Next.js app server
run: install
	npm run build && npm run start

## clean - clean previous builds
clean:
	rm -rf $(BUILD_DIR)/

## build - build the app for release
build: clean install
	npm run build
	cp public/CNAME $(BUILD_DIR)/CNAME || true
	touch $(BUILD_DIR)/.nojekyll

## check - run local verification gates
check:
	npm run typecheck
	npm run lint
	npm run build

## deploy - build, commit generated docs, and push to trigger GitHub Pages deploy
deploy: build
	git add $(BUILD_DIR)
	git diff --cached --quiet || git commit -m "Deploy `git rev-parse --verify HEAD`" --no-verify
	git push origin HEAD:$(DEFAULT_BRANCH)
