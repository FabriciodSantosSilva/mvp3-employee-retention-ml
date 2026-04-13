class InputValidator:
    REQUIRED_FIELDS = [
        'Education', 'JoiningYear', 'City', 'PaymentTier',
        'Age', 'Gender', 'EverBenched', 'ExperienceInCurrentDomain'
    ]

    CATEGORICAL_FIELDS = ['Education', 'City', 'Gender', 'EverBenched']

    def validate(self, input_data, encoders):
        # campos obrigatórios
        missing = [f for f in self.REQUIRED_FIELDS if f not in input_data]
        if missing:
            raise ValueError(f"Campos obrigatórios ausentes: {missing}")

        # valida categorias
        for col in self.CATEGORICAL_FIELDS:
            value = input_data.get(col)
            if value not in encoders[col].classes_:
                valid = ", ".join(encoders[col].classes_)
                raise ValueError(
                    f"Valor inválido '{value}' para '{col}'. Use: {valid}"
                )

        return True