# 로런츠 인자 계산기

특수상대론 속력에 따른 로런츠 인자 계산

- Plan ID: E057
- App: https://nanalab.kr/eng-lorentz-factor/
- Repository: https://github.com/NaNaCompany/eng-lorentz-factor
- Formula: `γ = 1/√(1−v²/c²)`
- Output: 로런츠 인자 γ

## Model

0≤v<c. 관성계 사이의 상대 속력에 쓰는 특수상대론 관계다. 중력에 의한 시간 지연은 제외한다. 광속 이상 입력은 거부한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `1.25`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
