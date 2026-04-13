export default {
  labels: {
    Education: "Nível de Escolaridade",
    JoiningYear: "Ano de Admissão",
    City: "Cidade",
    PaymentTier: "Nível Salarial",
    Age: "Idade",
    Gender: "Sexo",
    EverBenched: "Já ficou sem projeto?",
    ExperienceInCurrentDomain: "Experiência na área (anos)"
  },
  values: {
    Gender: {
      Male: "Masculino",
      Female: "Feminino"
    },
    EverBenched: {
      Yes: "Sim",
      No: "Não"
    },
    Education: {
      Bachelors: "Graduação",
      Masters: "Mestrado",
      PhD: "Doutorado"
    }
  },
  messages: {
    title: "Previsão de Retenção",
    loading: "⏳ Processando...",
    success: "Resultado",
    error: "Erro",
    initial: "Preencha os dados e clique em \"Prever\"",

    stay: "O funcionário provavelmente permanecerá na empresa.",
    leave: "O funcionário apresenta risco de saída da empresa.",
    probability: "Probabilidade de saída"
  },
  risk: {
  low: "Baixo risco",
  medium: "Risco moderado",
  high: "Alto risco"
  }
};