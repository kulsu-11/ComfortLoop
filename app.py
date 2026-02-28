from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from gpt4all import GPT4All

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load local model (CHANGE PATH IF YOUR MODEL IS ELSEWHERE)
model = GPT4All(
    r"C:\Users\ASUS\AppData\Local\nomic.ai\GPT4All\Meta-Llama-3-8B-Instruct.Q4_0.gguf"
)

# Request schema
class ChatRequest(BaseModel):
    message: str

# Chat endpoint
@app.post("/chat")
def chat(req: ChatRequest):

    try:

        user_message_lower = req.message.lower()

        # Suicide / self harm safety detection
        danger_keywords = [
            "suicide",
            "kill",
            "die",
            "want to die",
            "self harm",
            "hurt myself",
            "end my life",
            "depressed and want to die"
        ]

        # Safety response
        if any(keyword in user_message_lower for keyword in danger_keywords):

            return {
                "reply": """
I am really sorry that you are feeling this way 💚

You are not alone.

If you are in India, please contact:

KIRAN Mental Health Helpline:
📞 1800-599-0019 (24/7 Free)

Please talk to someone you trust.
"""
            }

        # Normal chatbot prompt
        prompt = f"""
You are a compassionate mental health support assistant inside a wellness web application.

User message: {req.message}

Respond in a kind, supportive, and safe way.
Do not generate random or unrelated content.
Keep response short and meaningful.
Avoid harmful or inappropriate content.
"""

        response = model.generate(
            prompt,
            max_tokens=100,
            temp=0.3
        )

        return {"reply": response}

    except Exception:
        return {"reply": "Sorry, I am unable to respond right now 💚"}