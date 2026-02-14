from flask_cors import CORS

from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

data = [
    "عظة عن المحبة",
    "عظة عن السلام",
    "آية: الله محبة",
    "تعليم كنسي عن الصبر"
]

@app.route("/search")
def search():
    q = request.args.get("q", "")
    result = [item for item in data if q in item]
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
