#!/bin/bash
# 위험한 Bash 명령어 차단 (PreToolUse - Bash)

INPUT=$(cat)

COMMAND=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('tool_input', {}).get('command', ''))
" 2>/dev/null || echo "")

# 위험 패턴 목록
PATTERNS=(
  "rm -rf"
  "rm -fr"
  "push --force"
  "push -f"
  "reset --hard"
  "branch -D"
  "clean -fdx"
  "clean -ffd"
  "DROP TABLE"
  "DROP DATABASE"
  "drop table"
  "drop database"
  "chmod -R 777"
  "chmod 777"
)

for PATTERN in "${PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qi "$PATTERN"; then
    echo "🚫 위험한 명령어가 차단되었습니다"
    echo ""
    echo "감지 패턴: '$PATTERN'"
    echo "요청 명령어: $COMMAND"
    echo ""
    echo "이 명령어는 복구 불가능한 결과를 초래할 수 있습니다."
    echo "실행이 필요하다면 사용자에게 직접 실행을 요청하세요."
    exit 1
  fi
done

exit 0
