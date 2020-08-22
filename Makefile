build:
	npx next build
	npx next export
	touch out/.nojekyll
	git add .
	git commit -a -m "build"
	git subtree push --prefix out origin gh-pages
