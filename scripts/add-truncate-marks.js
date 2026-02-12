#!/usr/bin/env node

// 모든 블로그 포스트의 5줄 위치에 <!--truncate--> 마크를 자동으로 추가하는 스크립트
// 사용법: node scripts/add-truncate-marks.js
// 동작: 1. blog 폴더의 모든 .md, .mdx 파일 검사
//       2. front matter 제거
//       3. 첫 5줄 다음에 truncate 마크 추가
//       4. 기존 truncate 마크가 있으면 스킵

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../blog');
const LINES_TO_SHOW = 5;

// front matter 파싱
function parseFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return { frontMatter: '', content: content };
  }
  
  return {
    frontMatter: match[1],
    content: match[2]
  };
}

// truncate 마크가 있는지 확인
function hasExistingTruncate(content) {
  return /<!--\s*truncate\s*-->/i.test(content) || /{\/\*\s*truncate\s*\*\/}/i.test(content);
}

// 5줄 위치에 truncate 마크 삽입
function addTruncateMarker(content, isMarkdown = true) {
  const lines = content.split('\n');
  
  let contentLineCount = 0;
  let insertIndex = 0;
  let inCodeBlock = false;
  const codeBlockMarker = '```';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith(codeBlockMarker)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    if (!inCodeBlock && line.length > 0) {
      contentLineCount++;
      
      if (contentLineCount === LINES_TO_SHOW) {
        insertIndex = i + 1;
        break;
      }
    }
  }
  
  if (insertIndex === 0) {
    insertIndex = lines.length;
  }
  
  const marker = isMarkdown ? '<!--truncate-->' : '{/* truncate */}';
  lines.splice(insertIndex, 0, '', marker, '');
  
  return lines.join('\n');
}

// 파일 처리
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontMatter, content: bodyContent } = parseFrontMatter(content);
    
    // 이미 truncate 마크가 있으면 스킵
    if (hasExistingTruncate(bodyContent)) {
      console.log(`✓ 이미 truncate 마크 있음: ${path.relative(BLOG_DIR, filePath)}`);
      return false;
    }
    
    // 마크다운 여부 확인
    const isMarkdown = filePath.endsWith('.md');
    
    // truncate 마크 추가
    const newBodyContent = addTruncateMarker(bodyContent, isMarkdown);
    const newContent = `---\n${frontMatter}\n---\n${newBodyContent}`;
    
    // 파일 저장
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✓ 추가 완료: ${path.relative(BLOG_DIR, filePath)}`);
    return true;
  } catch (error) {
    console.error(`✗ 오류: ${path.relative(BLOG_DIR, filePath)}`, error.message);
    return false;
  }
}

// 재귀적으로 파일 찾기
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let processedCount = 0;
  let skippedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const result = walkDir(filePath);
      processedCount += result.processed;
      skippedCount += result.skipped;
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const isProcessed = processFile(filePath);
      if (isProcessed) {
        processedCount++;
      } else {
        skippedCount++;
      }
    }
  });
  
  return { processed: processedCount, skipped: skippedCount };
}

async function addTruncateMarksToAllPosts(logOutput = true) {
  if (logOutput) {
    console.log(`🚀 ${BLOG_DIR} 폴더의 모든 블로그 포스트에 truncate 마크 추가...\n`);
  }
  
  const result = walkDir(BLOG_DIR);
  
  if (logOutput) {
    console.log(`\n✅ 완료!`);
    console.log(`  - 추가된 파일: ${result.processed}개`);
    console.log(`  - 스킵된 파일: ${result.skipped}개`);
  }
  
  return result;
}

module.exports = { addTruncateMarksToAllPosts };

if (require.main === module) {
  addTruncateMarksToAllPosts(true);
}
