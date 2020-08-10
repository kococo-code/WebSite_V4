from flask import Flask ,blueprints
from flask_cors import CORS
from imageAPI import Blueprint_ImageGet
app = Flask(__name__)
CORS(app)
app.register_blueprint(Blueprint_ImageGet)
    
if(__name__=="__main__"):
    app.run(host="0.0.0.0",port='3000',debug=True)





