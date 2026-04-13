from pydantic import BaseModel, Field

class EmployeeSchema(BaseModel):
    Education: str = Field(..., json_schema_extra={"example": "Bachelors"})
    JoiningYear: int = Field(..., json_schema_extra={"example": 2017})
    City: str = Field(..., json_schema_extra={"example": "Bangalore"})
    PaymentTier: int = Field(..., json_schema_extra={"example": 3})
    Age: int = Field(..., json_schema_extra={"example": 34})
    Gender: str = Field(..., json_schema_extra={"example": "Male"})
    EverBenched: str = Field(..., json_schema_extra={"example": "No"})
    ExperienceInCurrentDomain: int = Field(..., json_schema_extra={"example": 0})


class PredictionViewSchema(BaseModel):
    status: str
    resultado: int
    diagnostico: str