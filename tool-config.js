export const tool={
  "id": "E057",
  "slug": "eng-lorentz-factor",
  "title": "로런츠 인자 계산기",
  "title_en": "Lorentz Factor Calculator",
  "category": "상대론",
  "category_en": "Relativity",
  "fields": [
    {
      "key": "v",
      "label": "상대 속력 v",
      "label_en": "Relative speed v",
      "dimension": "speed",
      "example": 179875474.79999998,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "179875474.8"
    }
  ],
  "result_label": "로런츠 인자 γ",
  "result_label_en": "Lorentz factor γ",
  "result_dimension": "ratio",
  "formula": "γ = 1/√(1−v²/c²)",
  "purpose": "특수상대론 속력에 따른 로런츠 인자 계산",
  "purpose_en": "Calculate the Lorentz factor from relative speed.",
  "assumptions": "0≤v<c. 관성계 사이의 상대 속력에 쓰는 특수상대론 관계다. 중력에 의한 시간 지연은 제외한다. 광속 이상 입력은 거부한다.",
  "assumptions_en": "Required: 0≤v<c. Special relativity between inertial frames. Excluded: gravitational time dilation. Speeds at or above light speed are rejected.",
  "sources": [
    {
      "label": "OpenStax · 5 3 time dilation",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-lorentz-factor/",
  "repository": "https://github.com/NaNaCompany/eng-lorentz-factor",
  "output_unit": "1"
};
