import pb from "./pb.js";
import en from "./en.js";

const languages = {
  pb,
  en
};

// idioma padrão
let currentLang = "pb";

export function setLanguage(lang) {
  currentLang = lang;
}

export function t(path) {
  const keys = path.split(".");
  let value = languages[currentLang];

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
}