from flask import Flask, request, jsonify
import pickle
import faiss

app = Flask(__name__)

# Load the .pkl and .faiss files with error handling
try:
    with open("index.pkl", "rb") as f:
        model = pickle.load(f)
except KeyError as e:
    print(f"Error loading pickle file: {e}")
    model = None  # Handle the error gracefully

try:
    index = faiss.read_index("index.faiss")
except Exception as e:
    print(f"Error loading FAISS index: {e}")
    index = None  # Handle the error gracefully

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    # Process the user input and get a response
    if model and index:
        response = f"Received your message: {user_input}"  # Replace with actual model logic
    else:
        response = "Model or index not loaded properly."

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)