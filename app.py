from flask import Flask, request
app = Flask(__name__)

@app.after_request # blueprint can also be app~~
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/login',methods = ['POST'])
def login():
    usuarios_com_cadastro = ["douglas@gmail.com"]
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        print(f"Recebi uma tentativa de login de {email} e {password}")
        if email in usuarios_com_cadastro:
            return "OK"
        else:
            return "criar-conta"

if __name__ == "__main__":
    app.run(debug=True)