import { predictEmployee } from "./services/employeeRetentionService.js";
import { getMetadata } from "./services/employeeRetentionService.js";
import { t } from "./i18n/i18n.js";
import { setLanguage } from "./i18n/i18n.js";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}



const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // converter números
  data.JoiningYear = Number(data.JoiningYear);
  data.PaymentTier = Number(data.PaymentTier);
  data.Age = Number(data.Age);
  data.ExperienceInCurrentDomain = Number(data.ExperienceInCurrentDomain);

  try {
    resultDiv.innerHTML = t("messages.loading");
    const button = form.querySelector("button");
    button.disabled = true;
    const result = await predictEmployee(data);

    const isLeaving = result.resultado === 1;
    const prob = Number(result?.probabilidade ?? 0);
    const riskLevel = getRiskLevel(prob);
    const percentage = (prob * 100).toFixed(1);
    

    //  resultDiv.innerHTML = `
    //    <span style="color:${result.resultado === 1 ? 'red' : 'green'}">
    //      ${t("messages.success")}: ${result.diagnostico}
    //    </span>
    //  `;

    const messageKey = result.resultado === 1 ? "leave" : "stay";

    //resultDiv.innerHTML = `
    //  <span style="color:${result.resultado === 1 ? 'red' : 'green'}">
    //    ${t("messages.success")}: ${t(`messages.${messageKey}`)}
    //  </span>
    //`;


    
    //resultDiv.innerHTML = `
    //  <div style="padding:15px">
//
    //    <!-- Resultado -->
    //    <div style="color:${isLeaving ? 'red' : 'green'}; font-size:18px">
    //      <strong>${isLeaving ? "⚠️" : "✅"} ${t("messages.success")}:</strong>
    //      ${t(`messages.${isLeaving ? "leave" : "stay"}`)}
    //    </div>
//
    //    <!-- Probabilidade -->
    //    <div style="margin-top:10px">
    //      📊 ${t("messages.probability")}: <strong>${percentage}%</strong>
    //    </div>
//
    //    <!-- Barra -->
    //    <div style="
    //      background:#eee;
    //      border-radius:8px;
    //      margin-top:10px;
    //      overflow:hidden;
    //      height:20px;
    //    ">
    //      <div style="
    //        width:${percentage}%;
    //        background:${isLeaving ? '#dc3545' : '#28a745'};
    //        height:100%;
    //        transition: width 0.5s ease;
    //      ">
    //      </div>
    //    </div>
//
    //    <!-- Risco -->
    //    <div style="margin-top:8px">
    //      🎯 ${t("risk." + riskLevel)}
    //    </div>
//
    //  </div>
    //`;



    resultDiv.innerHTML = `
      <div style="padding:15px">

        <!-- Resultado -->
        <div style="color:${isLeaving ? 'red' : 'green'}; font-size:18px">
          <strong>${isLeaving ? "⚠️" : "✅"} ${t("messages.success")}:</strong>
          ${t(`messages.${isLeaving ? "leave" : "stay"}`)}
        </div>

        <!-- Probabilidade -->
        <div style="margin-top:10px">
          📊 ${t("messages.probability")}: <strong>${percentage}%</strong>
        </div>

        <!-- 🔥 AQUI entra sua barra -->
        <div class="progress-container">
          <div class="progress-bar ${isLeaving ? 'high' : 'low'}"
              style="width:${percentage}%">
          </div>
        </div>

        <!-- Risco -->
        <div style="margin-top:8px">
          🎯 ${t("risk." + riskLevel)}
        </div>

      </div>
    `;
    

    button.disabled = false;
  } catch (error) {
    resultDiv.innerHTML = `
      <span style="color:red">
        ❌ ${t("messages.error")}: ${error.message}
      </span>
    `;
  }
});


let metadataCache = null;

async function loadMetadata() {
  metadataCache = await getMetadata();

  renderSelects();
}

function renderSelects() {
  if (!metadataCache) return;

  populateSelect("Education", metadataCache.Education);
  populateSelect("City", metadataCache.City);
  populateSelect("Gender", metadataCache.Gender);
  populateSelect("EverBenched", metadataCache.EverBenched);
}

