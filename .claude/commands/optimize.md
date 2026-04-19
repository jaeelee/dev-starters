---
description: git status 기준 변경 파일의 성능 최적화 분석
---

## 최적화 분석 시작

```
git status --porcelain | awk '{print $NF}'
```

변경된 파일들을 감지했습니다. 파일 유형별 성능 분석을 진행하겠습니다:

### 분석 대상 파일 유형
- **React 컴포넌트** (`.tsx`): React 19 최적화, Server/Client Component 구분, 리렌더링
- **커스텀 훅** (`hooks/*.ts`): TanStack Query, 의존성 배열 최적화
- **API 라우트** (`app/api/**/*.ts`): 캐싱, 병렬화, 에러 핸들링
- **유틸리티** (`lib/*.ts`): 모듈 최적화, lazy import 기회
- **스타일** (`.css`): 중복 클래스, CSS 변수 활용

---

## React 컴포넌트 분석

각 변경된 `.tsx` 파일에 대해:

1. **React 19 최적화 기회**
   - [ ] `use()` hook으로 Promise 처리 가능한가?
   - [ ] 불필요한 `useMemo`/`useCallback`이 있는가? (React Compiler가 자동 최적화)
   - [ ] `useState` 대신 `use()` + 서버 데이터 가능한가?

2. **Server Component 전환**
   - [ ] `'use client'` 없이 동작 가능한가?
   - [ ] 외부 상태 접근 없이 순수 렌더링만 하는가?

3. **리렌더링 최적화**
   - [ ] `key` prop이 안정적인가? (배열 인덱스 ❌ → 고유 ID ✅)
   - [ ] 과도한 state가 있는가?
   - [ ] props drilling이 있는가? → Context 또는 composition 검토

4. **코드 스플리팅**
   - [ ] `dynamic()` import로 레이지 로딩할 수 있는가?

5. **이미지 최적화**
   - [ ] `<img>` → `next/image`의 `<Image>` 컴포넌트로 전환 가능한가?

---

## 훅 분석

`hooks/` 폴더의 변경 파일:

1. **TanStack Query v5 최적화**
   - [ ] `staleTime` / `gcTime` 설정 있는가?
   - [ ] `select` 옵션으로 불필요한 리렌더 방지하는가?
   - [ ] `keepPreviousData` 대신 `placeholderData` 사용 가능한가?

2. **기존 훅 재사용**
   - [ ] `use-debounce.ts` (이미 구현됨) 재사용하는가?
   - [ ] `use-local-storage.ts` (이미 구현됨) 재사용하는가?

3. **의존성 배열**
   - [ ] 의존성 배열이 최소화되었는가?
   - [ ] 불필요한 객체/함수 의존성이 없는가?

---

## API 라우트 분석

`app/api/` 폴더의 변경 파일:

1. **응답 캐싱**
   - [ ] `Cache-Control` 헤더 설정했는가?
   - [ ] `revalidate` 옵션 설정했는가?

2. **병렬화**
   - [ ] 순차 `await` → `Promise.all()` 가능한가?
   - [ ] 외부 API 호출이 병렬화되었는가?

3. **에러 핸들링**
   - [ ] 모든 라우트가 일관된 에러 형식을 반환하는가?

---

## 유틸리티 분석

`lib/` 폴더의 변경 파일:

1. **모듈 최적화**
   - [ ] 불필요한 import가 있는가?
   - [ ] 무거운 라이브러리를 lazy import할 수 있는가?

2. **함수 최적화**
   - [ ] 순수 함수인가? (캐싱/메모이제이션 가능한가?)
   - [ ] 불필요한 계산이 반복되는가?

---

## 스타일 분석

`.css` 파일 변경:

1. **중복 제거**
   - [ ] 중복된 Tailwind 클래스가 있는가?

2. **CSS 변수**
   - [ ] 반복되는 값을 CSS 변수로 정의할 수 있는가?

---

## 최종 요약

위 항목들을 체크하면서 다음 우선순위로 최적화하세요:

**🔴 높음 (성능 영향 큼)**
- Server Component 전환 (번들 크기 감소)
- Promise.all() 병렬화 (API 응답 시간 단축)
- 캐싱 설정 (네트워크 요청 감소)

**🟡 중간 (개발 경험 + 성능)**
- 불필요한 `useMemo`/`useCallback` 제거
- key prop 안정화
- TanStack Query 최적화

**🟢 낮음 (코드 품질)**
- lazy import
- 중복 클래스 제거
- CSS 변수 활용
