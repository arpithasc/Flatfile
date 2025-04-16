from clickhouse_connect import get_client

class ClickHouseService:
    client = None

    @staticmethod
    def connect(host, port, user, token, database):
        try:
            ClickHouseService.client = get_client(
                host=host, 
                port=port, 
                username=user, 
                password=token, 
                database=database, 
                secure=True
            )
            return {"status": "Connected successfully!"}
        except Exception as e:
            return {"status": "Connection failed", "error": str(e)}

    @staticmethod
    def get_tables():
        try:
            tables = ClickHouseService.client.query("SHOW TABLES").result_rows
            return {"tables": [row[0] for row in tables]}
        except Exception as e:
            return {"error": str(e)}
