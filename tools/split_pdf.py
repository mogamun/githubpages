"""PDF 페이지 분할 도구

사용법:
  python tools/split_pdf.py <입력파일> <시작페이지> <끝페이지> [출력파일]

예시:
  python tools/split_pdf.py sample.pdf 1 5
  python tools/split_pdf.py sample.pdf 1 5 result.pdf
"""

import sys
from pypdf import PdfReader, PdfWriter


def split_pdf(input_path, output_path, start_page, end_page):
    reader = PdfReader(input_path)
    writer = PdfWriter()

    total_pages = len(reader.pages)
    if end_page > total_pages:
        print(f"경고: 끝 페이지({end_page})가 총 페이지 수({total_pages})를 초과합니다. {total_pages}페이지까지 처리합니다.")
        end_page = total_pages

    for page_num in range(start_page - 1, end_page):
        writer.add_page(reader.pages[page_num])

    with open(output_path, "wb") as f:
        writer.write(f)

    print(f"완료: {start_page}~{end_page}페이지 -> {output_path}")


def main():
    if len(sys.argv) < 4:
        print("사용법: python tools/split_pdf.py <입력파일> <시작페이지> <끝페이지> [출력파일]")
        sys.exit(1)

    input_file = sys.argv[1]
    start = int(sys.argv[2])
    end = int(sys.argv[3])
    output_file = sys.argv[4] if len(sys.argv) > 4 else f"split_{start}-{end}.pdf"

    split_pdf(input_file, output_file, start, end)


if __name__ == "__main__":
    main()
