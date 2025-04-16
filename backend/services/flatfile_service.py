import csv
import aiofiles

class FlatFileService:

    @staticmethod
    async def process_csv(file):
        try:
            contents = await file.read()
            lines = contents.decode().splitlines()
            reader = csv.reader(lines)
            header = next(reader)
            row_count = sum(1 for _ in reader)
            return {"columns": header, "rows": row_count}
        except Exception as e:
            return {"error": str(e)}
