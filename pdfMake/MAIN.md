# PdfMake 
- https://github.com/bpampuch/pdfmake

## Explannation
- We can generate html file by using JS which leads to pdf at the end. ( not markdown to pdf )

- Pros : This is Js library. We can make html whatever you want with JS
- Cons : It's more like creating a html by using JS for PDF. Too verbose to acheive our goal. Look at below code. 

```
	beginColumn(width, offset, endingCell) {
		let saved = this.snapshots[this.snapshots.length - 1];

		this.calculateBottomMost(saved);

		this.endingCell = endingCell;
		this.page = saved.page;
		this.x = this.x + this.lastColumnWidth + (offset || 0);
		this.y = saved.y;
		this.availableWidth = width;	//saved.availableWidth - offset;
		this.availableHeight = saved.availableHeight;

		this.lastColumnWidth = width;
	}
```