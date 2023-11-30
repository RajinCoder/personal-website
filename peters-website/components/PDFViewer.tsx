import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadButton from "./DownloadButton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFViewer() {
  return (
    <div className="relative w-full flex flex-col mt-10">
      <div>
        <Document file="documents/PetersResume.pdf">
          <Page
            pageNumber={1}
            width={1000}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1.3}
          />
        </Document>
      </div>
      <div className="mt-10 h-16">
        <DownloadButton />
      </div>
    </div>
  );
}

export default PDFViewer;
