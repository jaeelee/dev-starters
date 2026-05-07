#!/bin/bash
# 민감한 파일 수정 차단 (PreToolUse - Edit/Write)

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('tool_input', {}).get('file_path', ''))
" 2>/dev/null || echo "")

BASENAME=$(basename "$FILE_PATH")

# .env 파일 보호 (.env.example 제외)
if [[ "$BASENAME" =~ ^\.env ]] && [[ "$BASENAME" != ".env.example" ]]; then
  echo "🚫 환경 변수 파일 수정이 차단되었습니다: $FILE_PATH"
  echo ""
  echo "이유: .env* 파일에는 API 키, 시크릿 등 민감 정보가 포함됩니다."
  echo "대안: .env.example에 키 이름만 추가하고 사용자에게 값 입력을 요청하세요."
  exit 1
fi

# 인증서 및 개인키 파일 보호
if [[ "$BASENAME" =~ \.(pem|key|p12|pfx|crt|cer|jks)$ ]]; then
  echo "🚫 인증서/키 파일 수정이 차단되었습니다: $FILE_PATH"
  echo ""
  echo "이유: 보안 인증서와 개인키는 자동 수정 대상이 아닙니다."
  exit 1
fi

# secrets 디렉터리 보호
if [[ "$FILE_PATH" =~ /secrets/ ]] || [[ "$FILE_PATH" =~ /\.secrets/ ]]; then
  echo "🚫 secrets 디렉터리의 파일 수정이 차단되었습니다: $FILE_PATH"
  exit 1
fi

exit 0
