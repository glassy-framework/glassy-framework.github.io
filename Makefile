build:
	npx next build
	npx next export
	git branch master HEAD
	git filter-branch --subdirectory-filter out -- master
