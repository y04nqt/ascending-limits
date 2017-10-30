# server.py
from flask import Flask, render_template, url_for

app = Flask(__name__, static_folder="../static", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello Universe, it is great to be here with you"

@app.route("/code")
def code():
    return "lol"

if __name__ == "__main__":
    app.run()