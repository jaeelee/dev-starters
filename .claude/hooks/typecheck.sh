#!/bin/bash
# TypeScript 파일 수정 후 타입 체크 자동 실행 (PostToolUse)

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('tool_input', {}).get('file_path', ''))
" 2>/dev/null || echo "")

# TypeScript 파일이 아니면 무시
if [[ ! "$FILE_PATH" =~ \.(ts|tsx)$ ]]; then
  exit 0
fi

OUTPUT=$(pnpm tsc --noEmit 2>&1)
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ TypeScript 타입 체크 통과: $FILE_PATH"
else
  echo "⚠️ TypeScript 타입 에러 발견 ($FILE_PATH 수정 후):"
  echo "$OUTPUT" | head -50
fi
