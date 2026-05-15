import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'gatsby';
import { PDFDocument } from 'pdf-lib';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  min-height: 100vh;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  margin-bottom: 24px;
  transition: color 0.2s;

  &:hover { color: #818cf8; }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.headline};
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
`;

const DropZone = styled.div`
  border: 2px dashed ${({ $drag, theme }) =>
    $drag ? '#818cf8' : theme.colors.gray};
  border-radius: 16px;
  padding: 60px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  background: ${({ $drag, theme }) =>
    $drag ? 'rgba(129,140,248,0.06)' : 'transparent'};

  &:hover {
    border-color: #818cf8;
    background: rgba(129,140,248,0.04);
  }
`;

const DropIcon = styled.div`font-size: 2.5rem; margin-bottom: 12px;`;
const DropText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

const FileInfo = styled.div`
  margin-top: 24px;
  padding: 16px 20px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.headline};
`;

const PageCount = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const RangeSection = styled.div`
  margin-top: 32px;
`;

const RangeLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.headline};
  display: block;
  margin-bottom: 12px;
`;

const RangeRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const RangeInput = styled.input`
  width: 100px;
  padding: 10px 14px;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: #818cf8;
    box-shadow: 0 0 0 3px rgba(129,140,248,0.15);
  }
`;

const RangeSeparator = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const SplitBtn = styled.button`
  margin-top: 32px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: ${({ disabled }) =>
    disabled ? 'rgba(129,140,248,0.3)' : 'linear-gradient(135deg, #818cf8, #6366f1)'};
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99,102,241,0.35);
  }
`;

const StatusMsg = styled.p`
  margin-top: 16px;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ $error }) => ($error ? '#ef4444' : '#22c55e')};
`;

const PdfSplitPage = () => {
  const [pdfBytes, setPdfBytes] = useState(null);
  const [fileName, setFileName] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  const [status, setStatus] = useState(null);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  const handleFile = useCallback(async (file) => {
    if (!file || file.type !== 'application/pdf') {
      setStatus({ text: 'PDF 파일만 지원합니다.', error: true });
      return;
    }
    const buffer = await file.arrayBuffer();
    try {
      const pdf = await PDFDocument.load(buffer);
      const count = pdf.getPageCount();
      setPdfBytes(buffer);
      setFileName(file.name);
      setTotalPages(count);
      setStart(1);
      setEnd(count);
      setStatus(null);
    } catch {
      setStatus({ text: 'PDF 파일을 읽을 수 없습니다.', error: true });
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, [handleFile]);

  const handleSplit = useCallback(async () => {
    if (!pdfBytes) return;
    if (start < 1 || end > totalPages || start > end) {
      setStatus({ text: '페이지 범위를 확인해주세요.', error: true });
      return;
    }
    try {
      const src = await PDFDocument.load(pdfBytes);
      const dst = await PDFDocument.create();
      const pages = await dst.copyPages(src, Array.from({ length: end - start + 1 }, (_, i) => i + start - 1));
      pages.forEach((p) => dst.addPage(p));
      const resultBytes = await dst.save();

      const blob = new Blob([resultBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `split_${start}-${end}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      setStatus({ text: `${start}~${end}페이지 분할 완료!`, error: false });
    } catch {
      setStatus({ text: '분할 중 오류가 발생했습니다.', error: true });
    }
  }, [pdfBytes, start, end, totalPages]);

  return (
    <Layout>
      <SEO title="PDF 분할 도구" />
      <Wrapper>
        <BackLink to="/">&larr; 홈</BackLink>
        <Title>PDF Split</Title>
        <Subtitle>PDF 파일의 원하는 페이지만 잘라내어 다운로드합니다. 파일은 서버에 업로드되지 않습니다.</Subtitle>

        <DropZone
          $drag={drag}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={handleDrop}
        >
          <DropIcon>📄</DropIcon>
          <DropText>PDF 파일을 드래그하거나 클릭하여 선택</DropText>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </DropZone>

        {pdfBytes && (
          <>
            <FileInfo>
              <FileName>{fileName}</FileName>
              <PageCount>{totalPages}페이지</PageCount>
            </FileInfo>

            <RangeSection>
              <RangeLabel>분할할 페이지 범위</RangeLabel>
              <RangeRow>
                <RangeInput
                  type="number"
                  min={1}
                  max={totalPages}
                  value={start}
                  onChange={(e) => setStart(Number(e.target.value))}
                />
                <RangeSeparator>~</RangeSeparator>
                <RangeInput
                  type="number"
                  min={1}
                  max={totalPages}
                  value={end}
                  onChange={(e) => setEnd(Number(e.target.value))}
                />
                <PageCount>/ {totalPages}</PageCount>
              </RangeRow>
            </RangeSection>

            <SplitBtn onClick={handleSplit} disabled={!pdfBytes}>
              분할 & 다운로드
            </SplitBtn>
          </>
        )}

        {status && <StatusMsg $error={status.error}>{status.text}</StatusMsg>}
      </Wrapper>
    </Layout>
  );
};

export default PdfSplitPage;
