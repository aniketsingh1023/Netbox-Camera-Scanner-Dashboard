import { NextResponse } from "next/server"

export async function GET() {
  // Minimal PDF from string (very simple, for demo only)
  const pdf = `%PDF-1.4
1 0 obj<<>>endobj
2 0 obj<< /Length 44 >>stream
BT /F1 18 Tf 72 720 Td (VAPT Demo Report) Tj ET
endstream
endobj
3 0 obj<< /Type /Catalog /Pages 4 0 R >>endobj
4 0 obj<< /Type /Pages /Kids [5 0 R] /Count 1 >>endobj
5 0 obj<< /Type /Page /Parent 4 0 R /MediaBox [0 0 612 792] /Contents 2 0 R /Resources << /Font << /F1 6 0 R >> >> >>endobj
6 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj
xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000161 00000 n 
0000000210 00000 n 
0000000272 00000 n 
0000000422 00000 n 
trailer<< /Root 3 0 R /Size 7 >>
startxref
515
%%EOF`
  const bytes = new TextEncoder().encode(pdf)
  return new NextResponse(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="vapt-report.pdf"',
    },
  })
}