//async function loadMetadata() {
//  const data = await getMetadata();
//
//  populateSelect("Education", data.Education);
//  populateSelect("City", data.City);
//  populateSelect("Gender", data.Gender);
//  populateSelect("EverBenched", data.EverBenched);
//}
//
//function populateSelect(name, values) {
//  const select = document.querySelector(`[name="${name}"]`);
//
//  select.innerHTML = `<option value="">Selecione</option>`;
//
//  values.forEach(v => {
//    select.innerHTML += `<option value="${v}">${v}</option>`;
//  });
//}
//
//function populateSelect(name, values) {
//  const select = document.querySelector(`[name="${name}"]`);
//
//  select.innerHTML = `<option value="">Selecione</option>`;
//
//  values.forEach(v => {
//    const label = t(`values.${name}.${v}`) || v;
//
//    select.innerHTML += `<option value="${v}">${label}</option>`;
//  });
//}

//function populateSelect(name, values) {
//  const select = document.querySelector(`[name="${name}"]`);
//
//  select.innerHTML = `<option value="">Selecione</option>`;
//
//  values.forEach(v => {
//    const translated = t(`values.${name}.${v}`);
//    const label = translated !== `values.${name}.${v}`
//      ? translated
//      : formatLabel(v);
//
//    select.innerHTML += `<option value="${v}">${label}</option>`;
//  });
//}

function populateSelect(name, values) {
  const select = document.querySelector(`[name="${name}"]`);

  const currentValue = select.value; //salva seleção

  select.innerHTML = `<option value="">Selecione</option>`;

  values.forEach(v => {
    const translated = t(`values.${name}.${v}`);
    const label = translated !== `values.${name}.${v}`
      ? translated
      : formatLabel(v);

    const selected = v === currentValue ? "selected" : "";

    select.innerHTML += `<option value="${v}" ${selected}>${label}</option>`;
  });
}

function formatLabel(value) {
  return value
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^./, str => str.toUpperCase());
}

window.changeLang = (lang) => {
  setLanguage(lang);

  localStorage.setItem("lang", lang); //salva

  applyTranslations();
  renderSelects(); // mantém seus selects atualizados
};

function getRiskLevel(prob) {
  if (prob < 0.3) return "low";
  if (prob < 0.7) return "medium";
  return "high";
}

const savedLang = localStorage.getItem("lang") || "pb";
if (savedLang) {
  setLanguage(savedLang);
}

// atualizar UI inicial
const selectedOption = document.querySelector(`[data-lang="${savedLang}"]`);
if (selectedOption) {
  langFlag.src = selectedOption.querySelector("img").src;
  langLabel.textContent = selectedOption.querySelector("span").textContent;
}

function initLanguageDropdown() {
  const langSelected = document.getElementById("langSelected");
  const langOptions = document.getElementById("langOptions");
  const langFlag = document.getElementById("langFlag");
  const langLabel = document.getElementById("langLabel");

  if (!langSelected) return; // 🛡️ evita erro se não existir

  // abrir/fechar dropdown
  langSelected.addEventListener("click", () => {
    langOptions.style.display =
      langOptions.style.display === "block" ? "none" : "block";
  });

  // trocar idioma
  document.querySelectorAll(".lang-option").forEach(option => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;

      localStorage.setItem("lang", lang);
      setLanguage(lang);

      // atualiza UI
      langFlag.src = option.querySelector("img").src;
      langLabel.textContent = option.querySelector("span").textContent;

      applyTranslations();
      renderSelects();

      langOptions.style.display = "none";
    });
  });

  // 🔥 carregar idioma salvo
  const savedLang = localStorage.getItem("lang") || "pb";
  setLanguage(savedLang);

  const selectedOption = document.querySelector(`[data-lang="${savedLang}"]`);
  if (selectedOption) {
    langFlag.src = selectedOption.querySelector("img").src;
    langLabel.textContent = selectedOption.querySelector("span").textContent;
  }
}

loadMetadata();
applyTranslations();
initLanguageDropdown();