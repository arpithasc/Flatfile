from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# CORS setup to allow React frontend to access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or use ["http://localhost:3000"] if you're strict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request schema
class IngestRequest(BaseModel):
    source: str
    config: Dict[str, str]
    columns: List[str]

# Sample ingestion logic (replace with actual functions)
def ingest_from_clickhouse(config, columns):
    print("Ingesting from ClickHouse with", config, columns)
    return 1234  # simulate record count

def ingest_from_flatfile(config, columns):
    print("Ingesting from Flat File with", config, columns)
    return 5678  # simulate record count

# API route
@app.post("/api/ingest")
async def ingest(request: IngestRequest):
    try:
        if request.source == "ClickHouse":
            record_count = ingest_from_clickhouse(request.config, request.columns)
        elif request.source == "FlatFile":
            record_count = ingest_from_flatfile(request.config, request.columns)
        else:
            return {"success": False, "message": "Invalid source"}

        return {"success": True, "recordCount": record_count}
    except Exception as e:
        return {"success": False, "message": str(e)}
