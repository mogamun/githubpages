import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardLink}:hover & {
    transform: scale(1.05);
  }
`;

const ExcerptPreview = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  padding: 20px 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.backgroundSecondary} 100%);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(transparent, ${({ theme }) => theme.colors.background});
  }

  p {
    position: relative;
    z-index: 1;
    font-size: 14px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.paragraph};
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    opacity: 0.8;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.span`
  font-size: 12px;
  color: #00c73c;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.headline};
`;

const Summary = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: auto;
  opacity: 0.7;
`;

const PostCard = ({ slug, title, date, category, thumbnail, summary, excerpt }) => (
  <CardLink to={slug}>
    {thumbnail ? (
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail} alt={title} />
      </ThumbnailWrapper>
    ) : (
      <ExcerptPreview>
        <p>{excerpt || summary || ''}</p>
      </ExcerptPreview>
    )}
    <CardContent>
      <Category>{category}</Category>
      <Title>{title}</Title>
      {summary && <Summary>{summary}</Summary>}
      <Date>{date}</Date>
    </CardContent>
  </CardLink>
);

export default PostCard;
