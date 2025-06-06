from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import qrcode
import io
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)
print("Deploy atualizado: modificação no código feita em 05/06")

class QRRequest(BaseModel):
    content: str

@app.post("/gerar_qrcode")
def gerar_qrcode(data: QRRequest):
    img = qrcode.make(data.content)
    
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")
    
    return {"image": f"data:image/png;base64,{base64_img}"}
