build:
	npx next build
	npx next export
	git subtree push --prefix out origin gh-pages
