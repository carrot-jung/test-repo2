# Pandoc
- This is more like cli library
- It's possible to convert from Markdown to PDF directly with simple command
- https://github.com/jgm/pandoc


## Installation
1. brew install pandoc
2. brew install basictex

## Markdown to PDF
- Command : pandoc MAIN.md -o output.pdf

- Pros : It's possible to convert from markdown to pdf directly
- Cons : Once markdown converted to PDF, the content is always located at specific area which we can't control. For example, in case we need to put speicifc word to the top without space, it seems to be impossible. To give some css config, we can try with latex template ( https://github.com/Wandmalfarbe/pandoc-latex-template)

- Additional libs are needed to use pandoc-latext-template : https://github.com/Wandmalfarbe/pandoc-latex-template/issues/141


## Latex-template-example
- https://github.com/Wandmalfarbe/pandoc-latex-template/tree/master/examples


![Image](github.png)
<!-- <img src="./github.png" width="200px" height="200px" title="Github_Logo"/> -->

## Markdown to Html & Html -> Pdf
- Command : pandoc MAIN.md -o output.html & pandoc output.html -o output.pdf

- Pros : By manipulating output.html, we can beautify our template to generate PDF. 
- Cons : Nothing special. Just two times command.


## Ignore below table it's for test

| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |