import pandas as pd

class DataTransformer:
    FEATURE_ORDER = [
        'Education', 'JoiningYear', 'City', 'PaymentTier',
        'Age', 'Gender', 'EverBenched', 'ExperienceInCurrentDomain'
    ]

    def transform(self, input_data, encoders):
        df = pd.DataFrame([input_data])[self.FEATURE_ORDER]

        # aplicar encoding
        for col in ['Education', 'City', 'Gender', 'EverBenched']:
            df[col] = encoders[col].transform(df[col])

        # tipagem (importante!)
        df['Age'] = df['Age'].astype(int)
        df['JoiningYear'] = df['JoiningYear'].astype(int)

        return df