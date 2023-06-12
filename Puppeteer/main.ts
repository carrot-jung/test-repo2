/*
private async convertHtmlFileToPdf(replacementModel: ReplacementModel): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // read pre-defined template
    let modifiedHtmlContent = FileUtils.readTextFileSync(htmlLocation);

    // replace variables in template with input values
    for (const [placeholder, value] of Object.entries(replacementModel)) {
      modifiedHtmlContent = modifiedHtmlContent.replace(new RegExp(`{{${placeholder}}}`, 'g'), value);
    }

    await page.setContent(modifiedHtmlContent);
    await page.pdf({ path: pdfName });
    await browser.close();
  }
  */