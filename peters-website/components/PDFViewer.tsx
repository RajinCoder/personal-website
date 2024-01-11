import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadButton from "./DownloadButton";

const workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function PDFViewer() {
  return (
    <div className="relative w-full flex flex-col mt-10">
      <div className="mb-10 h-16 w-full">
        <DownloadButton />
      </div>
      <div className="hidden sm:block">
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
    </div>
  );
}

export default PDFViewer;
