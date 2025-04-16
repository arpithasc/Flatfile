# Flatfile

# ClickHouse-FlatFile Ingestion Tool

This is a web-based application for bidirectional data ingestion between a ClickHouse database and a Flat File (CSV). The tool allows users to select source/target, configure connections, choose specific columns, and handle JWT authentication for ClickHouse.

---

## 💡 Features

- 🔁 ClickHouse → Flat File
- 🔁 Flat File → ClickHouse
- ✅ JWT Token authentication support
- ✅ Column selection from tables or CSV
- ✅ Record count summary after ingestion
- ⚙️ Bonus: Multi-table JOIN support (ClickHouse)
- 🧪 Tested with example datasets like `uk_price_paid`

---

## 🛠️ Technologies Used

- **Frontend**: React, HTML/CSS, Axios
- **Backend**: Python (Flask/FastAPI or similar)
- **Database**: ClickHouse
- **Auth**: JWT Token

---

## ⚙️ Setup Instructions

1. Clone the Repository

git clone https://github.com/arpithasc/Flatfile.git
cd Flatfile

2. Backend Setup (Python)
Create & Activate Virtual Environment
python3 -m venv venv(linux)

source venv/bin/activate  # On Windows use: venv\Scripts\activate

Install Dependencies

pip install -r requirements.txt

Run Backend Server

python app.py

Make sure your backend server runs on a port like 5000 or 8000

4. Frontend Setup (React)
Move into Frontend Directory
cd frontend
Install Node Modules

npm install
Start the React App

npm start
Runs at http://localhost:3000

🚀 How to Use
Select Source: ClickHouse or Flat File

Fill in connection/config fields

Load columns/tables from the source

Select the columns to ingest

Click the Ingest button

View success status and number of records processed

📂 Folder Structure
csharp
Copy
Edit
clickhouse-ingestion-tool/
│
├── app.py                   # Python backend
├── requirements.txt         # Python dependencies
├── frontend/                # React frontend
│   ├── public/
│   └── src/
│       ├── App.js
│       └── components/
│           └── IngestionForm.js
└── README.md

🔐 Authentication (ClickHouse)
JWT Token must be provided when selecting ClickHouse as source

Ensure ClickHouse supports secure connection ports (e.g., 8443, 9440)

📦 Example Datasets
Use ClickHouse example datasets for testing:

uk_price_paid

ontime

